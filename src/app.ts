import express from 'express';
import loginRouter from './routers/login.routes';
import ordersRouter from './routers/orders.routes';
import productRouter from './routers/products.routes';
import userRouter from './routers/users.routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/orders', ordersRouter);

export default app;
