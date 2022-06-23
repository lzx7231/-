export default {
  name: 'TestInput',
  template: `
    <div v-on="listenersMerged">
      <input v-bind="$attrs" />
    </div>
  `,
  inheritAttrs: false, 
  data () {
    return {
      inputModelValue: ''
    }
  },
  computed: {
    listenersMerged ({ $listeners }) {
      const vm = this
      
      return {
        ...$listeners,
        input: function (event) {
          vm.$emit('input', event.target.value)
        }
      }
    }
  }
}