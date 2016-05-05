import React from 'react'
import {Switch,Menu,Icon} from 'antd'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const FormMenu = React.createClass({
  getInitialState() {
    return {
      theme: 'light',
    };
  },
  changeTheme(value) {
    this.setState({
      theme: value ? 'dark' : 'light'
    });
  },
  
  // componentDidMount() {
  //   this.setState({
  //     current: '1'
  //   });
  // },
  render() {
    const menuItemList = function (data){
      if(data!=undefined){
        return data.map(function(menuData, index){
          if(menuData.type == "SubMenu"){
            return (
              <SubMenu key={menuData.key} title={menuData.title}>
               {menuItemList(menuData.menuItem)}
              </SubMenu>
            );
          }
          if(menuData.type == "MenuGroup"){
            return (
              <MenuItemGroup title={menuData.title} key={menuData.title}>
                {menuItemList(menuData.menuItem)}
              </MenuItemGroup>
            ); 
          }
          if(menuData.type == "MenuItem"){
            return (
              <Menu.Item key={menuData.key}>{menuData.name}</Menu.Item>
            ); 
          }
        })
      }
    };
    const menuList = this.props.menuList.map(function(data, index) {
        return (
          <SubMenu key={data.key} title={<span><Icon type={data.icon} /><span>{data.name}</span></span>}>
            {menuItemList(data.menuItem)}
          </SubMenu>
        );
     });
    return (
      <div>
        <Menu onClick={this.props.handleClick.bind(this)}
          style={{ width: 240 }}
          defaultOpenKeys={this.props.defaultMenu}
          selectedKeys={[this.props.menuCurrent]}
          mode="inline"
          theme={this.state.theme}>
         {menuList}
        </Menu>
        <Switch  onChange={this.changeTheme} checkedChildren="暗" unCheckedChildren="亮" />
      </div>
    );
  }
});

export default FormMenu