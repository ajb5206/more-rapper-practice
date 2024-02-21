const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
	'21 Savage': {
		"age": 32,
		"birthName": "Yada Yada",
		"birthLocation": "London, England"
	},
	'Chance the Rapper': {
		'age': 32,
		'birthName': "Chancelor Bennett",
		'birthLocation': 'Chicago, Illinois'
	},
	'Unknown':{
		'age': 0,
		'birthName': 'unknown',
		'birthLocation': 'unknown'
	}
}

app.get('/', (request, response)=>{
		response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
	const rapperName = request.params.name
	response.json(rappers[rapperName])
})

app.listen(PORT, ()=>{
	console.log(`The server is running on port ${PORT}`)
})