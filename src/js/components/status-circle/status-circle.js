import Vue from 'vue'
import template from './status-circle.pug'

export default Vue.component('StatusCircle', {
  template,
  props: {
    size: String,
    hasFailures: Boolean,
    hasErrors: Boolean,
    hasStatus: Boolean,
    muted: Boolean,
    activated: Boolean
  },
  computed: {
    statusCircleClasses () {
      const classes = []
      if (this.hasStatus) {
        if (!this.hasFailures) {
          if (this.activated && !this.muted) classes.push('success')
          if (this.activated && this.muted) classes.push('muted')
          if (!this.activated && this.muted) classes.push('muted', 'deactivated')
          if (!this.activated && !this.muted) classes.push('deactivated')
        } else {
          if (this.activated && !this.muted) classes.push('fail')
          if (this.activated && this.muted) classes.push('muted')
          if (!this.activated && this.muted) classes.push('deactivated')
          if (!this.activated && !this.muted) classes.push('deactivated')
        }
      } else {
        if (this.activated) classes.push('muted')
        if (!this.activated) classes.push('deactivated')
        if (this.activated && this.muted) classes.push('muted')
      }
      classes.push(this.size)
      return classes
    }
  }
})
