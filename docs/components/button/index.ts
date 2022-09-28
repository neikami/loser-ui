import { App } from 'vue';
import Button from './button';

export default {
  title: 'Button 按钮',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(Button.name, Button);
  },
};