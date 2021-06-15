import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './data/schema'

const app = express();

app.get('/', (req, res) => {
    res.send('graphql')
})

app.use('/graphql', graphqlHTTP ({
    schema: schema,
    graphiql: true
}))

app.listen(8080, () => console.log('Running server on 8080'))
