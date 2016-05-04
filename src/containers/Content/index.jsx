import React, {Component, PropTypes} from 'react';
import './index.less';
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

class Content extends Component{
  render(){
    const content = require('antd-md!../../../static/practice/cases.md');
    console.log(content.description);
    const title = content.intro[1][2][1][1].split(':')[1];

    return (
      <div className="main-container">
      	<article className="markdown">
          <h1>
            {title}
          </h1>
          {content.description.map(function(element, index){
            let elementType = element[0];
            let innerContent = element[2];
            console.log(elementType);
            if(/h[1-6]/i.test(elementType)){
              return React.createElement(elementType, {
                key: index,
                id: innerContent, 
              }, [
                <span key="title" dangerouslySetInnerHTML={{ __html: innerContent }} />,
              ]);
            }
            if (typeof innerContent === 'string') {
              return React.createElement(elementType, {
                key: index,
                dangerouslySetInnerHTML: { __html: innerContent }
              });
            }

            if (elementType === 'script') {
              const highlightedCode = hljs.highlight(
                mdLangToHljsLang("bash"),
                innerContent
              ).value;
              return (
                <div className="highlight" key={index}>
                  <pre>
                    <code className="bash"
                      dangerouslySetInnerHTML={{ __html: highlightedCode }} />
                  </pre>
                </div>
              );
            }
          })}

        </article>
      </div>
    );
  }




}

Content.propTypes = propTypes;

Content.contextTypes = contextTypes;

export default Content;

