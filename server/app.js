import express from 'express';
import jwt from 'jsonwebtoken';
const app = express()
const port = 5000


app.use(express.json())
const jwtParolu = "sdgajgsaf"
const { Schema } = mongoose;
import mongoose from 'mongoose';

const userSchema = new Schema({
    username: String, // String is shorthand for {type: String}
    pasword: String,
    role: String
});

const User = mongoose.model('Users', userSchema);

app.get('/users', async (req, res) => {
    res.send('Hello World!')
})

app.get('/users/:id', async (req, res) => {
    res.send('Hello World!')
})
//kub
app.delete('/users', async (req, res) => {
    try {
        const token = req.headers.authorization
        let decoded = jwt.verify(token, jwtParolu);
        res.send(decoded)
    } catch(err) {
        res.status(403)
      }
})
app.post('/register', async (req, res) => {
    const user = await User.create(req.body)
    const token = jwt.sign({ username: user.username }, jwtParolu);

    res.send(token)
})







mongoose.connect('mongodb+srv://nihadfatiyev:nihad123@cluster0.tygkpo2.mongodb.net/')
    .then(() => console.log('Connected!'))
    .catch(error => console.log("not even Connected"))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


