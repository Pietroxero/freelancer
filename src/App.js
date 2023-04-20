import logo from './logo.svg';
import './App.css';


const mongoose = require('mongoose')
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://127.0.0.1:27017/FreeLancer';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
const router= require('./routes/index')

const express = require('express');

const PORT = process.env.port || 2324;
const app = express();
app.use(express.json());
app.use(router);


 
mongoose.connect(url, () => {
  console.log("connected")
  app.listen(PORT, () => console.log("Now listening"));
});



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
