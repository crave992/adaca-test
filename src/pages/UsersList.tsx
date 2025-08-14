import { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { ProgressSpinner } from 'primereact/progressspinner'
import { Message } from 'primereact/message'
import { useNavigate } from 'react-router-dom'
import { fetchUsers } from '../api/users'
import TopNav from '../components/TopNav'
import type { User } from '../types/User'

export default function UsersList() {
	const [users, setUsers] = useState<User[] | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const navigate = useNavigate()

	useEffect(() => {
		let isMounted = true
		;(async () => {
			setLoading(true)
			try {
				const data = await fetchUsers()
				if (isMounted) setUsers(data)
			} catch (e) {
				if (isMounted) setError((e as Error).message)
			} finally {
				if (isMounted) setLoading(false)
			}
		})()
		return () => {
			isMounted = false
		}
	}, [])

	return (
		<>
		<TopNav />
		<div className="container">
			<div className="surface" style={{ padding: '1.5rem' }}>
				<div className="flex align-items-center justify-content-between mb-3">
					<h2 style={{ margin: 0 }}>Users</h2>
				</div>
			{error && (
				<div className="mb-3"><Message severity="error" text={error} /></div>
			)}
			{loading ? (
				<div className="flex justify-content-center p-4">
					<ProgressSpinner />
				</div>
			) : (
				<DataTable
					value={users ?? []}
					dataKey="id"
					paginator
					rows={5}
					responsiveLayout="scroll"
					onRowClick={(e) => {
						const user = e.data as User
						navigate(`/users/${user.id}`)
					}}
					className="p-datatable-sm"
				>
					<Column field="name" header="Name" sortable />
					<Column field="username" header="Username" sortable />
					<Column field="email" header="Email" body={(row) => <span style={{ color: 'var(--muted)' }}>{row.email}</span>} />
					<Column field="company.name" header="Company" body={(row) => <span style={{ color: 'var(--muted)' }}>{row.company?.name}</span>} />
				</DataTable>
			)}
			</div>
		</div>
		</>
	)
}


