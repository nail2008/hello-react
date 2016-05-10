import React from 'react'
import {Form,Button,Table,notification,Icon,Spin,Popconfirm,message,Col,Tree} from 'antd'

const dataSource = [];
const data = [{
	  conName: '个人合同_李晶',
	  conType:'个人合同',
	  senduser: '程智杰',
	  recuser: '李晶',
	  conStatus:'已发布'
	}, {
	  conName: '个人合同_马小兵',
	  conType:'个人合同',
	  senduser: '程智杰',
	  recuser: '马小兵',
	  conStatus:'未发布'
	},{
	  conName: '部门合同_人事部',
	  conType:'部门合同',
	  senduser: '总经理',
	  recuser: '部长',
	  conStatus:'已发布'
	},{
	  conName: '部门合同_财务',
	  conType:'部门合同',
	  senduser: '总经理',
	  recuser: '部长',
	  conStatus:'未发布'
	}];

for (let i = 0; i < 50; i++) {
  let temp = {};
  Object.assign(temp,data[i%4],{key:i+1,description:"这是描述"+(i+1).toString()});
  //console.log(temp);
  dataSource[i]=(temp);
}

const columns = [{
  title: '合同名称',
  dataIndex: 'conName',
  key: 'conName',
  render(text,row,index) {
    let obj = {
      children: <a href="#">{text}</a>,
      props: {}
    };
     // 第三列的第三行行合并
    if (index === 8) {
      obj.props.rowSpan = 2;
    }
     // 第三列的第四行被合并没了，设置 rowSpan = 0 直接不用渲染
    if (index === 9) {
      obj.props.rowSpan = 0;
    }
    return obj;
  },
  filters: [{
    text: '个人合同',
    value: '个人合同',
  }, {
    text: '部门合同',
    value: '部门合同',
  }],
  // 指定确定筛选的条件函数
  // 这里是合同名称包含 value 的
  onFilter: (value, record) => record.conName.indexOf(value) >= 0,//record为列表记录的每一行数据
  sorter: (a, b) => a.conName.length - b.conName.length,
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
}, {
  title: '操作',
  key: 'operation',
  dataIndex: 'operation',
  render(text, record) {
    return (
      <span>
        <a href="#">操作一</a>
        <span className="ant-divider"></span>
        <a href="#">操作二</a>
        <span className="ant-divider"></span>
        <a href="#" className="ant-dropdown-link">
          更多 <Icon type="down" />
        </a>
      </span>
    );
  }
}];

const pagination = {
  total: dataSource.length,
  showSizeChanger: true,
  //showQuickJumper: true,//跳至第几页
  onShowSizeChange(current, pageSize) {
    console.log('Current: ', current, '; PageSize: ', pageSize);
  },
  onChange(current) {
    console.log('Current: ', current);
  }
};

const ListForm = React.createClass({
	getInitialState() {
    return {
      selectedRowKeys: [],  // 这里配置默认勾选列
      loading: false,
    };
  },
  start() {
    this.setState({ loading: true });
    // 模拟 ajax 请求，完成后清空
    let num = this.state.selectedRowKeys.length;
    
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
      notification["success"]({
	    message: '这是标题',
	    description: "成功保存"+num+"条数据！"
  	  });
    }, 1000);
    
  },
  add(){
    message.info('点击了确定');
  },
  cancel() {
    message.error('点击了取消');
  },
  onSelectChange(selectedRowKeys) {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
   	 this.setState({ selectedRowKeys });
  },
	render(){
		const { loading, selectedRowKeys } = this.state;
	    const rowSelection = {
	      getCheckboxProps(record) {
  		    return {
  		      disabled: record.conName === '部门合同_人事部'    // 配置无法勾选的列
  		    };
  		  },
	      selectedRowKeys,
	      onChange: this.onSelectChange,
	    };
	  const hasSelected = selectedRowKeys.length > 0;
    //useFixedHeader 表头固定
		return (
			<div >
        <Popconfirm title="暂时没有添加功能？" onConfirm={this.add} onCancel={this.cancel}>
				  <Button type="primary" >添加</Button>
        </Popconfirm>
				<Button type="primary" disabled={!hasSelected} onClick={this.start} loading={loading}>保存</Button>
				<span style={{ marginLeft: 8 }}>{hasSelected ? `选择了 ${selectedRowKeys.length} 个对象` : ''}</span>
				<br/><br/>
        <Spin spining={this.state.loading} size="large">
  				<Table rowSelection={rowSelection} 
                 dataSource={dataSource} 
                 columns={columns} 
                 pagination={pagination} 
                 expandedRowRender={record => <p>{record.description}</p>} />
        </Spin>
			</div>
		)
	}
})
export default ListForm

 
   
