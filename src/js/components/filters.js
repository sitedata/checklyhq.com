const msec = 'ms'
const sec = 'sec'
const min = 'min'

export default {
  filters: {

    percentage: function (number) {
      return number ? Math.round(number) + '%' : '0%'
    },

    durationUnit: (milliseconds) => {
      if (!milliseconds) {
        return ''
      }

      if (milliseconds < 1000) {
        return msec
      }

      const duration = Math.round(milliseconds / 1000)

      if (duration < 60) {
        return sec
      } else {
        return min
      }
    },

    duration: (milliseconds) => {
      if (!milliseconds) {
        return 0
      }

      if (milliseconds < 1000) {
        return Math.round(milliseconds)
      }

      const duration = Math.round((milliseconds / 1000) * 100) / 100

      if (duration < 60) {
        return duration
      } else {
        return Math.round(duration / 60)
      }
    },
    round: (number) => {
      return Math.round(number)
    }
  }
}
