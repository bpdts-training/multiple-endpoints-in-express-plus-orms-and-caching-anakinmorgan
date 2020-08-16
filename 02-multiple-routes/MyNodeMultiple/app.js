let express = require("express");
let app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/starwars", (req, res, next) => {
  res.send("These are the list of Starwars Movies pre and post 2000 although i dont include the sequals because they are rubbish just type pre2000 or post2000 into the url");
});

app.get("/starwars/pre2000", (req, res, next) => {
  res.json(["A New Hope", "The Empire Strikes Back", "Return Of The Jedi"]);
});

app.get("/starwars/post2000", (req, res, next) => {
  res.json(["Phantom Menace", "Attack Of The Clones", "Revenge Of The Sith"]);
});
