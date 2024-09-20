const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, '/views'))

app.get('/',(req,res) => {
    res.render('home.ejs')
})
app.get('/cats',(req,res) => {
    const cats = [
        'blue', 'cat2', 'cat3'
    ]
    res.render('cats', { cats })
})


app.listen(3000, ()=> {
    console.log('listening on port 3000');
    
})