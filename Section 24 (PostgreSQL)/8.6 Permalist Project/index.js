import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "1407",
  port: 5432
});

db.connect();


async function getALLitems() {
  const result = await db.query("SELECT * FROM items");
  return result.rows;
}


app.get("/", async (req, res) => {
  const items = await getALLitems();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  var item = req.body.newItem;
  try {
    await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
  } catch (err) {
    console.log(err);
  }
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  try {
    await db.query("UPDATE items SET title=$1 WHERE id=$2", [req.body.updatedItemTitle, req.body.updatedItemId])
  } catch (err) {
    console.log(err);
  }
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  try {
    await db.query("DELETE FROM items WHERE id=$1", [req.body.deleteItemId])
  } catch (err) {
    console.log(err);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
