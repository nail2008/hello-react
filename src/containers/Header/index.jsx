import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import enquire from 'enquire.js';
import { Select, Menu, Row, Col, Icon} from 'antd';

import './index.less';



class Header extends Component{
  constructor(props) {
    super(props);

    this.state = {
      menuVisible: false,
      menuMode: 'horizontal',
    };
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.setState({
        menuVisible: false,
      });
    });

    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        this.setState({ menuMode: 'inline' });
      },
      unmatch: () => {
        this.setState({ menuMode: 'horizontal' });
      },
    });
  }

  handleMenuIconClick(e){
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({
      menuVisible: true,
    });
  }

  render(){
    const routes = this.props.routes;
    const activeMenuItem = routes[1].path || 'home';

    const menuStyle = {
      display: this.state.menuVisible ? 'block' : '',
    };

    return (
      <header id="header" className="clearfix">
        <Row>
          <Col lg={4} md={6} sm={7} xs={24}>
            <Icon
              className="nav-phone-icon"
              onClick={this.handleMenuIconClick.bind(this)}
              type="menu" />
            <Link to="/" id="logo">
              <img src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
              <span>ABC公司</span>
            </Link>
          </Col>
          <Col className={`nav ${this.state.menuVisible ? 'nav-show' : 'nav-hide'}`}
               lg={20} md={18} sm={17} xs={0} style={menuStyle}>
            <Menu mode={this.state.menuMode} selectedKeys={[activeMenuItem]} id="nav">
              <Menu.Item key="home">
                <Link to="/">
                  首页
                </Link>
              </Menu.Item>
              <Menu.Item key="part1">
                <Link to="/part1">
                  实践
                </Link>
              </Menu.Item>
              <Menu.Item key="part2">
                <Link to="/part2">
                  模式
                </Link>
              </Menu.Item>
              <Menu.Item key="part3">
                <Link to="/part3">
                  组件
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </header>
    );
  }
}


export default Header;

