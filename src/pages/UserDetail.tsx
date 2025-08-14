import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card } from 'primereact/card'
import { ProgressSpinner } from 'primereact/progressspinner'
import { Message } from 'primereact/message'
import { fetchUserById } from '../api/users'
import TopNav from '../components/TopNav'
import type { User } from '../types/User'

export default function UserDetail() {
	const { id } = useParams()
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		let isMounted = true
		;(async () => {
			if (!id) return
			setLoading(true)
			try {
				const data = await fetchUserById(id)
				if (isMounted) setUser(data)
			} catch (e) {
				if (isMounted) setError((e as Error).message)
			} finally {
				if (isMounted) setLoading(false)
			}
		})()
		return () => {
			isMounted = false
		}
	}, [id])

	if (loading)
		return (
			<div className="flex justify-content-center p-4">
				<ProgressSpinner />
			</div>
		)
	if (error)
		return (
			<div className="p-4">
				<Message severity="error" text={error} />
			</div>
		)
	if (!user) return <div className="p-4">No user found.</div>

	const header = (
		<div className="flex align-items-center gap-2" style={{ color: 'var(--text)' }}>
			<i className="pi pi-user" />
			<span style={{ fontWeight: 700 }}>{user.name}</span>
		</div>
	)

	return (
		<>
		<TopNav />
		<div className="container">
			<div className="mb-3">
				<Link to="/users" className="inline-block">
				<i className="pi pi-arrow-left mr-2" /> Back to Users
				</Link>
			</div>
			<Card title={header} subTitle={user.email} className="mb-3 surface" style={{ border: 'none' }}>
				<div className="grid">
					<div className="col-12 md:col-6">
						<h4 style={{ marginTop: 0 }}>Contact</h4>
						<p>
							<strong>Phone:</strong> <span style={{ color: 'var(--muted)' }}>{user.phone}</span>
						</p>
						<p>
							<strong>Website:</strong> <span style={{ color: 'var(--muted)' }}>{user.website}</span>
						</p>
					</div>
					<div className="col-12 md:col-6">
						<h4 style={{ marginTop: 0 }}>Company</h4>
						<p>
							<strong>Name:</strong> <span style={{ color: 'var(--muted)' }}>{user.company.name}</span>
						</p>
						<p>
							<strong>Catchphrase:</strong> <span style={{ color: 'var(--muted)' }}>{user.company.catchPhrase}</span>
						</p>
					</div>
					<div className="col-12">
						<h4 style={{ marginTop: 0 }}>Address</h4>
						<p>
							<span style={{ color: 'var(--muted)' }}>
								{user.address.suite}, {user.address.street}, {user.address.city} {user.address.zipcode}
							</span>
						</p>
					</div>
				</div>
			</Card>
		</div>
		</>
	)
}


