import { makeAutoObservable, action } from 'mobx';

const store = makeAutoObservable({
  _isLogin: false,
  _shouldLogin: false,
  _shouldRegist: false,
  _shouldGrade: false,

  get isLogin() {
    return this._isLogin
  },

  get shouldLogin () {
    return this._shouldLogin
  },

  get shouldRegist () {
    return this._shouldRegist
  },

  get shouldGrade () {
    return this._shouldGrade
  },

  update(keyOrBatch, value) {
    if (typeof(keyOrBatch) === 'string') {
      store[`_${keyOrBatch}`] = value
      console.log(store);
    } else {
      for (let key in keyOrBatch) {
        console.log(key);
        store[`_${key}`] = keyOrBatch[key]
      }
    }
  }
}, {
  update: action.bound
})

export default store