import { mapActions } from 'vuex'

export default {
  name: 'PostBox',
  props: ['post'],
  methods: {
    ...mapActions(['removePost'])
  },
  deletePost () {
    this.removePost(this.Post)
  }
}
