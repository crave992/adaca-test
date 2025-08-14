import type { Meta, StoryObj } from '@storybook/react'
import { UserCard } from './UserCard'

const sampleUser = {
	id: 1,
	name: 'Juan Dela Cruz',
	username: 'juandelacruz',
	email: 'juan.delacruz@example.ph',
	address: {
		street: 'Rizal Ave',
		suite: 'Unit 12B',
		city: 'Quezon City',
		zipcode: '1100',
		geo: { lat: '14.6760', lng: '121.0437' },
	},
	phone: '+63 917 123 4567',
	website: 'juan.ph',
	company: { name: 'Bayanihan Solutions', catchPhrase: 'Kasama sa pag-unlad', bs: 'digitize local enterprises' },
}

const meta = {
	title: 'Users/UserCard',
	component: UserCard,
	args: {
		user: sampleUser,
	},
} satisfies Meta<typeof UserCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}


