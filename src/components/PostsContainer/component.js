import { mapGetters, mapActions } from 'vuex'
import PostBox from './PostBox'

export default {
  name: 'PostsContainer',
  components: {
    PostBox
  },
  methods: {
    ...mapActions(['fetchPosts'])
  },
  computed: mapGetters(['allPosts']),
  created () {
    this.fetchPosts()
  }
}
