import express from 'express'
import helmet from 'helmet'
import compression from 'compression'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
app.use(helmet());
app.use(compression());
app.disable('x-powered-by');
app.use(express.static('public'));
console.log(__dirname);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.port || 3000, () => {
    console.log(`Example app listening on port ${process.env.port || 3000}!`);
});