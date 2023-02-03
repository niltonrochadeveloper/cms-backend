import express from "express";
import { router } from "./app/router/homeRouter";

import * as dotenv from 'dotenv'
import cors from "cors";
import mysql from "mysql"
dotenv.config()

export class App{
  public server: express.Application;

  constructor(){
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware(): void {
    this.server.use(express.json());
    this.server.use(cors());
  }

  private router(){
    this.server.use(router);
  }
}