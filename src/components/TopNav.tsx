import { Menubar } from 'primereact/menubar'

export function TopNav() {
  const items = [
    { label: 'Home', icon: 'pi pi-home', url: '/' },
    { label: 'Users', icon: 'pi pi-users', url: '/users' },
  ]

  return (
    <div className="surface" style={{ borderRadius: 0 }}>
      <div className="container">
        <Menubar model={items} start={<span style={{ fontWeight: 700 }}>Adaca</span>} />
      </div>
    </div>
  )
}

export default TopNav


