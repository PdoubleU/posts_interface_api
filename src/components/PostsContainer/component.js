import { mapGetters, mapActions } from 'vuex'
import PostBox from './PostBox'

const customLabels = {
  first: '<<',
  last: '>>',
  previous: '<',
  next: '>'
}

export default {
  name: 'PostsContainer',
  components: {
    PostBox
  },
  data () {
    return {
      pageOfPosts: [],
      customLabels
    }
  },
  methods: {
    ...mapActions(['fetchPosts', 'fetchAuthors']),
    onChangePage (pageOfPosts) {
      this.pageOfPosts = pageOfPosts
    }
  },
  computed: mapGetters(['allPosts']),
  created () {
    this.fetchPosts()
    this.fetchAuthors()
  }
}
