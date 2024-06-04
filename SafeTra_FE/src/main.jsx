import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { NotFound, RootLayout, HomeLayout, DashboardLayout } from './layouts'
import { Home, About, Contact, Dashboard, DashboardPages } from '.'

import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>} errorElement={<NotFound />}>
      <Route element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path='/dashboard' element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />     
        <Route path='/dashboard/:pages' element={<DashboardPages />} errorElement={<NotFound />} />     
        {/* <Route path="/users" element={<Users />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} /> */}
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
