import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CreateTodo from './components/CreateTodo.jsx'
import Card from './components/Card.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CreateTodo/>
  </React.StrictMode>,
)
