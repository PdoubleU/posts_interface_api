// @vue/component
import axios from 'axios'
import { generateUrl } from '../../api/api'
import Table from './Table'
import Pagination from './Pagination'
import Loading from '../Loading'
import parseDate from '../../helpers/parseDate'

export default {
  name: 'PlanetsList',
  components: {
    Table,
    Pagination,
    Loading
  },
  data () {
    return {
      transitionEnd: false,
      isLoading: false,
      isError: false,
      isMobile: true,
      total: 0,
      planets: [],
      search: ''

    }
  },
  methods: {
    fetchData (page) {
      const url = generateUrl(page)
      this.isLoading = true
      axios.get(url)
        .then(response => response.data)
        .then(data => {
          data.results.forEach(obj => {
            obj.created = parseDate(obj.created)
          })
          this.planets = data.results
          this.total = data.count
        })
        .catch(err => {
          this.isError = true
          console.log(err)
        })
        .finally(() => {
          if (this.isError) return
          this.isLoading = false
        })
    },
    filterData (table, query) {
      if (!query) return table
      const filteredTable = table.filter(elem => {
        // filter is checking each key's value and looking for query:
        return elem.name.toLowerCase().includes(query.toLowerCase()) ||
                elem.created.toLowerCase().includes(query.toLowerCase()) ||
                elem.climate.toLowerCase().includes(query.toLowerCase()) ||
                elem.gravity.toLowerCase().includes(query.toLowerCase()) ||
                elem.rotation_period.toLowerCase().includes(query.toLowerCase())
      })
      return filteredTable
    }
  },
  created () {
    // depending on the screen width the proper table 's mode will be displayed:
    if (window.innerWidth >= 1080) {
      this.isMobile = false
    }
  },
  mounted () {
    const image = document.querySelector('.main_background')
    image.addEventListener('transitionend', () => {
      setTimeout(() => {
        this.transitionEnd = true
        this.fetchData(1)
      }, 600)
    })
  }
}
