import express from "express";
import cors from "cors";
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "The server is started",
  });
});



app.listen(PORT, () => {
  console.log(`the server is running at http://localhost:${PORT}`);
});
