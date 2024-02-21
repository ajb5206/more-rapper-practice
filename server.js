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

app.get('/api', (request, response)=>{
	response.json(rappers)
})

app.listen(PORT, ()=>{
	console.log(`The server is running on port ${PORT}`)
})