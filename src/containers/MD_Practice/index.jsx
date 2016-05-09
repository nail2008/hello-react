/**
 * Created by Cheng zhen on 16/5/6.
 */

/**
 *  展示 markdown 文档
 */
import React from 'react';
import { Link } from 'react-router';
import md_practice from '../../../static/docs/md_practice';
import { Row, Col, Menu } from 'antd';

function fileNameToPath(filename) {
  const snippets = filename.replace(/(\/index)?\.md$/i, '').split('/');
  return snippets[snippets.length - 1];
}

export default class MD_Practice extends React.Component{
  getMenuItems(){
    const data = md_practice;
    const metaData = Object.keys(data)
      .map((key) => data[key])
      .map((file) => file.meta);
    console.log(metaData);
    const menuItems = metaData.map(this.generateMenuItem);
    return menuItems;
  }

  generateMenuItem(item, index){
    const key = fileNameToPath(item.fileName);
    const text = item.chinese;
    const disabled = item.disabled === 'true';
    const url = item.fileName.replace(/(\/index)?\.md$/i, '');

    const child = !item.link ?
      <Link to={url} disabled={disabled}>
        { text }
      </Link> :
      <a href={item.link} target="_blank" disabled={disabled}>
        { text }
      </a>;

    return (
      <Menu.Item key={key} disabled={disabled}>
        {child}
      </Menu.Item>
    );
  }

  render(){
    const menuItems = this.getMenuItems();
    return (<div className="main-wrapper">
        <Row>
          <Col span="4">
            {/*所有的 markdown 文档的目录*/}
            <Menu className="sidebar" mode="inline">
              {menuItems}
            </Menu>
          </Col>
          <Col span="20" className="main-container">
            {/*展示 markdown 文档的内容*/}
            {this.props.children}
          </Col>
        </Row>
        <Row>
          <Col span="20" offset="4">
            <section className="prev-next-nav">

            </section>
          </Col>
        </Row>
      </div>

    );

  }
}
