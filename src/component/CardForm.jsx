import React from 'react'
import { Form, Input, Select, Col,Row,Checkbox,Radio,DatePicker,Cascader,Tree,Transfer,Button,TreeSelect,
		Icon,Upload,Steps,Affix,Modal,Tooltip  } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const RangePicker = DatePicker.RangePicker;
const TreeNode = Tree.TreeNode;
const SHOW_PARENT = TreeSelect.SHOW_PARENT;
const Step = Steps.Step;
const confirm = Modal.confirm;

const options = [{
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
    children: [{
      value: 'xihu',
      label: '西湖',
    }],
  }],
}, {
  value: 'jiangsu',
  label: '江苏',
  children: [{
    value: 'nanjing',
    label: '南京',
    children: [{
      value: 'zhonghuamen',
      label: '中华门',
    }],
  }],
}];

const treeData = [{
  label: '节点一',
  value: '0-0',
  key: '0-0',
  children: [{
    label: '子节点一',
    value: '0-0-0',
    key: '0-0-0',
  }, {
    label: '子节点二',
    value: '0-0-1',
    key: '0-0-1',
  }],
}, {
  label: '节点二',
  value: '0-1',
  key: '0-1',
  children: [{
    label: '子节点三',
    value: '0-1-0',
    key: '0-1-0',
  }, {
    label: '子节点四',
    value: '0-1-1',
    key: '0-1-1',
  }],
}];
const steps = [{
  status: 'finish',
  title: '已完成'
}, {
  status: 'process',
  title: '进行中'
}, {
  status: 'wait',
  title: '待运行'
}, {
  status: 'wait',
  title: '待运行'
}].map((s, i) => <Step key={i} title={s.title} description={s.description} />);


