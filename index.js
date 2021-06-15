import express from 'express'
import schema from './schema'
import { graphqlHTTP } from 'express-graphql'

const app = express();

app.get('/', (req, res) => {
    res.send('graphql')
})

const root = {
    friend: () => {
        return {
            "id": 123456,
            "firstName": "Test",
            "lastName": "Testerson",
            "gender": "Male",
            "email": [
                { email: "test@test.com" },
                { email: "me@test.com" }
            ]
        }
    }
}

app.use('/graphql', graphqlHTTP ({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8080, () => console.log('Running server on 8080'))

