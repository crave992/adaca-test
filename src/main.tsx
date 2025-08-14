import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import UsersList from './pages/UsersList.tsx'
import UserDetail from './pages/UserDetail.tsx'

// PrimeReact and related styles
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/users', element: <UsersList /> },
  { path: '/users/:id', element: <UserDetail /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
