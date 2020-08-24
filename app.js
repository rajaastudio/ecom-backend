import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import router from './src/routes';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', router)
// app.get('/', (req, res) => {
// 	res.send("Hello")
// });
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ecom", 
	{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false
  });

app.listen(port, () => console.log(`Serven on ${port}`));

