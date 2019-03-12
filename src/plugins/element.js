import Vue from 'vue'
import { 
Button,
Select , 
Input ,
Checkbox,
CheckboxGroup,
Menu,
Submenu,
MenuItem,
MenuItemGroup,
Row,
Col,
Dropdown,
DropdownMenu,
DropdownItem,
Breadcrumb,
BreadcrumbItem,
Card,
Tag,
Table,
TableColumn,
Badge,
Pagination,
Upload,
Message,
Scrollbar,
TabPane,
Tabs,
Option,
} from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3000 };
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Row);
Vue.use(Col);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Card);
Vue.use(Tag);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Badge);
Vue.use(Pagination);
Vue.use(Upload);
Vue.use(Scrollbar);
Vue.use(TabPane);
Vue.use(Tabs);
Vue.prototype.$message = Message;
