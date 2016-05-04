import React from 'react';
//由于rc-scroll-anim的Link组件名称与本组件名称相同,所以这里设置了别名ScrollLink
import { Link as ScrollLink ,scrollScreen } from 'rc-scroll-anim';
/**
 * 本组件应用了antd的ScrollAnim页面滚动动画组件
 * GitHub地址:
 * http://react-component.github.io/scroll-anim/
 * 中文文档地址:
 * http://motion.ant.design/#/components/scroll-anim
 */
export default class Link extends React.Component {
  componentDidMount() {
    scrollScreen.init({
      docHeight: 1000
    });
  }

	/**
   * Link的
   * @returns {XML}
   */
  render() {
    return (
      <div id="list">
        <ScrollLink className="list-point" location="banner" />
        <ScrollLink className="list-point" location="page1" />
        <ScrollLink className="list-point" location="page2" />
        <ScrollLink className="list-point" location="page3" />
        <ScrollLink className="list-point" location="page4" />
      </div>
    );
  }
}
