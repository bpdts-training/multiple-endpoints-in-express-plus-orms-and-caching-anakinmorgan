const express = require("express");
const app = express();
const nunjucks = require("nunjucks");

const {Client} = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'MyNodeDB',
  password: '0814Lassit3r5!!', //password remove when uploading to git
  port: 5432,
})
client.connect()

app.get('/url', (req, res) => {
	client.query('SELECT * From "MyFilmCollection"' ,
		(err, result) =>
		{
			if(err) {
					console.log(err);
					res.status(400).send(err);
				}
		res.status(200).send(result.rows);
		});
	});

  app.get('/post2000', (req, res) => {
  	client.query('SELECT * From "MyFilmCollection" WHERE "releaseyear" >= 1980' ,
  		(err, result) =>
  		{
  			if(err) {
  					console.log(err);
  					res.status(400).send(err);
  				}
  		res.status(200).send(result.rows);
  		});
  	});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
