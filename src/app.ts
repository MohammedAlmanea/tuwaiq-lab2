import express, { Request, Response } from 'express';

const app = express();
const port = 5500;

app.use(
  (req, res, next) => {
    console.log('middleware1');
    next();
  },
  (req, res, next) => {
    console.log('middleware2');
    next();
  }
);

const middle = (req: Request, res: Response, next: Function): void => {
  console.log('this is from middleware3');
  next();
};

// app.use(middle)
app.get('/hey', middle, (req: Request, res: Response) => {
  res.send('Hey from Express!');
});

app.get('/', (req, res) => {
  res.redirect('/hey');
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
