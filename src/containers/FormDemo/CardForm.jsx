import React from 'react'
import { Form, Input, Select, Col,Row,Checkbox,Radio,DatePicker,Cascader,Tree,Transfer,Button,TreeSelect,
		Icon,Upload,Steps,Affix,Modal,Tooltip,Slider, InputNumber,QueueAnim,Breadcrumb,Badge,Collapse ,
		Dropdown,message,Popover,Progress,Tag,Timeline  } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const RangePicker = DatePicker.RangePicker;
const TreeNode = Tree.TreeNode;
const SHOW_PARENT = TreeSelect.SHOW_PARENT;
const Step = Steps.Step;
const confirm = Modal.confirm;
const Panel = Collapse.Panel;
const ProgressCircle = Progress.Circle;

//级联选择选项
const cascaderOptions = [{
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
//树选择选项
const treeData = [{
  label: '节点一',
  value: '0-0',
  key: '0-0',
  children: [{
    label: '子节点一',
    value: '0-0-0',
    key: '0-0-0',
    children: [{
	    label: '子节点1.1',
	    value: '0-0-0-0',
	    key: '0-0-0-0',
	  }, {
	    label: '子节点1.2',
	    value: '0-0-0-1',
	    key: '0-0-0-1',
	}],
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
//步骤条数据
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
	handleClickA () {
		let count = this.state.count - 1;
	    if (count < 0) {
	      count = 0;
	    }
	    this.setState({ count });
	    message.success('示例图片已打开！',5);
	},
	concel(){
		message.error("点击取消了");
	},
	getInitialState() {
	    return {
	      count: 1,
	    };
	},
	render(){
		const timeLine = (<Timeline>
						  <Timeline.Item>开始 2015-09-01</Timeline.Item>
						  <Timeline.Item>进行 2015-09-01</Timeline.Item>
						  <Timeline.Item>结束 2015-09-01</Timeline.Item>
						</Timeline>);
		const tree = (
			<Tree showLine  multiple checkable>
	            <Tree.TreeNode title="中国石油天然气管道局" key="G100">
	              <Tree.TreeNode title="管道局" key="0-0-0" disabled>
	                <Tree.TreeNode title="局办公室" key="0-0-0-0" disableCheckbox />
	                <Tree.TreeNode title="人事部" key="0-0-0-1" />
	              </Tree.TreeNode>
	              <Tree.TreeNode title="工程建设单位" key="0-0-1">
	                <Tree.TreeNode title={<span style={{ color: '#08c' }}>龙慧公司</span>} key="0-0-1-0" />
	              </Tree.TreeNode>
	            </Tree.TreeNode>
			</Tree>
			);
		return (
			<div>
			<Affix>
				<Breadcrumb>
					{this.props.breadCrumb.map(function(item,index){
						return <Breadcrumb.Item>{item}</Breadcrumb.Item>
					})}
				</Breadcrumb>
			</Affix>
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
			          wrapperCol={{ span: 6 }}>
			          	<div className="clearfix">
			          		<QueueAnim delay={1000} animConfig={[
					            { opacity: [1, 0], translateY: [0, 50] },
					            { opacity: [1, 0], translateY: [0, -50] }
					          ]}>
					            <Upload key="1"
					            	action='/upload.do'
	  								listType= 'picture-card'>
									<Icon type="plus" />
									<div className="ant-upload-text">上传照片</div>
								</Upload>
								<Badge count={this.state.count} key="2">
									<a key="3" onClick={this.handleClickA} href="https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png" target="_blank" className="upload-example">
								    	<img src="https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png" />
								    	<span>示例</span>
							 		</a>
						 		</Badge>
					 		</QueueAnim >
						</div>
			        </FormItem>
			        <FormItem 
				      label="滑动条："
				      labelCol={{ span: 4 }}
				      wrapperCol={{ span: 6 }}>
				      <IntegerStep   min={0} max={10}  value={0} icon={['frown', 'smile']} />
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
			            <Cascader options={cascaderOptions} style={{width:"250px"}}  />  
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
			            <div><TransferDemo /></div>
			        </FormItem>  
			   	</div></Row>
			   	<Row><div>
			   		<FormItem 
			          label="折叠面板："
			          labelCol={{ span: 4 }}
			          wrapperCol={{ span: 16 }}>
			            <Collapse defaultActiveKey={['1']} >
						    <Panel header="这是个折叠面板，里面隐藏了一些组件" key="1">
						    	<Row>
							       <Col span="6">
								       <Dropdown overlay={<p>这里通常是菜单</p>}>
									        <a className="ant-dropdown-link" href="#">
										      下拉菜单 <Icon type="down" />
										    </a>
									   </Dropdown>
								   </Col>
								   <Col span="6">
									   <Popover overlay={timeLine} title="时间轴">
									   		<a className="ant-dropdown-link" href="#">
										      气泡卡片 <Icon type="down" />
										    </a>
									   </Popover>
									</Col>
									<Col span="12">
										<Tag closable color="blue">蓝色</Tag>
										<Tag closable color="green">绿色</Tag>
										<Tag closable color="yellow">黄色</Tag>
										<Tag closable color="red">红色</Tag>
									</Col>
									<Col span="6">
										<Popover overlay={tree} title="树形控件">
									   		<a className="ant-dropdown-link" href="#">
										      气泡卡片 <Icon type="down" />
										    </a>
									   </Popover>
									</Col>
							 	</Row> 
						    </Panel>
						</Collapse>
			        </FormItem>  
			   	</div></Row>
			   	<Row><div>
				   	<FormItem wrapperCol={{ span: 20,offset: 10 }}  style={{marginTop: 24 }}>
			          <ButtonDemo/>
			        </FormItem>
		        </div></Row>
		        
 
			  </Form>
			</div>  
		)
	}
})
//穿梭框
const TransferDemo = React.createClass({
  getInitialState() {
    return {
      mockData: [],//存全部选项的内容
      targetKeys: [],//存被选择的选择的key
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
//提交按钮
const ButtonDemo = React.createClass({
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
//滑动条
const IntegerStep = React.createClass({
  getInitialState() {
  	const max = this.props.max;
    const min = this.props.min;
    const mid = ((max - min) / 2).toFixed(5);
    console.log(min,max,mid)
    return {
      preIconClass: this.props.value >= mid ? '' : 'anticon-highlight',
      nextIconClass: this.props.value >= mid ? 'anticon-highlight' : '',
      mid,
      sliderValue: this.props.value
    };
  },
  onChange(v) {
  	this.setState({
      preIconClass: v >= this.state.mid ? '' : 'anticon-highlight',
      nextIconClass: v >= this.state.mid ? 'anticon-highlight' : '',
      sliderValue: v
    });
  },
  render() {
    return (
      <div className="row">
        <div className="col-2">
          <Icon className={this.state.preIconClass} type={this.props.icon[0]} />
        </div> 
        <div className="col-20"> 
          <Slider  {...this.props}  onChange={this.onChange} value={this.state.sliderValue} />
        </div>
        <div className="col-2">
          <Icon className={this.state.nextIconClass} type={this.props.icon[1]} />
       	</div> 
        <div >
          <InputNumber  {...this.props}  style={{ marginLeft: '16px' }}
            value={this.state.sliderValue} onChange={this.onChange} />
          <ProgressCircle percent={this.state.sliderValue/this.props.max*100} width={80}  />
        </div>
      </div>
    );
  }
});

export default CardForm



