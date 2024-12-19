const express = require("express");
const app =express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
app.use(cors({"origin":"*"}));

const port = 3000;

// Parser za JSON podatke
app.use(bodyParser.json());

// Parser za podatke iz formi
app.use(bodyParser.urlencoded({ extended: true }));


const connection = mysql.createConnection({
    host: 'ucka.veleri.hr',
    user: 'muljanic',
    password: '11',
    database: 'muljanic'
  });
 
app.use(express.urlencoded({ extended: true }));
 
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


app.get("/api/knjige", (request, response) => {
    
    connection.query("SELECT * FROM knjiga", (error, results) => {
      if (error) throw error;
      response.send(results);
    });
/*
    request - slanje zahtjeva s klijentske strane
    response - slanje odgovora sa serverske strane

    npm install -g nodemon
*/
    //response.send("popis knjiga");
});

app.get("/api/knjige/:id", (request, response) => {
    const id = request.params.id;
    connection.query("SELECT * FROM knjiga WHERE id = ?", id, (error, results) => {
        if (error) throw error;
        response.send(results);
      });
    //response.send("jedna knjiga "+id);
});

app.get("/api/rezervacija", (req, res) => {
  const query =
    "    SELECT knjiga.naslov, knjiga.autor, korisnik.ime AS korisnik, rezervacija.datum_rez FROM rezervacija " +
    "JOIN knjiga ON rezervacija.knjiga = knjiga.id JOIN korisnik ON rezervacija.korisnik = korisnik.id;";
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});


app.post("/api/rezerv_knjige", (request, response) => {
    const data = request.body;
    rezervacija = [[data.datum, data.id_knjiga, data.id_korisnik]]

    connection.query("INSERT INTO rezervacija (datum_rez, knjiga, korisnik) VALUES ?", [rezervacija], (error, results) => {
      if (error) throw error;
      response.send(results);
    });
    
    //response.send("Poslano "+data.id_knjiga);
  });
  
  app.listen(port, () => {
    console.log("Server running at port: " + port);
});