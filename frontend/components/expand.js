import React, { useState } from "react"

const Expand = ({ containerCls, lines = 2, children }) => {

  const [expand, setExpand] = useState(false)

  return <div className={containerCls}>
    <p className={`text-small ${ expand ? '' : `text-ellipsis line-clamp-3 overflow-hidden ...` }`}>
      {children}
    </p>
    <p
      className="text-center text-small text-tag-blue mt-3"
      onClick={() => setExpand(!expand)}
    >
      { expand ? '收起': '展开' }
    </p>
  </div>
}

export default Expand
