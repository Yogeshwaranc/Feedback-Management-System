// backend/server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5001; // Changed port

app.use(cors());
app.use(bodyParser.json());

let feedbacks = [
  { id: 1, user: 'John Do', comment: 'Great service!', rating: 5 },
  { id: 2, user: 'Jane Smith', comment: 'Could be improved.', rating: 3 },
  { id: 3, user: 'Alice Johnson', comment: 'Very satisfied with the product.', rating: 4 },
  { id: 4, user: 'Bob Brown', comment: 'Not what I expected.', rating: 2 },
  { id: 5, user: 'Charlie Davis', comment: 'Exceptional quality and support.', rating: 5 }
];
let id = 6; // Start IDs from 6 since we have 5 default feedbacks

app.get('/api/feedbacks', (req, res) => {
  res.json(feedbacks);
});

app.post('/api/feedbacks', (req, res) => {
  const feedback = { id: id++, ...req.body };
  feedbacks.push(feedback);
  res.json(feedback);
});

app.put('/api/feedbacks/:id', (req, res) => {
  const feedbackId = parseInt(req.params.id);
  const feedbackIndex = feedbacks.findIndex((feedback) => feedback.id === feedbackId);
  if (feedbackIndex >= 0) {
    feedbacks[feedbackIndex] = { ...feedbacks[feedbackIndex], ...req.body };
    res.json(feedbacks[feedbackIndex]);
  } else {
    res.status(404).send('Feedback not found');
  }
});

app.delete('/api/feedbacks/:id', (req, res) => {
  const feedbackId = parseInt(req.params.id);
  feedbacks = feedbacks.filter((feedback) => feedback.id !== feedbackId);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
