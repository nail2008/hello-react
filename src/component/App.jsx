import React from 'react';
import {Form,Row,Col} from 'antd'
import './App.less';

import MyHeader from './MyHeader';
import MyMenu from './MyMenu'
import MyTab from './MyTab'

const App = () =>
<div>
  	<MyHeader/>
  	<Row>
  		<Col span="5">
  			<MyMenu/>
  		</Col>
  		<Col span="18">
  			<MyTab />
  		</Col>

  	</Row>
</div>;


export default App;

