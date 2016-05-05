import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import hljs from 'highlight.js';
import {Button, Collapse} from 'antd';
import BrowserDemo from '../../components/BrowserDemo';

const propTypes = {

};

const contextTypes = {

};

function mdLangToHljsLang(lang) {
  return lang.toLowerCase() === 'jsx' ?
    'javascript' :
    lang;
}

function parseChildren(object, index){
  console.log(object);
  console.log(index);
  if (object === null) return;

  if (React.isValidElement(object)) {
    return React.cloneElement(object, { key: index });
  }

  if (typeof object === 'function') {
    return object(React, ReactDOM, antd, antd);
  }

  if (typeof object === 'string') {
    return <span key={index}>{ object }</span>;
  }

  const children = object.children;

  if (object.type === 'html') {
    return React.createElement('div', {
      className: 'markdown',
      key: index,
      dangerouslySetInnerHTML: { __html: children }
    });
  }

  if (/h[1-6]/i.test(object.type)) {
    return React.createElement(object.type, {
      key: index,
      id: children,
    }, [
      <span dangerouslySetInnerHTML={{ __html: object.children }} />,
    ]);
  }

  if (object.type === 'code') {
    const highlightedCode = hljs.highlight(
      object.props.lang.toLowerCase() === 'jsx' ?
        'javascript' :
        object.props.lang,
      children
    ).value;
    return (
      <div className="highlight" key={index}>
        <pre>
          <code className={object.props.lang}
                dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      </div>
    );
  }

  if (typeof children === 'string') {
    console.log("children is string");
    return React.createElement(object.type, {
      key: index,
      dangerouslySetInnerHTML: { __html: children }
    });
  }

  return React.createElement(
    object.type, { key: index },
    children && children.map(parseChildren) // `hr` has no children
  );
}

class Content extends Component{
  render(){
    const demo = require('antd-md?demo!../../../static/docs/button/demo/button-group.md');
    const _antd = require('antd');
    demo.preview = demo.preview(React, ReactDOM, _antd, BrowserDemo);
    const { id, meta, intro, code, preview, style, src,
      expand, pathname } = demo;
    const introChildren = intro.map(parseChildren);
    const highlightedCode = hljs.highlight('javascript', code).value;
    return (
      <div className="main-container">
      	<article className="markdown">
          <section className="code-box" id={id}>
            <section className="code-box-demo">
              { meta.iframe === 'true' ?
                <iframe src={src} /> :
                preview
              }
              {
                !!style ?
                  <style dangerouslySetInnerHTML={{ __html: style }} /> :
                  null
              }
            </section>
            <section className="code-box-meta markdown">
              <div className="code-box-title">
                { meta.chinese || meta.english }
              </div>
              <Collapse activeKey='code'>
                <Collapse.Panel key="code" header={introChildren}>
                  <div className="highlight">
                    <pre>
                      <code className="javascript" dangerouslySetInnerHTML={{
                        __html: highlightedCode,
                      }} />
                    </pre>
                  </div>
                </Collapse.Panel>
              </Collapse>
            </section>
          </section>



        </article>
      </div>
    );
  }




}

Content.propTypes = propTypes;

Content.contextTypes = contextTypes;

export default Content;

