const config = {
  locales: ['zh-Hans'],
  translations: {
    'zh-Hans': {
      'app.components.LeftMenu.navbrand.title': '游戏酒馆'
    }
  }   
};

const bootstrap = app => {
  console.log(app)
};

export default {
  config,
  bootstrap,
};
