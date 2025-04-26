const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 5000;

// CORS configuration allowing requests from your frontend (localhost:3000)
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests only from your frontend
  methods: ['GET', 'POST'], // Allow specific methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
};

// Use CORS configuration
app.use(cors(corsOptions));

app.get('/scrape-anime', async (req, res) => {
  try {
    // Launch Puppeteer to scrape data
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set user agent to mimic a real browser
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    await page.goto('https://aniwatchtv.to/');

    // Scrape anime data
    const animeData = await page.evaluate(() => {
      const animeList = [];
      const animeElements = document.querySelectorAll('.anime-title');

      animeElements.forEach((anime) => {
        const title = anime.innerText;
        const image = anime.querySelector('img').src;
        const link = anime.href;
        animeList.push({ title, image, link });
      });

      return animeList;
    });

    await browser.close(); // Close Puppeteer

    // Send the scraped data as a JSON response
    res.json(animeData);
  } catch (error) {
    console.error('Error scraping data:', error);
    res.status(500).json({ error: 'Failed to scrape anime data' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
