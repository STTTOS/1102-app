import Vue from 'vue';
import { 
    Button, 
    Icon,
    Input,
    Table,
    TableColumn,
    Message,
    MessageBox,
    Dialog,
    Form,
    FormItem,
    Pagination,
} from 'element-ui';

const cmps = [
    Button,
    Icon,   
    Input,
    Table,
    TableColumn,
    MessageBox,
    Message,
    Dialog,
    Form,
    FormItem,
    Pagination,
];
MessageBox.install = (Vue) => {
    Vue.prototype.$msgBox = MessageBox;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.prompt = MessageBox.prompt;
}
Message.install = (Vue) => {
    Vue.prototype.$msg = Message;
}
// Vue.prototype.$message = MessageBox;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.prompt = MessageBox.prompt;

for(const cmp of cmps) {
    Vue.use(cmp);
}