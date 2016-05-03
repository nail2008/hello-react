import React from 'react'
import {Button} from 'antd'



const ListForm = React.createClass({
	render(){
		return (
			<div >
				<Button type="primary">添加</Button>
				<Button type="primary" disabled>保存</Button>
			</div>
		)
	}
})
export default ListForm