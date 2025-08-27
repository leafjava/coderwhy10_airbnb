import React, { memo } from 'react'
import styleStrToObj from './utils'

const IconAvatar = memo(() => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={styleStrToObj("display:block;height:100%;width:100%;fill:currentColor;width:32px;")} aria-hidden="true" role="presentation" focusable="false"><path d="m15.9999996 22c6.6160085 0 12.2045111 4.2170337 13.9999337 10.0000376h-27.99986661c1.79542488-5.7830039 7.38393295-10.0000376 13.99993291-10.0000376zm.0000004-2c3.3137 0 6-2.6863 6-6s-2.6863-6-6-6-6 2.6863-6 6 2.6863 6 6 6z"></path></svg>
  )
})

export default IconAvatar