const CardForm = React.createClass({
	render(){
		return (
			<Form >
				<Row><div>
			   		<FormItem
			          label="步骤条："
			          labelCol={{ span: 4 }}
			          wrapperCol={{ span: 16 }}>
			            <Steps current={1}>{steps}</Steps>
			        </FormItem>  
			   	</div></Row>
				<Row><div>
			   		<FormItem
			          label="文件上传："
			          labelCol={{ span: 4 }}
			          wrapperCol={{ span: 16 }}>
			          	<div className="clearfix">
				            <Upload 
				            	action='/upload.do'
  								listType= 'picture-card'>
								<Icon type="plus" />
								<div className="ant-upload-text">上传照片</div>
							</Upload>
							<a href="https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png" target="_blank" className="upload-example">
						    	<img src="https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png" />
						    	<span>示例</span>
					 		</a>
						</div>
			        </FormItem>  
			   	</div></Row>
				<Row ><div>
				    <FormItem
				      label="文本框："
				      labelCol={{ span: 4 }}
				      wrapperCol={{ span: 6 }}>
				      <Tooltip title="提示文字">
					    <Input defaultValue="请输入"/>
					  </Tooltip>
				    </FormItem>
				    <FormItem
				      label="下拉框："
				      labelCol={{ span: 4 }}
				      wrapperCol={{ span: 6 }}>
				      <Select >
				      	  <Option value="jack">Jack</Option>
					      <Option value="lucy">Lucy</Option>
					      <Option value="disabled" disabled>Disabled</Option>
					      <Option value="yiminghe">yiminghe</Option>
				      </Select>
				    </FormItem>
				</div></Row>
			    <Row><div>
			    	 <FormItem
				      label="多选框："
				      labelCol={{ span: 4 }}
				      wrapperCol={{ span: 6 }} >
					   <label className="ant-checkbox-inline">
				        <Checkbox />选项一
				      </label>
				      <label className="ant-checkbox-inline">
				        <Checkbox />选项二
				      </label>
				      <label className="ant-checkbox-inline">
				        <Checkbox />选项三
				      </label>
				    </FormItem>
				    <FormItem
				      label="单选框："
				      labelCol={{ span: 4 }}
				      wrapperCol={{ span: 6 }} >
				      	<RadioGroup>
					   		<Radio kye="a" value="a">A</Radio>
							<Radio kye="b" value="b">B</Radio>
							<Radio kye="c" value="c">C</Radio>
							<Radio kye="d" value="d">D</Radio>
					    </RadioGroup>
				    </FormItem>
				</div></Row>
			    <Row><div>		    	
			    	<FormItem
			          label="日期选择："
			          labelCol={{ span: 4 }}
			          wrapperCol={{ span: 6 }}
			          required>
			            <DatePicker style={{width:"250px"}}/>   
			        </FormItem>
			        <FormItem
			          label="日期选择："
			          labelCol={{ span: 4 }}
			          wrapperCol={{ span: 6 }}
			          required>         
			            <RangePicker showTime format="yyyy/MM/dd HH:mm:ss" />		      
			        </FormItem>
			    </div></Row>
			   	<Row ><div>
			   		<FormItem
			          label="级联选择："
			          labelCol={{ span: 4 }}
			          wrapperCol={{ span: 6 }}>
			            <Cascader options={options} style={{width:"250px"}}  />  
			        </FormItem>  
			        <FormItem
			          label="树选择："
			          labelCol={{ span: 4 }}
			          wrapperCol={{ span: 6 }}>      
			            <TreeSelect  
			            	allowClear={true}
			            	treeData={treeData}
			            	multiple= {true}
							treeCheckable ={true}
							searchPlaceholder="请选择"/>		      
			        </FormItem>
			   	</div></Row>
			   	<Row><div>
			   		<FormItem
			          label="穿梭框："
			          labelCol={{ span: 4 }}
			          wrapperCol={{ span: 16 }}>
			            <div><MyTransfer /></div>
			        </FormItem>  
			   	</div></Row>
			   	<Row><div>
			   	<FormItem wrapperCol={{ span: 20,offset: 10 }}  style={{marginTop: 24 }}>
		          <MyButton/>
		        </FormItem>
		        </div></Row>
			   	
			  </Form>
			  
		)
	}
})
// 树形控件
// 进度条
const MyTransfer = React.createClass({
  getInitialState() {
    return {
      mockData: [],
      targetKeys: [],
    };
  },
  componentDidMount() {
    this.getMock();
  },
  getMock() {
    let targetKeys = [];
    let mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i,
        title: `内容${i + 1}`,
        description: `内容${i + 1}的描述`,
        chosen: Math.random() * 2 > 1
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  },
  handleChange(targetKeys, direction, moveKeys) {
    console.log(targetKeys, direction, moveKeys);
    this.setState({ targetKeys });
  },
  renderFooter() {
    return (
      <Button type="primary" size="small" style={{ float: 'right', margin: '5' }}
        onClick={this.getMock}>
        刷新
      </Button>
    );
  },
  render() {
    return (
      <Transfer
      	showSearch
      	operations={['进行向右操作','进行向左操作']}
      	listStyle={{
          width: 250,
          height:250,
          "line-height":20
        }}
      	notFoundContent="没有信息"
        dataSource={this.state.mockData}
        targetKeys={this.state.targetKeys}
        onChange={this.handleChange}
        render={item => item.title}
        footer={this.renderFooter} />

    );
  }
});

const MyButton = React.createClass({
	getInitialState() {
		return {
		  loading: false,
		  iconLoading: false,
		  buttonText:"提交"
		};
	},
	enterLoading() {
		let that = this;

		confirm({
		    title: '您是否确认提交这些内容内容',
		    content: '一些解释',
		    onOk() {
		      that.setState({ loading: true,buttonText:"提交中" });
		    },
		    onCancel() {}
		});
		
	},
	enterIconLoading() {
		this.setState({ iconLoading: true });
	},
	render(){
		return (
			<Button size="large" type="primary" loading={this.state.loading} onClick={this.enterLoading} htmlType="submit" >{this.state.buttonText}</Button>
		)
	}
})
export default CardForm

// <FormItem
//   label="树形控件："
//   labelCol={{ span: 4 }}
//   wrapperCol={{ span: 6 }} >  
//     <Tree showLine  multiple checkable>
//         <TreeNode title="parent 1" key="0-0">
//           <TreeNode title="parent 1-0" key="0-0-0" disabled>
//             <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
//             <TreeNode title="leaf" key="0-0-0-1" />
//           </TreeNode>
//           <TreeNode title="parent 1-1" key="0-0-1">
//             <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="0-0-1-0" />
//           </TreeNode>
//         </TreeNode>
//       </Tree>      
// </FormItem>	

