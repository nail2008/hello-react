# React 组件生命周期

## 实例化
- getDefaultProps （只在首次实例化组件时调用）   
  为实例设置默认的props值，注意这些值是所有实例共享的。
- getInitialState （每个实例只调用一次）  
  初始化state，在这里已经可以使用this.props
- componentWillMount  
  该方法在完成首次渲染之前被调用
- render  
  只能通过this.props和this.state访问数据  
  只能有一个顶级元素  
  必须纯净，不能修改state或操作DOM
- componentDidMount  
  在这里，通过this.getDOMNode()可以访问到渲染后的DOM元素

## 存在期
- componentWillReceiveProps  
  在这里可以捕获props的修改，并通过this.setState()修改状态
- shouldComponentUpdate  
  建议不要使用这个钩子
- componentWillUpdate  
  当再次渲染之前调用该方法，不可以在这里更新state或props，而应该在componentWillReceiveProps中进行
- render
- componentDidUpdate  
  跟componentDidMount类似

## 销毁&清理期
- componentWillUnmount

