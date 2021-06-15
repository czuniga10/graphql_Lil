import express from 'express'
import schema from './schema'
import { graphqlHTTP } from 'express-graphql'

const app = express();

const friendDatabase = {}

class Friend {
    constructor(id, {firstName, lastName, gender, email}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
    }
}

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
            "email": "test@test.com"
        }
    },
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        return new Friend(id, input)
    }
}

app.use('/graphql', graphqlHTTP ({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8080, () => console.log('Running server on 8080'))

