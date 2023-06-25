import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {TopicsProvider} from './context/topicContext'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TopicsProvider>
        <App />
      </TopicsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
