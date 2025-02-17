// controllers/newsController.js
const axios = require('axios');

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

exports.getTopHeadlines = async (req, res) => {
  try {
    const { page = 1, pageSize = 10 } = req.query;
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country: 'us',
        apiKey: NEWS_API_KEY,
        page,
        pageSize
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching top headlines:', error.message);
    res.status(500).json({ message: 'Error fetching top headlines' });
  }
};

exports.getNewsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const { page = 1, pageSize = 10 } = req.query;
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country: 'us',
        category,
        apiKey: NEWS_API_KEY,
        page,
        pageSize
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(`Error fetching news for category ${req.params.category}:`, error.message);
    res.status(500).json({ message: 'Error fetching news by category' });
  }
};

exports.searchNews = async (req, res) => {
  try {
    const { query, page = 1, pageSize = 10 } = req.query;
    if (!query) {
      return res.status(400).json({ message: 'Query parameter is required' });
    }
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        q: query,
        apiKey: NEWS_API_KEY,
        page,
        pageSize
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error searching news:', error.message);
    res.status(500).json({ message: 'Error searching news' });
  }
};
