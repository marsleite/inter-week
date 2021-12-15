import { Request, Response } from "express";

export class UserController {

  async signIn(req: Request, res: Response) {
    return res.json({
      message: "Entrando com o usuaário",
    });
  }

  async signUp(req: Request, res: Response) {
    return res.json({
      message: "Cadastrando o usuário",
    });
  }
}