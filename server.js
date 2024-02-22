const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
	'21 savage': {
		"age": 32,
		"birthName": "Yada Yada",
		"birthLocation": "London, England"
	},
	'chance the rapper': {
		'age': 32,
		'birthName': "Chancelor Bennett",
		'birthLocation': 'Chicago, Illinois'
	},
	'eminem': {
		'age': 51,
		'birthName': "Marshall Mathers",
		'birthLocation': 'Detroit, Michigan'
	},
	'ludacris': {
		'age': 46,
		'birthName': "Christopher Bridges",
		'birthLocation': 'Champaign, Illinois'
	},
	'nas': {
		'age': 32,
		'birthName': "Nasir bin Olu Dara Jones",
		'birthLocation': 'New York City, New York'
	},
	'unknown':{
		'age': 0,
		'birthName': 'unknown',
		'birthLocation': 'unknown'
	}
}

app.get('/', (request, response)=>{
		response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
	const rapperName = request.params.name.toLowerCase()
	if(rappers[rapperName]){
		response.json(rappers[rapperName])
	}else{
		response.json(rappers['unknown'])
	}
})

app.listen(PORT, ()=>{
	console.log(`The server is running on port ${PORT}`)
})