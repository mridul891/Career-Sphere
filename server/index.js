import express from "express";
import cors from "cors";
import puppeteer from "puppeteer";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const getJobs = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto(
    "https://www.linkedin.com/jobs/search/?currentJobId=4106411406&keywords=software%20engineer&origin=JOB_SEARCH_PAGE_KEYWORD_AUTOCOMPLETE&refresh=true%2F",
    {
      waitUntil: "domcontentloaded",
    }
  );

  console.log("reached 1")
  const jobs = await page.evaluate(()=>{
    console.log("Reached 2")
    const job = document.querySelectorAll(".jobs-details__main-content")
    console.log("reached 3")
    console.log(job)
  })

  console.log(jobs)
};

getJobs()

// app.get("/", (req, res) => {
//   res.json({
//     message: "The server is started",
//   });
// });

// app.listen(PORT, () => {
//   console.log(`the server is running at http://localhost:${PORT}`);
// });
