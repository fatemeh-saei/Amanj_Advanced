import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user', (req, res) => {
    const user = {
        id: 10,
        name: "John Doe",
        followers: 1000
    };

    res.json(user)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})