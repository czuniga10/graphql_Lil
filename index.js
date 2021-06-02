import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('graphql')
})

app.listen(8080, () => console.log('Running server on 8080'))