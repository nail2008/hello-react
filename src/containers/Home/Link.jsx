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
      docHeight: 4746,
      duration: 1
    });
  }

	/**
   * Link的API:
   * http://motion.ant.design/#/components/scroll-anim?scrollTo=Link+%E8%AF%B4%E6%98%8E&_k=n3uq4r
   * Link实现的是右边的五个点的连接.下面的顺序并不是滚轮操作的顺序,滚轮的顺序由index.jsx中JSX排列的顺序决定
   * 参数:
   * location是必需的,这个值对应 Element Parallax OverPack 的 scrollName 值, 元素必需是唯一.
   *
   */
  render() {
    return (
      <div id="list">
        <ScrollLink className="list-point" location="banner" />
        <ScrollLink className="list-point" location="page1" duration={2000}/>
        <ScrollLink className="list-point" location="page2" duration={10}/>
        <ScrollLink className="list-point" location="page3" />
        <ScrollLink className="list-point" location="page4" />
      </div>
    );
  }
}
