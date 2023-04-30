import express from 'express';
import productRouter from './routes/product.router';
import userRouter from './routes/user.router';
import orderRouter from './routes/order.router';
import loginRouter from './routes/login.router';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

export default app;
