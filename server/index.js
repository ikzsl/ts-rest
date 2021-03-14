import express from 'express';

const app = express();
const PORT = 5000;

app.use(express.json({ extended: true }));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));