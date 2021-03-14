import Express from 'express';
const app = new Express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users/:userId', (req, res) => {
    const { userId } = req.params;
    res.send(`userId: ${userId}`);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
