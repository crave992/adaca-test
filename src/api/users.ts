import type { User } from '../types/User'

const BASE_URL = '/api'

export async function fetchUsers(): Promise<User[]> {
	const res = await fetch(`${BASE_URL}/users`)
	if (!res.ok) throw new Error('Failed to fetch users')
	return res.json()
}

export async function fetchUserById(id: string | number): Promise<User> {
	const res = await fetch(`${BASE_URL}/users/${id}`)
	if (!res.ok) throw new Error('Failed to fetch user')
	return res.json()
}


