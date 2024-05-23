// frontend/src/components/AddFeedback.js

import React, { useState } from 'react';

function AddFeedback({ addFeedback }) {
  const [feedback, setFeedback] = useState({ user: '', comment: '', rating: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFeedback(feedback);
    setFeedback({ user: '', comment: '', rating: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Feedback</h2>
      <input name="user" placeholder="User Name" value={feedback.user} onChange={handleChange} required />
      <textarea name="comment" placeholder="Comment" value={feedback.comment} onChange={handleChange} required />
      <input
        name="rating"
        type="number"
        placeholder="Rating (1-5)"
        value={feedback.rating}
        onChange={handleChange}
        min="1"
        max="5"
        required
      />
      <button type="submit">Add Feedback</button>
    </form>
  );
}

export default AddFeedback;
