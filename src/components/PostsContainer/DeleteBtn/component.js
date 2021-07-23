// @vue/component
export default {
  name: 'DeleteBtn',
  props: ['faIcon'],
  methods: {
    removeThisPost () {
      this.$emit('remove')
    }
  }
}
