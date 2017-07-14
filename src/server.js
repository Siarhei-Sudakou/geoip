import express from 'express'
import helmet from 'helmet'
import compression from 'compression'
import dotenv from 'dotenv'
import routes from './routes'

dotenv.config();

const app = express();
app.use(helmet());
app.use(compression());
app.disable('x-powered-by');
app.use(express.static('public'));
app.set('views', __dirname + './../views');
app.set('view engine', 'jade');
app.use('/', routes);

/*app.get('/', (req, res) => {
    res.send('Hello World!');
});*/

app.listen(process.env.port || 3000, () => {
    if (process.env.NODE_ENV === 'development')
    {
        console.log(`Example app listening on port ${process.env.port || 3000}!`);
    }
});