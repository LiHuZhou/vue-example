import Vue from 'vue'
import App from './App'
import router from './router'
import util from '@/util/util'
import {
    Input,
    Button,
    Select,
    Option,
    Form,
    FormItem,
    Col,
    Row,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Message,
    Collapse,
    CollapseItem,
    Table,
    TableColumn,
    Popover,
    Tag,
    Pagination,
    DatePicker
} from 'element-ui';
Vue.config.productionTip = false;
Vue.prototype.$message = Message;
Vue.use(Input);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(util);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Popover);
Vue.use(Tag);
Vue.use(Select);
Vue.use(Option);
Vue.use(Pagination);
Vue.use(DatePicker);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})