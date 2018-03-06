import axios from 'axios'
import mqtt from 'mqtt'
axios.defaults.baseURL = 'https://api.checklyhq.com'

const LAST_WILL_TOPIC = 'last-will'
const CLIENT_CONNECTED = 'client-connected'
const CLIENT_DISCONNECTED = 'client-disconnected'
const IOT_PRESIGNED_URL = '/sockets/signed-url'

const getNotification = (topic) => JSON.stringify({ topic })

const validateClientConnected = (client) => {
  if (!client) {
    throw new Error('Client is not connected yet. Call client.connect() first!')
  }
}

export default (topic) => {
  if (!topic) return console.error('Please provide a topic')
  const options = {
    will: {
      topic: LAST_WILL_TOPIC,
      payload: getNotification(topic)
    }
  }
  let client = null
  const clientWrapper = {}

  clientWrapper.connect = () => {
    return new Promise((resolve, reject) => {
      axios.get(IOT_PRESIGNED_URL)
        .then(response => {
          client = mqtt.connect(response.data.url, options)

          client.on('close', () => {
            console.log('Connection to AWS IoT Broker closed')
            client.end()
          })

          client.on('connect', () => {
            console.log(`Connected to AWS IoT Broker - subscribing to ${topic}`)
            client.subscribe(CLIENT_CONNECTED)
            client.subscribe(CLIENT_DISCONNECTED)
            client.subscribe(topic, (err, granted) => {
              if (err) return reject(err)
              console.log(`Subscribed to ${granted[0].topic}`)
              resolve(granted)
            })
          })
        })
    })
  }

  clientWrapper.onConnect = (cb) => {
    validateClientConnected(client)
    client.on('connect', cb)
    return clientWrapper
  }

  clientWrapper.onDisconnect = (cb) => {
    validateClientConnected(client)
    client.on('close', cb)
    return clientWrapper
  }

  clientWrapper.onMessageReceived = (cb) => {
    validateClientConnected(client)
    client.on('message', (topic, message) => {
      cb(topic, JSON.parse(message.toString('utf8')))
    })
    return clientWrapper
  }
  return clientWrapper
}
