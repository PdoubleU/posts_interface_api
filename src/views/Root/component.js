import router from '../../router/router'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'
import toggleLoaded from '../../helpers/loadingPageScript'

export default {
  name: 'Root',
  components: {
    Footer,
    Loading
  },
  data () {
    return {
      isLoading: true,
      classLoaded: 'loaded'
    }
  },
  methods: {
    toggleVisibility () {
      const image = document.querySelector('.main_background')
      const homeBtn = document.querySelector('.link-home')
      const planetsBtn = document.querySelector('.link-planets')

      if (router.currentRoute.name === 'Planets') {
        image.classList.add('invisible')
        homeBtn.classList.remove('hidden')
        planetsBtn.classList.add('hidden')
      } else {
        image.classList.remove('invisible')
        planetsBtn.classList.remove('hidden')
        homeBtn.classList.add('hidden')
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
      toggleLoaded()
    }, 3000)
  },
  watch: {
    $route (to, from) {
      this.toggleVisibility()
    }
  }
}
