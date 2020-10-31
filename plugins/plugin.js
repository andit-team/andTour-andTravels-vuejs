import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyLoad from 'vue-lazyload'
// import LightBox from 'vue-image-lightbox'
import { IconsPlugin } from 'bootstrap-vue'

Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyLoad)
// Vue.use(LightBox)
Vue.use(IconsPlugin)


const config = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTHDOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BACKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID'
}
// firebase.initializeApp(config)
