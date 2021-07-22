// @vue/component
import renderModel from '../../helpers/renderModel'
import router from '../../router/router'
import Loading from '../Loading'
import toggleLoaded from '../../helpers/loadingPageScript'

export default {
  name: 'WelcomePage',
  components: {
    Loading
  },
  data () {
    return {
      isLoading: true
    }
  },
  methods: {
    toggleVisibility () {
      const canvas = document.querySelector('#death_star')

      if (router.currentRoute.name === 'Planets') {
        canvas.classList.add('invisible')
      } else {
        canvas.classList.remove('invisible')
      }
    }
  },
  mounted () {
    // prevent multiple renders of canvas as well as loading screen:
    if (!document.querySelector('#death_star')) {
      renderModel()
      setTimeout(() => {
        this.isLoading = false
        toggleLoaded()
      }, 3000)
      this.toggleVisibility()
      return
    }
    this.toggleVisibility()
    this.isLoading = false
  },
  beforeDestroy () {
    this.toggleVisibility()
  }
}
