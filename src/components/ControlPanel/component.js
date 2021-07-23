import Dropdown from '../Dropdown'
import { mapActions } from 'vuex'

export default {
  name: 'ControlPanel',
  components: {
    Dropdown
  },
  data () {
    return {
      search: '',
      faIcon: ['fas', 'search']
    }
  },
  methods: {
    ...mapActions(['searchPosts']),
    onChange () {
      this.searchPosts(this.search)
    }
  }
}
