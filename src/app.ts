import express from 'express';
import productRouter from './routes/product.router';
import userRouter from './routes/user.router';
import orderRouter from './routes/order.router';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
