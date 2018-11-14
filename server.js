import express from 'express';
import server from './schema';

const app = express();
const port = 4000 || process.env;

server.applyMiddleware({ app });

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});

export default app;
