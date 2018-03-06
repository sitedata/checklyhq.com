export const apiCheckModel = {
  checkType: 'API',
  name: '',
  frequency: 5,
  activated: true,
  muted: false,
  shouldFail: false,
  locations: [],
  request: {
    assertions: [],
    method: 'GET',
    url: '',
    body: '',
    bodyType: 'JSON',
    queryParameters: [],
    headers: [],
    basicAuth: {
      username: '',
      password: ''
    }
  },
  alertChannels: {}
}

export const browserCheckModel = {
  checkType: 'BROWSER',
  name: '',
  frequency: 5,
  activated: true,
  muted: false,
  locations: [],
  variables: [],
  script: '',
  alertChannels: {}
}

export const assertionSources = [
  { value: 'STATUS_CODE', text: 'Status code' },
  { value: 'JSON_BODY', text: 'JSON body' },
  { value: 'HEADERS', text: 'Headers' },
  { value: 'TEXT_BODY', text: 'Text body' },
  { value: 'RESPONSE_TIME', text: 'Response time' }
]

export const assertionComparisons = [
  { value: 'EQUALS', text: 'Equals', default: true },
  { value: 'NOT_EQUALS', text: 'Not equals' },
  { value: 'HAS_KEY', text: 'Has key' },
  { value: 'NOT_HAS_KEY', text: 'Not has key' },
  { value: 'HAS_VALUE', text: 'Has value' },
  { value: 'NOT_HAS_VALUE', text: 'Not has value' },
  { value: 'IS_EMPTY', text: 'Is empty' },
  { value: 'NOT_EMPTY', text: 'Is not empty' },
  { value: 'GREATER_THAN', text: 'Greater than' },
  { value: 'LESS_THAN', text: 'Less than' }

]

export const browserCheckRunStates = {
  PRISTINE: 'PRISTINE',
  SUBMITTED: 'SUBMITTED',
  RUNNING: 'RUNNING',
  ENDED: 'ENDED',
  ERROR: 'ERROR'
}
