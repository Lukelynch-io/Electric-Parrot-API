import './config.js'
import express from 'express';

const app = express();
const port = process.env.PORT || 8080;

//Routes
import nodeRoutes from './routes/nodes.js';

app.use('/node', nodeRoutes);

app.get('/', (req, res) => {
    res.json({
        test: "hello World"
    });
})


app.listen(port, function () {
    console.log(`Listening on ${port}.`);
});