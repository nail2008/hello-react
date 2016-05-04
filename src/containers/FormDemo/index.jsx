import React, {Component, PropTypes} from 'react';
import {Form,Row,Col} from 'antd'

import './index.less'
import Header from '../../component/Header';
import Menu from '../../component/Menu'
import Tab from '../../component/Tab'

const FormDemo = React.createClass({
  getInitialState() {
    return {
      menuCurrent: '选项1',
      breadCrumb:['导航一','选项1']
    };
  },
  handleMenuClick(e) {
   console.log('click ', e);
    this.setState({
      menuCurrent: e.key,
      breadCrumb:e.keyPath.reverse()
    });
  },
  render(){
  	let tabProps = {
  		tabList:[{name:'卡片页面',value:'CardForm'},{name:'列表页面',value:'ListForm'}],
  		defaultTab:'CardForm',
      breadCrumb:this.state.breadCrumb
  	};
  	let menuProps = {
      handleClick:this.handleMenuClick,
      menuCurrent:this.state.menuCurrent,
  		menuList:[
  			{
  				name:'导航一',
  				key:'导航一',
  				icon:'mail',
          type:'SubMenu',
  				menuItem:[
  					{
              title:'分组1',
              type:'MenuGroup',
              menuItem:[
                {name:'选项1',key:'选项1',type:'MenuItem',},
                {name:'选项2',key:'选项2',type:'MenuItem',}
            ]},
  					{
              title:'分组2',
              type:'MenuGroup',
              menuItem:[
                {name:'选项3',key:'选项3',type:'MenuItem',},
                {name:'选项4',key:'选项4',type:'MenuItem',}
            ]}
  				]
  			},
  			{
  				name:'导航二',
  				key:'导航二',
  				icon:'appstore',
          type:'SubMenu',
  				menuItem:[
  					{name:'选项5',key:'选项5',type:'MenuItem',},
  					{name:'选项6',key:'选项6',type:'MenuItem',}
  				]
  			},
  			{
  				name:'导航三',
  				key:'导航三',
  				icon:'setting',
          type:'SubMenu',
  				menuItem:[
  					{name:'选项9',key:'选项9',type:'MenuItem',},
  					{name:'选项10',key:'选项10',type:'MenuItem',}
  				]
  			}
  		],
  		defaultMenu:['导航一']
  	};
    return (
      <div>
  	  	<Header/>
  	  	<Row>
  	  		<Col span="5">
  	  			<Menu {...menuProps}/>
  	  		</Col>
  	  		<Col span="18">
  	  			<Tab {...tabProps}/>
  	  		</Col>
  	  	</Row>
	   </div>
    );
  }
})

export default FormDemo;

