import express from 'express'
import helmet from 'helmet';
import routerUser from './routes/routerUser';
import routerLogin from './routes/routerLogin';

const app = express();

app.use(helmet());
app.use(express.json());

app.use('/user', routerUser);
app.use('/login', routerLogin);


export default app;