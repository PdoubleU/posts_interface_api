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
        placeholder: 'Sort...',
        borderRadius: '1em',
        width: 150
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
