module.exports = [
  {
    name: ' Google Discovery API',
    method: 'GET',
    url: 'https://content.googleapis.com/discovery/v1/apis/surveys/v2/rest',
    headers: [],
    queryParameters: [],
    basicAuth: {},
    body: '',
    bodyType: 'JSON',
    assertions: [
      {
        'source': 'STATUS_CODE',
        'target': '200',
        'property': '',
        'comparison': 'EQUALS'
      },
      {
        'source': 'JSON_BODY',
        'target': 'string',
        'property': 'parameters.alt.type',
        'comparison': 'HAS_VALUE'
      },
      {
        'source': 'RESPONSE_TIME',
        'target': '500',
        'property': '',
        'comparison': 'LESS_THAN'
      },
      {
        'source': 'HEADERS',
        'target': 'application/json; charset=UTF-8',
        'property': 'content-type',
        'comparison': 'EQUALS'
      }
    ]
  },
  {
    name: 'VueJS Github Stats',
    method: 'GET',
    url: 'https://api.github.com/repos/vuejs/vue',
    headers: [
      {
        key: 'User-Agent',
        value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.3'
      },
      {
        key: 'Accept-Encoding',
        value: 'application/json'
      }
    ],
    queryParameters: [],
    basicAuth: {},
    body: '',
    bodyType: 'JSON',
    assertions: [
      {
        'source': 'STATUS_CODE',
        'target': '200',
        'property': '',
        'comparison': 'EQUALS'
      },
      {
        'source': 'JSON_BODY',
        'target': '75000',
        'property': 'watchers',
        'comparison': 'GREATER_THAN'
      },
      {
        'source': 'JSON_BODY',
        'target': 'MIT',
        'property': 'license.spdx_id',
        'comparison': 'HAS_VALUE'
      },
      {
        'source': 'HEADERS',
        'target': 'github.v3; format=json',
        'property': 'x-github-media-type',
        'comparison': 'EQUALS'
      }
    ]
  },
  {
    name: 'HackerNews Story API',
    method: 'GET',
    url: 'https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty',
    headers: [
      {
        key: 'Accept-Encoding',
        value: 'application/json'
      }
    ],
    queryParameters: [],
    basicAuth: {},
    body: '',
    bodyType: 'JSON',
    assertions: [
      {
        'source': 'STATUS_CODE',
        'target': '200',
        'property': '',
        'comparison': 'EQUALS'
      },
      {
        'source': 'JSON_BODY',
        'target': 'My YC app: Dropbox - Throw away your USB drive',
        'property': 'title',
        'comparison': 'EQUALS'
      }
    ]
  }
]
