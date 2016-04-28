import React from 'react';

import Header from '../../containers/Header';


import './index.less';

export default function App(props) {
  return (
    <div>
      <Header {...props} />
      {props.children}
    </div>
  );
}
