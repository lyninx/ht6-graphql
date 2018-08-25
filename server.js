const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
const DB = require('./models/models')
const graphql_schema = fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8")

const app = express()
const port = 4000

app.set('port', port)

if (mongoose.connect('mongodb://hacker:hackthe6ix@ds229732.mlab.com:29732/ht6-graphql-workshop', { useNewUrlParser: true })) {
  console.log("DB Connected")
}

/////////////////////////////////////////////////////////////////////////////


const schema = buildSchema(`
  // schema definition goes here!
`)

const root = {
  // resolvers go here!
}

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
  context: { DB }
}))

app.listen(port, () => {
	console.log('server running on localhost:' + port)
})