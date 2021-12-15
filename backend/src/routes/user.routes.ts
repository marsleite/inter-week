import { Router } from "express";

const userRoutes = Router();

userRoutes.post("/signin", (req, res) => {
  res.json({
    message: "Vamos que Vamos"
  });
});

export default userRoutes;