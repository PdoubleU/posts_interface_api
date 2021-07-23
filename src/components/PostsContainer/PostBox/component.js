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
      faIcon: ['fas', 'trash-alt']
    }
  },
  methods: {
    ...mapActions(['removePost'])
  },
  deletePost () {
    this.removePost(this.Post)
  }
}
