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
	if(rappers[RapperName]){
		response.json(rappers[rapperName])
	}else{
		response.json(rappers['unknown'])
	}
})

app.listen(PORT, ()=>{
	console.log(`The server is running on port ${PORT}`)
})