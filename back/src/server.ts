import app from './app';
import 'express-async-errors';
import 'dotenv/config'

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`);
});