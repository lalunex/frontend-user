// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'

// import BootstrapVue from 'bootstrap-vue'

import {
  BNavbar, BNavbarNav, BNavbarBrand, BNavbarToggle,
  BCollapse, BNavForm, BFormInput, BButton, BNavItemDropdown, BDropdownItem,
  BCalendar, BJumbotron, BTooltip, BContainer, BCol, BRow, BCard, BCardText,
  BCardImg, BCarousel, BCarouselSlide, BPaginationNav, BBreadcrumb,
  BBreadcrumbItem, BIcon, BFormGroup, BFormTextarea, BLink, BPopover,
  BNavItem
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {
  Menu, MenuItem, Submenu, MenuItemGroup,
  Divider, Input, Alert, Image
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(Divider);
Vue.use(Input);
Vue.use(Alert);
Vue.use(Image);

Vue.component('b-navbar', BNavbar)
Vue.component('b-navbar-nav', BNavbarNav)
Vue.component('b-navbar-brand', BNavbarBrand)
Vue.component('b-navbar-toggle', BNavbarToggle)
Vue.component('b-collapse', BCollapse)
Vue.component('b-nav-form', BNavForm)
Vue.component('b-form-input', BFormInput)
Vue.component('b-button', BButton)
Vue.component('b-nav-item-dropdown', BNavItemDropdown)
Vue.component('b-dropdown-item', BDropdownItem)
Vue.component('b-calendar', BCalendar)
Vue.component('b-jumbotron', BJumbotron)
Vue.component('b-tooltip', BTooltip)
Vue.component('b-container', BContainer)
Vue.component('b-row', BRow)
Vue.component('b-col', BCol)
Vue.component('b-card', BCard)
Vue.component('b-card-text', BCardText)
Vue.component('b-card-img', BCardImg)
Vue.component('b-carousel', BCarousel)
Vue.component('b-carousel-slide', BCarouselSlide)
Vue.component('b-pagination-nav', BPaginationNav)
Vue.component('b-breadcrumb', BBreadcrumb)
Vue.component('b-breadcrumb-item', BBreadcrumbItem)
Vue.component('b-icon', BIcon)
Vue.component('b-form-group', BFormGroup)
Vue.component('b-form-textarea', BFormTextarea)
Vue.component('b-link', BLink)
Vue.component('b-popover', BPopover)
Vue.component('b-nav-item', BNavItem)

FastClick.attach(document.body);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
