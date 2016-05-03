import React, {Component, PropTypes} from 'react';
import {buildCommon} from '../utils'

import './index.less';

const propTypes = {

};

const contextTypes = {

};

class Content extends Component{
  render(){
  	mds = buildCommon("../../../docs/practice")


    return (
      <div className="main-container">
      	测试中
      </div>
    );
  }
}

Content.propTypes = propTypes;

Content.contextTypes = contextTypes;

export default Content;

