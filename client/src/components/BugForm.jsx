import { useState } from 'react';

export default function BugForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return alert("All fields required");
    onSubmit({ title, description, status: 'open' });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Bug title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Bug description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Report Bug</button>
    </form>
  );
}
