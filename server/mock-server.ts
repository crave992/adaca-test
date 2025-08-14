import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const users = [
	{
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
	},
	{
		id: 2,
		name: 'Maria Santos',
		username: 'mariasantos',
		email: 'maria.santos@example.ph',
		address: {
			street: 'Osmeña Blvd',
			suite: '3rd Floor',
			city: 'Cebu City',
			zipcode: '6000',
			geo: { lat: '10.3157', lng: '123.8854' },
		},
		phone: '+63 32 234 5678',
		website: 'mabuhay.dev',
		company: { name: 'Mabuhay Tech', catchPhrase: 'Tatak Pinoy Innovation', bs: 'scale island-wide logistics' },
	},
	{
		id: 3,
		name: 'Ramon Bautista',
		username: 'rbautista',
		email: 'ramon.bautista@example.ph',
		address: {
			street: 'Roxas Ave',
			suite: 'Blk 5 Lot 8',
			city: 'Davao City',
			zipcode: '8000',
			geo: { lat: '7.1907', lng: '125.4553' },
		},
		phone: '+63 82 221 0000',
		website: 'rbautista.ph',
		company: { name: 'Durian Digital', catchPhrase: 'Maasahang serbisyo sa Mindanao', bs: 'optimize agri-tech supply chains' },
	},
	{
		id: 4,
		name: 'Liza Manalo',
		username: 'lmanalo',
		email: 'liza.manalo@example.ph',
		address: {
			street: 'Session Rd',
			suite: 'Suite 210',
			city: 'Baguio City',
			zipcode: '2600',
			geo: { lat: '16.4023', lng: '120.5960' },
		},
		phone: '+63 74 443 1111',
		website: 'lizamanalo.ph',
		company: { name: 'PinePeak Studios', catchPhrase: 'Malamig pero mataas ang kalidad', bs: 'deliver creative content services' },
	},
	{
		id: 5,
		name: 'Paolo Reyes',
		username: 'preyes',
		email: 'paolo.reyes@example.ph',
		address: {
			street: 'Iloilo River Esplanade',
			suite: 'Unit 4F',
			city: 'Iloilo City',
			zipcode: '5000',
			geo: { lat: '10.7202', lng: '122.5621' },
		},
		phone: '+63 33 337 0000',
		website: 'paoloreyes.dev',
		company: { name: 'Panay Systems', catchPhrase: 'Padayon sa progreso', bs: 'implement fintech integrations' },
	},
	{
		id: 6,
		name: 'Ivy Domingo',
		username: 'idomingo',
		email: 'ivy.domingo@example.ph',
		address: {
			street: 'CM Recto Ave',
			suite: 'Tower 1, 12F',
			city: 'Cagayan de Oro',
			zipcode: '9000',
			geo: { lat: '8.4542', lng: '124.6319' },
		},
		phone: '+63 88 856 2000',
		website: 'ivy.codes',
		company: { name: 'Kagay-an IT', catchPhrase: 'Sulit at mabilis', bs: 'build cloud-native backends' },
	},
	{
		id: 7,
		name: 'Carlos Garcia',
		username: 'cgarcia',
		email: 'carlos.garcia@example.ph',
		address: {
			street: 'Araneta St',
			suite: 'Phase 2, Unit 7',
			city: 'Bacolod City',
			zipcode: '6100',
			geo: { lat: '10.6765', lng: '122.9511' },
		},
		phone: '+63 34 435 0000',
		website: 'sugartech.ph',
		company: { name: 'SugarTech', catchPhrase: 'Matamis ang resulta', bs: 'analyze manufacturing metrics' },
	},
	{
		id: 8,
		name: 'Ana Cruz',
		username: 'anacruz',
		email: 'ana.cruz@example.ph',
		address: {
			street: 'BGC High St',
			suite: 'One Serendra, 9F',
			city: 'Taguig City',
			zipcode: '1634',
			geo: { lat: '14.5353', lng: '121.0537' },
		},
		phone: '+63 2 8876 5432',
		website: 'anacruz.ph',
		company: { name: 'Lakbay Labs', catchPhrase: 'Gawang Pinoy, pang-global', bs: 'innovate travel-tech experiences' },
	},
]

app.get('/users', (_req, res) => {
	res.json(users)
})

app.get('/users/:id', (req, res) => {
	const user = users.find((u) => u.id === Number(req.params.id))
	if (!user) return res.status(404).json({ message: 'User not found' })
	res.json(user)
})

const port = process.env.PORT ?? 4000
app.listen(port, () => {
	console.log(`Mock API running on http://localhost:${port}`)
})


