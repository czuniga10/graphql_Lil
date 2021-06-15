import express from 'express'
import schema from './schema'
import { graphqlHTTP } from 'express-graphql'
import resolvers from './resolvers'

const app = express();

app.get('/', (req, res) => {
    res.send('graphql')
})

const root = resolvers;

app.use('/graphql', graphqlHTTP ({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8080, () => console.log('Running server on 8080'))
