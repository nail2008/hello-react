import React from 'react'
import { Tabs } from 'antd';

import CardForm from './CardForm'
import ListForm from './ListForm'

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

const MyTab = React.createClass({
	render(){
		return (
			<Tabs id="tab" defaultActiveKey="1" onChange={callback}>
			    <TabPane tab="卡片页面" key="1">
			    	<CardForm/>
			    </TabPane>
			    <TabPane tab="列表页面" key="2">
			    	<ListForm/>
			    </TabPane>
		  	</Tabs>
  		)
	}
})
  
export default MyTab