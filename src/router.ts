import { Router } from "express";
const router = Router();
/**Products */
router.get("/products", (req, res) => {
  res.json({ message: "Hello"});
});

router.get("/product/:id", () => {});
router.put("/product/:id", () => {});
router.post("/poduct", () => {});
router.delete("/product/:id", () => {});
/**Update */

router.get("/updatepoints", () => {});
router.get("/updatepoints/:id", () => {});
router.put("/updatepoints/:id", () => {});
router.post("/updatepoints", () => {});
router.delete("/updatepoints/:id", () => {});

export default router;
