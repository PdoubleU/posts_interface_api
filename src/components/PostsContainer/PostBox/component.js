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
      postId: this.post.id
    }
  },
  methods: {
    ...mapActions(['removePost']),
    toggleReadMoreActive () {
      this.isReadMoreActive = !this.isReadMoreActive
    },
    removeThisPost () {
      this.removePost(this.postId)
    }
  }
}
