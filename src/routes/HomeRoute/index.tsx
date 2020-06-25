import React from 'react'
import { Link } from 'react-router-dom'

import ReactLogo from '../../components/common/Icons/ReactLogo'
import { SAMPLE_ROUTE_PATH, TODOS_ROUTE_PATH } from '../../constants/NavigationConstants'

import './index.css'

function HomeRoute() {
  return (
    <div className='app'>
      <header className='bg-indigo-900 app-header'>
        <ReactLogo className='app-logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='app-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <Link to={SAMPLE_ROUTE_PATH}>Sample Route</Link>
        <Link to={TODOS_ROUTE_PATH}>Todo Route</Link>
      </header>
    </div>
  )
}

export default HomeRoute
