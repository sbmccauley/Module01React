import express from 'express'



const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')) 
})


app.listen(5000,() => {
    console.log('listening to port 5000')
})