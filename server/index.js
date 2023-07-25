const express = require('express')
require('dotenv').config()
const {
    videos
} = require('./data')

const app = express()
const db = require('./app/models/')

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

require('./app/routes/videos')(app)

const PORT = process.env.PORT || 3001;
db.mongoose
    .connect(db.url)
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))
        /* tambah data dummy */
        // db.videos.insertMany(videos)
        //     .then(() => {
        //         console.log('Data inserted successfully.');
        //     })
        //     .catch((error) => {
        //         console.error('Error inserting data:', error);
        //     })
    })
    .catch((error) => console.log(`${error} did not connect`))