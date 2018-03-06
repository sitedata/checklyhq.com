import Vue from 'vue'
import template from './spinner.pug'
import './spinner.scss'

export default Vue.component('Spinner', {
  template,
  props: {
    inline: Boolean
  }
})
