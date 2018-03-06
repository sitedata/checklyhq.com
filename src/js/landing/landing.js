import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import VueLazyLoad from 'vue-lazyload'
import uuid from 'uuid'

import SocketClient from '../services/socket-client'
import Spinner from '../components/spinner/spinner'
import apiExamples from '../examples/api'
import { browserExamples, preFix as scriptPrefix, postFix as scriptPostFix } from '../examples/browser'

import filters from '../components/filters'
import { assertionSources, assertionComparisons, apiCheckModel, browserCheckRunStates as runStates } from '../components/models'
import StatusCircle from '../components/status-circle/status-circle'
import axios from 'axios'

Vue.use(VueHighlightJS)
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  attempt: 1
})

axios.defaults.baseURL = 'https://api.checklyhq.com'

const browserCheckRun = {
  type: '',
  state: runStates.ENDED,
  error: '',
  requests: [],
  result: {},
  incomingTestResults: []
}

new Vue({
  delimiters: ['${', '}'],
  el: '#landing',
  mixins: [filters],
  components: { StatusCircle, Spinner },
  created () {
    this.initializeForm()
    this.fetchPublicStats()
  },
  data () {
    return {
      apiExamples,
      browserExamples,
      assertionSources: [],
      assertionComparisons: [],
      showEditor: true,
      view: 'output',
      showApiResult: false,
      isSocketConnected: false,
      websocketClientId: '',
      apiLoading: false,
      browserLoading: false,
      scrolled: false,
      selectedFeature: 1,
      editorOptions: {
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'monokai',
        lineNumbers: true,
        line: true,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        styleSelectedText: true,
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true }
      },
      browserCheckRun: {
        type: '',
        state: runStates.PRISTINE,
        error: '',
        requests: [],
        result: {},
        incomingTestResults: []
      },
      browserCheck: {
      },
      apiCheck: {
        result: {
          responseTime: 0,
          hasErrors: false,
          hasFailures: false,
          response: {
            error: '',
            status: '0'
          }
        },
        check: {}
      },
      publicStats: {}
    }
  },
  methods: {
    initializeForm () {
      this.assertionSources = assertionSources.slice()
      this.assertionComparisons = assertionComparisons.slice()
      this.apiCheck.check = Object.assign({}, apiCheckModel)
      this.apiCheck.check.request = Object.assign({}, apiExamples[0])
      this.browserCheck = Object.assign({}, browserExamples[0])
      this.websocketClientId = uuid.v4()
      this.showApiResult = false
    },
    postBrowserCheck () {
      this.initializeBrowserCheck()
      this.trackEvent('browser-check', 'run')

      this.connectToSocket()
        .then(() => {
          const check = Object.assign({}, this.browserCheck)
          check.script = scriptPrefix + '\n' + check.script + '\n' + scriptPostFix
          check.websocketClientId = this.websocketClientId
          return axios.post('/browser-check-runs', check)
        })
        .then(res => {
          this.browserCheckRun.state = runStates.SUBMITTED
        })
        .catch(console.error)
    },
    initializeBrowserCheck () {
      this.browserCheckRun = Object.assign({}, browserCheckRun)
      this.browserCheckRun.incomingTestResults = []
      this.showEditor = false
      this.browserCheckRun.state = runStates.SUBMITTED
    },
    connectToSocket () {
      return new Promise((resolve, reject) => {
        if (this.isSocketConnected) {
          return resolve()
        } else {
          this.socketClient = new SocketClient(`browser-check-results/${this.websocketClientId}/#`)
          return this.socketClient.connect()
            .then(() => {
              this.isSocketConnected = true
              this.socketClient.onDisconnect(() => { this.isSocketConnected = false })
              this.socketClient.onMessageReceived((topic, message) => {
                const msgType = topic.split('/')[2]
                switch (msgType) {
                  case 'run-start':
                    this.browserCheckRun.type = message.type
                    this.browserCheckRun.state = runStates.RUNNING
                    console.log('run-start', message)
                    break
                  case 'suite-start':
                    console.log('suite-start', message)
                    break
                  case 'suite-end':
                    console.log('suite-end')
                    break
                  case 'test-start':
                    console.log('test-start', message)
                    break
                  case 'test-end':
                    // messages can be delivered out of order, so the end result might already be there
                    if (this.browserCheckRun.state === runStates.ENDED) {
                      const finalResult = this.browserCheckRun.result.tests.find(t => t.title === message.title)
                      message.err = finalResult.err
                      this.browserCheckRun.incomingTestResults.push(message)
                    } else {
                      this.browserCheckRun.incomingTestResults.push(message)
                    }
                    console.log('test-end', message)
                    break
                  case 'run-end':
                    this.browserCheckRun.state = runStates.ENDED
                    this.browserCheckRun.result = message.result
                    this.browserLoading = false
                    if (this.browserCheckRun.result.tests && this.browserCheckRun.result.tests.length > 0) {
                      this.browserCheckRun.result.tests.forEach(test => {
                        this.mergeFinalTestResult(test)
                      })
                    }
                    console.log('run-end', message)
                    break
                  case 'request-finished':
                    this.browserCheckRun.requests.push(message)
                    break
                  case 'error':
                    this.browserCheckRun.state = runStates.ERROR
                    this.browserCheckRun.error = message
                    this.browserLoading = false
                    break
                  case 'container-end':
                    this.browserLoading = false
                    this.browserCheckRun.state = runStates.ENDED
                }
              })
              resolve()
            })
        }
      })
    },
    mergeFinalTestResult (test) {
      const result = this.browserCheckRun.incomingTestResults.find(t => t.title === test.title)
      if (result) {
        result.err = test.err
      }
    },
    toggleShowDetails (index) {
      this.$set(this.browserCheckRun.incomingTestResults[index], 'showDetails', !this.browserCheckRun.incomingTestResults[index].showDetails)
    },
    postApiCheck () {
      this.trackEvent('api-check', 'run')
      this.apiLoading = true
      axios.post('/api-check-runs', this.apiCheck.check)
        .then(res => {
          this.apiCheck.result = res.data
          this.apiLoading = false
          this.showApiResult = true
        })
    },
    trackSignup () {
      this.trackEvent('beta-signup', 'submit')
    },
    trackEvent (category, action, label) {
      window.gtag('event', action, {
        'event_category': category,
        'event_label': label
      })
    },
    fetchPublicStats () {
      axios.get('/public-stats')
        .then(res => {
          this.publicStats = res.data
        })
    }
  },
  computed: {
    isPristine () {
      return this.browserCheckRun.state === runStates.PRISTINE
    },
    checkIsQueued () {
      return this.browserCheckRun.state === runStates.SUBMITTED
    },
    checkIsBusy () {
      return this.browserCheckRun.state === runStates.RUNNING || this.browserCheckRun.state === runStates.SUBMITTED
    },
    checkIsDone () {
      return this.browserCheckRun.state === runStates.ENDED
    },
    browserCheckResults () {
      return this.browserCheckRun.incomingTestResults
    },
    testsCompletedCount () {
      return this.browserCheckRun.incomingTestResults && this.browserCheckRun.incomingTestResults.length
    },
    testsFailedCount () {
      return this.browserCheckRun.incomingTestResults && this.browserCheckRun.incomingTestResults.filter(test => { return test.state !== 'passed' }).length
    },
    hasScreenshots () {
      return this.browserCheckRun.result && this.browserCheckRun.result.images && this.browserCheckRun.result.images.length > 0
    },
    runBrowserCheckButtonText () {
      switch (this.browserCheckRun.state) {
        case runStates.PRISTINE:
          return 'Run browser check'
        case runStates.SUBMITTED:
          return 'Queueing your script...'
        case runStates.RUNNING:
          return 'Running script'
        case runStates.ERROR:
          return 'Run browser check'
        case runStates.ENDED:
          return 'Run browser check'
        default:
          return 'Run browser check'
      }
    },
    runApiCheckButtonText () {
      return this.apiLoading ? 'Sending API request' : 'Run API check'
    }
  }
})
