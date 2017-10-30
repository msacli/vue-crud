import Vue from 'vue'
import Router from 'vue-router'
import CreateItem from '../components/CreateItem.vue';
import DisplayItem from '../components/DisplayItem.vue';
import EditItem from '../components/EditItem.vue';
Vue.use(Router)

export default new Router({
  routes: [
  {
        name: 'CreateItem',
        path: '/create/item',
        component: CreateItem
    },
    {
          name: 'DisplayItem',
          path: '/',
          component: DisplayItem
      },
      {
            name: 'EditItem',
            path: '/edit/:id',
            component: EditItem
        }
]
})
