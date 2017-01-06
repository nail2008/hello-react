import React from 'react';
import { Link } from 'react-router';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import TweenOne from 'rc-tween-one';
import GitHubButton from 'react-github-button';
import 'react-github-button/assets/style.css';
import { Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';

/*
 * rc-scroll-anim 页面滚动动画
 * http://motion.ant.design/#/components/scroll-anim
 *
 * rc-tween-one 单元素动画
 * http://motion.ant.design/#/components/tween-one
 *
 * rc-queue-anim 进出场动画
 * http://motion.ant.design/#/components/queue-anim
 *
 */

export default class Banner extends React.Component {
  typeFunc(a) {
    if (a.key === 'line') {
      return 'right';
    } else if (a.key === 'button') {
      return 'bottom';
    }
    return 'left';
  }

  render() {
    return (
      <section id="banner">
        <ScrollElement scrollName="banner" className="page">
          {/* 最简单的入场动画 使用type属性设置进入方向*/}
          <QueueAnim className="banner-text-wrapper" type={this.typeFunc} delay={300}>
            <h2 key="h2">欢迎访问中油龙慧公司网站</h2>
            <p key="content">专注储运业务二十载</p>
            <span className="line" key="line" />
            <div key="button" className="start-button clearfix">
              <Link to="/static/docs/spec/introduce">
                开始访问
              </Link>
            </div>
          </QueueAnim>

          <TweenOne className="down"
            /* 我是多行注释  */
            //单元素动画 animation参数可以是对象,也可以是数组
                    animation={{ y: 10, duration: 800, yoyo: true, repeat: -1 }}>
            <Icon type="down" />
          </TweenOne>
        </ScrollElement>
      </section>
    );
  }
}
