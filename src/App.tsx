import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Hero from './components/hero/hero'
import { routes } from './routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          {routes.map((item) => (
            <Route index path={item.path} element={item.component} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
