import React, { memo } from 'react'
import Helloworld from 'components/hello-world'

const App = memo(() => {
  return (
    <div>
      <Helloworld/>
    </div>
  )
})

export default App