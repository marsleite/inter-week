import { Router } from "express";

const userRoutes = Router();

userRoutes.post("/signin", (req, res) => {
  res.json({
    message: "Entrando com o usuaário",
  });
});

userRoutes.post("/signup", (req, res) => {
  res.json({
    message: "Cadastrando o usuário",
  });
});

export default userRoutes;