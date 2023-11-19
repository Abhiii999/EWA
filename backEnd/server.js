const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3001;

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

// MySQL connection setup (replace with your MySQL credentials)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'react_db',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Express route to fetch data from MySQL
// app.get('/users', (req, res) => {
//   // Replace 'your_table' with your actual table name
//   const query = 'SELECT * FROM registration';

//   db.query(query, (error, results) => {
//     if (error) {
//       console.error('Error executing MySQL query:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//       return;
//     }
//     // console.log(results);
//     res.json(results);
//   });
// });
//print user orders only

//print all orders
app.get('/Orders', (req, res) => {
  
  const query = 'SELECT * FROM customerorders';

  db.query(query, (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log(results);
    if(results.length>0){
      res.json({ msg: 'Orders found', user: results });
    }
  });
});
//print all orders

//check user orders
app.post('/userOrder', (req, res) => {
  const requestData = req.body;
  console.log("body",req.body);
  const {username} = req.body;
  const query = 'SELECT * FROM customerorders WHERE username = ?';

  db.query(query, [username], (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log(results);
    if(results.length>0){
      res.json({ msg: 'User order found', user: results[0] });
    }else{
      res.json({ msg: 'User order not found' });
    }
  });
});
//print user orders only

//check login crestentials
app.post('/login', (req, res) => {
  const requestData = req.body;
  console.log("body",req.body);
  const {username, password, usertype} = req.body;
  const query = 'SELECT * FROM Users WHERE username = ? AND password = ? AND usertype = ?';

  db.query(query, [username, password, usertype], (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log(results);
    if(results.length>0){
      res.json({ msg: 'User logged in', user: results[0] });
    }else{
      res.json({ msg: 'User not found' });
    }
  });
});
//check login crestentials


// app.get('/user', (req, res) => {
//   // Replace 'your_table' with your actual table name
//   console.log("req",req.query);
//   const queryoptions = req.query.usertype!=null?{usertype : req.query.usertype } : true;
//   let query = 'SELECT * FROM Users WHERE ?';
  
//   db.query(query, queryoptions, (error, results) => {
//     if (error) {
//       console.error('Error executing MySQL query:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//       return;
//     }
//     // console.log(results);
//     res.json(results);
    
//   });
// });


// Register API
app.post('/register', (req, res) => {

  const requestData = req.body;
  console.log("body",req.body);
  const query = 'INSERT INTO Users SET ?';

  db.query(query, requestData, (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    // console.log(results);
    res.json({ msg: 'User registered' });
  });
});
// Register customer order API

//send customer order details to database
app.post('/order', (req, res) => {

  const requestData = req.body;
  console.log("body",req.body);
  const query = 'INSERT INTO customerorders SET ?';

  db.query(query, requestData, (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    // console.log(results);
    res.json({ msg: 'order registered' });
  });
});
//send customer order details to database


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

