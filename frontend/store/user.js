import { makeAutoObservable, action } from 'mobx';
import Cookies from 'js-cookie';

const store = makeAutoObservable({
  _isLogin: ![undefined, null, ''].includes(Cookies.get('jwt')),
  get user() {
    try {
      return JSON.parse(Cookies.get('user') || '{}')
    } catch (_e) {
      return null
    }
  },

  get isLogin() {
    return this._isLogin
  },

  login () {
    this._isLogin = true
  }

}, {
  update: action.bound
})

export default store