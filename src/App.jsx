import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

const App = memo(() => {
  return (
    <div className='app'>
      {/* <div className='header'>header</div> */}
      <AppHeader/>
      <div className='page'>
        {useRoutes(routes)}
      </div>
      {/* <div className='footer'>footer</div> */}
      <AppFooter/>
    </div>
  )
})

export default App