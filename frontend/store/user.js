import { makeAutoObservable, action } from 'mobx';
import Cookies from 'js-cookie';

const store = makeAutoObservable({
  get user () {
    try {
      return JSON.parse(Cookies.get('user') || '{}')
    } catch (_e) {
      return null
    }
  },
}, {
  update: action.bound
})

export default store