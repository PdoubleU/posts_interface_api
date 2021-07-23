import { mapActions } from 'vuex'
import DeleteBtn from '../DeleteBtn'

export default {
  name: 'PostBox',
  props: ['post'],
  components: {
    DeleteBtn
  },
  data () {
    return {
      faIcon: ['fas', 'trash-alt'],
      isReadMoreActive: false,
      isRemoved: false,
      postId: this.post.id
    }
  },
  methods: {
    ...mapActions(['removePost']),
    toggleReadMoreActive () {
      this.isReadMoreActive = !this.isReadMoreActive
    },
    removeThisPost () {
      setTimeout(() => this.removePost(this.postId), 3000)
      this.isRemoved = true
    }
  }
}
