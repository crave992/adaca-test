import TopNav from './components/TopNav'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate()

  return (
    <div>
      <TopNav />
      <div className="container">
        <div className="surface" style={{ padding: '2rem' }}>
          <h1 style={{ marginBottom: '0.5rem' }}>User Directory Viewer</h1>
          <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
            Browse Pinoy personas. Click a row to see details.
          </p>
          <Button
            label="Go to Users"
            icon="pi pi-users"
            size="large"
            onClick={() => navigate('/users')}
          />
        </div>
      </div>
    </div>
  )
}

export default App
