import { mapActions } from 'vuex'
import { sortConditionValues } from '../../const/sortConditionValues'

const { byNameDsc, byNameAsc, byTitleDsc, byTitleAsc } = sortConditionValues

export default {
  name: 'Dropdown',
  data () {
    return {
      sortOrder: '',
      config: {
        options: [
          {
            value: byNameDsc
          },
          {
            value: byNameAsc
          },
          {
            value: byTitleDsc
          },
          {
            value: byTitleAsc
          }
        ],
        backgroundColor: '#ffe7f3',
        backgroundExpandedColor: '#ff9790',
        hoverBackgroundColor: '#0084d4',
        textColor: '#ff3785',
        placeholder: 'Sort...'
      }
    }
  },
  methods: {
    ...mapActions(['sortPosts']),
    setNewSelectedOption (selectedOption) {
      this.sortOrder = selectedOption.value
      this.config.placeholder = selectedOption.value
      this.sortPosts(this.sortOrder)
    }
  }
}
