const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
let dbResult;

const {Client} = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'MyNodeDB',
  password: '0814Lassit3r5!!', //password remove when uploading to git
  port: 5432,
})
client.connect()


app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// Configure Nunjucks
var _templates = process.env.NODE_PATH ? process.env.NODE_PATH + '/templates' : 'templates' ;
nunjucks.configure( _templates, {
    autoescape: true,
    cache: false,
    express: app
} ) ;
console.log(_templates);
// Set Nunjucks as rendering engine for pages with .html suffix
app.engine( 'html', nunjucks.render ) ;
app.set( 'view engine', 'html' ) ;

app.get('/index', function(req, res){
  client.query('SELECT * From "MyFilmCollection" ' ,
    (err, result) =>
    {
      if(err) {
          console.log(err);
          res.status(400).send(err);
        }
    dbResult = (result.rows);

    let myArr = new Array();
    myArr = (result.rows.map((item) => item.filmname));
    console.log(myArr);

    res.render('index.html', {name:JSON.stringify(dbResult)});
    console.log(dbResult);
    //res.render('index.html', {name: (dbResult)});
    });
    //res.render('index.html', {name: (dbResult)});
});

//app.get('/index', function(req, res){
    //res.render('index.html', {name: (["Tony", "Lisa", "Michael", "Ginger", "Food"])});
//});

//nunjucks.configure('views', {
    //autoescape: true,
    //express: app
//});

//app.get('/', function(req, res) {
    //res.render('index.html');
//});

//app.get("/starwars", (req, res, next) => {
  //res.send("These are the list of Starwars Movies pre and post 2000 although i dont include the sequals because they are rubbish just type pre2000 or post2000 into the url");
//});

//app.get("/starwars/pre2000", (req, res, next) => {
  //res.json(["A New Hope", "The Empire Strikes Back", "Return Of The Jedi"]);
//});

//app.get("/starwars/post2000", (req, res, next) => {
  //res.json(["Phantom Menace", "Attack Of The Clones", "Revenge Of The Sith"]);
//});
