import React from "react"
import ShowMoreText from 'react-show-more-text';

const Expand = ({ containerCls, lines = 2, children }) => {

  return (<div className={containerCls}>
    <ShowMoreText lines={lines}
      more={
      <div className="text-center text-small text-tag-blue mt-3">展开</div>
      } less={
        <div className="text-center text-small text-tag-blue mt-3">收起</div>
      }
    >
      {children}
    </ShowMoreText>
  </div>)
}

export default Expand
