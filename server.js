const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const mySql = require('mysql2');
const PORT = process.env.PORT || 3500;
const EntryQuery = require('./public/scripts/newEntryQuery').default.default;



//SQL CONNECTION **********************
const db = mySql.createConnection({
    host:'127.0.0.1',
    user: 'root',
    password: 'Chief117!',
    database:'scprepository'
});

db.connect(err => {
    if (err) throw err;
    console.log("Database connection successful");
});

//Middleware **********************
app.use('/', express.static(path.join(__dirname, '/public')));
app.use('/subdir', express.static(path.join(__dirname, '/public')));

//URL ENCODING (processes /post requests)
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//ROUTING
app.use('/', require('./routes/pages'));
app.use('/subdir', require('./routes/subdir'));



//Login form handling
app.post('/login', (req,res) => {
    const {ID, name, password } = req.body;
    console.log(req.body);
    
    const query = 'SELECT p.ID, p.name, e.password FROM person p JOIN employee e ON p.ID = e.IDold WHERE p.name = ? AND e.password = ? AND p.ID = ?';


    db.query(query, [name, password, parseInt(ID, 10)], (err, results) => {
        if (err) throw err;
        if(results.length > 0) {
            res.redirect('/subdir');
        } else {
            res.send('Login unsuccessful');
        }
        console.log(results);
    });
});
//Signup form handling
app.post('/signup', (req,res) => {
    const {email, password} = req.body;
    console.log(req.body);
    const query = 'INSERT INTO employee(email,password) values(?,?)';

    db.query(query, [email, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.send('')
        }
    })
});

app.get('/entities', (req,res) => {
    const query = 'SELECT * FROM entity';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching entities:', err);
            return res.sendStatus(500);
        } 
        
        res.json(results);
        
    });
});
app.get('/search', (req,res) => {
    //WIP
});
app.post('/registerEntity', (req,res) => {
    const query = ''
})
app.listen(PORT, () => {console.log(`server running on port: ${PORT}`)});