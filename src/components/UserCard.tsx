import { Card } from 'primereact/card'
import type { User } from '../types/User'

type UserCardProps = {
	user: User
}

export function UserCard({ user }: UserCardProps) {
	return (
		<Card title={user.name} subTitle={user.email}>
			<div>
				<p>
					<strong>Username:</strong> {user.username}
				</p>
				<p>
					<strong>Company:</strong> {user.company.name}
				</p>
				<p>
					<strong>Address:</strong> {user.address.city}
				</p>
			</div>
		</Card>
	)
}


