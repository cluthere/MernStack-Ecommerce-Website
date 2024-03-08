import express from "express";
import cors from "cors";
import cookieParser from  'cookie-parser';
import { Router } from "express";
import bodyParser from "body-parser";
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// routers 




export default app;