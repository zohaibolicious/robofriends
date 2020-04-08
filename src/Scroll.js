import React from "react";
import 'tachyons';

const Scroll = (props) => {
  return (
      <div style={{overflowY: 'Scroll', height: '750px'}} className={'shadow-5'}>
          {props.children}
      </div>
  )
};

export default Scroll;
