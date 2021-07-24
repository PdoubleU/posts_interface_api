import { mapGetters, mapActions } from 'vuex'
import PostBox from './PostBox'
import Loading from '../Loading'

const customLabels = {
  first: '<<',
  last: '>>',
  previous: '<',
  next: '>'
}

export default {
  name: 'PostsContainer',
  components: {
    PostBox,
    Loading
  },
  data () {
    return {
      pageOfPosts: [],
      customLabels,
      isLoading: true,
      isError: false
    }
  },
  methods: {
    ...mapActions(['fetchData']),
    onChangePage (pageOfPosts) {
      this.pageOfPosts = pageOfPosts
    }
  },
  computed: mapGetters(['allPosts']),
  async mounted () {
    try {
      await this.fetchData()
      this.isLoading = false
    } catch {
      this.isLoading = false
      this.isError = true
    }
  }
}
