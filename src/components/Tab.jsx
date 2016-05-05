import React from 'react'
import { Tabs ,Alert } from 'antd';

import CardForm from '../containers/FormDemo/CardForm'
import ListForm from '../containers/FormDemo/ListForm'
import CalendarForm from '../containers/FormDemo/CalendarForm'
const TabPane = Tabs.TabPane;



const Tab = React.createClass({
	render(){
		const breadCrumb = this.props.breadCrumb;
		const tabList = this.props.tabList.map(function(data, index) {
			let showForm = null;
			if(data.value == "CardForm"){
				showForm = <CardForm breadCrumb={breadCrumb}/>;
			}
			if(data.value == "ListForm"){
				showForm =  <ListForm/>;
			}
			if(data.value == "CalendarForm"){
				showForm =  <CalendarForm/>;
			}
	     	return (
				<TabPane tab={data.name} key={data.value}>
					{showForm}
				</TabPane>
			);
		});
		return (
			<div>
				<Tabs id="tab" defaultActiveKey={this.props.defaultTab}  >
					{tabList}
			  	</Tabs>
		  	</div>
		  	
  		)
	}
})
  
export default Tab

