import { type } from "os";
import prisma from "../db";
import { comaparePassword, createJWT, hashPassword } from "../modules/auth";


export const createNewUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password),
    }
  });
  const token = createJWT(user);
  res.json({ token });
};

export const signIn = async (req, res) => {
  let user = await prisma.user.findUnique({
    where: { username: req.body.username },
  });
  console.log(user)
  const isValid = await comaparePassword(req.body.password, user.password);
  if (!isValid) {
    res.status(401);
    res.json({ message: "nope" });
    return
  }
  const token = createJWT(user)

  res.json({token})
};
