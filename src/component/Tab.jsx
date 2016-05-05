import React from 'react'
import { Tabs  } from 'antd';

import CardForm from '../containers/FormDemo/CardForm'
import ListForm from '../containers/FormDemo/ListForm'

const TabPane = Tabs.TabPane;



const Tab = React.createClass({

	render(){
		const breadCrumb = this.props.breadCrumb;
		console.log(breadCrumb);
		const tabList = this.props.tabList.map(function(data, index) {
	     	return (
				<TabPane tab={data.name} key={data.value}>
					{data.value == "CardForm"?<CardForm breadCrumb={breadCrumb}/>:<ListForm/>}
				</TabPane>
			);
		});
		return (
			
			<Tabs id="tab" defaultActiveKey={this.props.defaultTab}  >
				{tabList}
		  	</Tabs>
		  	
  		)
	}
})
  
export default Tab

