import { Request, Response } from "express";

class HomeController{

  public home(req:Request, res:Response) {
    return res.json({
      response: 'Hello World'
    });
  }
  
}

export const homeController = new HomeController();