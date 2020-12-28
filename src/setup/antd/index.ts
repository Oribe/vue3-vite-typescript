import { App } from 'vue';
import { Form, Col, Row, Spin, Input, Layout } from 'ant-design-vue';

import 'ant-design-vue/dist/antd.less';

const setupAntd = (app: App<Element>): App<Element> => {
  return app.use(Form).use(Col).use(Row).use(Spin).use(Input).use(Layout);
};

export default setupAntd;
