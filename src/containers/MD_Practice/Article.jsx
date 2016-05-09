import React, {Component, PropTypes} from 'react';
import './../Content/index.less';
import hljs from 'highlight.js';

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

export default class Article extends Component{
  render(){
    const mdName = this.props.params.mdName;
    const content = require('antd-md!../../../static/docs/md_practice/' + mdName + '.md');

    return (
      <div className="main-container">
      	<article className="markdown">
          <h1>
            { content.meta.chinese || content.meta.english }
          </h1>
          {
            !content.meta.subtitle ? null :
              <span className="subtitle">{ content.meta.subtitle }</span>
          }
          {
            content.description.map(parseChildren)
          }
        </article>
      </div>
    );
  }
}

Article.propTypes = propTypes;

Article.contextTypes = contextTypes;


