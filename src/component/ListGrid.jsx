import React from 'react'
import {Table} from 'antd'

const dataSource = [{
  key: '1',
  conName: '个人合同_李晶',
  conType:'个人合同',
  senduser: '程智杰',
  recuser: '李晶',
  conStatus:'已发布'
}, {
  key: '2',
  conName: '个人合同_马小兵',
  conType:'个人合同',
  senduser: '程智杰',
  recuser: '马小兵',
  conStatus:'未发布'
},{
  key: '3',
  conName: '部门合同_人事部',
  conType:'部门合同',
  senduser: '总经理',
  recuser: '部长',
  conStatus:'已发布'
},{
  key: '4',
  conName: '部门合同_财务',
  conType:'部门合同',
  senduser: '总经理',
  recuser: '部长',
  conStatus:'未发布'
}];

const columns = [{
  title: '合同名称',
  dataIndex: 'conName',
  key: 'conName',
  render(text) {
    return <a href="#">{text}</a>;
  }
}, {
  title: '合同类型',
  dataIndex: 'conType',
  key: 'conType',
}, {
  title: '发约人',
  dataIndex: 'senduser',
  key: 'senduser',
},{
  title: '受约人',
  dataIndex: 'recuser',
  key: 'recuser',
},{
  title: '合同状态',
  dataIndex: 'conStatus',
  key: 'conStatus',
}];

const rowSelection = {
  onChange(selectedRowKeys, selectedRows) {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect(record, selected, selectedRows) {
    console.log(record, selected, selectedRows);
  },
  onSelectAll(selected, selectedRows, changeRows) {
    console.log(selected, selectedRows, changeRows);
  },
};
const ListForm = React.createClass({
	render(){
		return (
			<div >
				<Table rowSelection={rowSelection} dataSource={dataSource} columns={columns} />
			</div>
		)
	}
})
export default ListForm