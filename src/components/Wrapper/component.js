import PostsContainer from '../../components/PostsContainer'
import ControlPanel from '../../components/ControlPanel'
import Footer from '../../components/Footer'

export default {
  name: 'Wrapper',
  components: {
    PostsContainer,
    ControlPanel,
    Footer
  },
  data () {
    return {
      isLoading: true
    }
  },
  methods: {

  },
  mounted () {

  },
  beforeDestroy () {

  }
}
