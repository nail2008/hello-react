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
              <h2>中油龙慧</h2>
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
              <Menu.Item key="md_practice">
                <Link to="static/docs">
                  简介
                </Link>
              </Menu.Item>
              <Menu.Item key="part3">
                <Link to="/part3">
                  demo
                </Link>
              </Menu.Item>
              <Menu.Item key="part2">
                <a href="http://localhost:8001/#/docs/react/introduce">
                  组件
                </a>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </header>
    );
  }
}


export default Header;

