import { Router } from "express";
import { body, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
const router = Router();
/**Products */
router.get("/products", (req, res) => {
  res.json({ message: "Hello" });
});

router.get("/product/:id", () => {});

router.put(
  "/product/:id",
  [body("name").isString()],
  handleInputErrors,
  (req, res) => {}
);

router.post(
  "/poduct",
  body("name").isArray(),
  handleInputErrors,
  (req, res) => {
    res.json({ messge: "say hi from abc" });
  }
);
router.delete("/product/:id", () => {});
/**Update */

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  body("version").optional(),
  () => {}
);
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  () => {}
);

router.delete("/update:id");

router.get("/updatepoints", () => {});
router.get("/updatepoints/:id", () => {});
router.put(
  "/updatepoints/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  (req, res) => {}
);
router.post(
  "/updatepoints",
  body("name").exists(),
  body("description").exists(),
   () => {}
);
router.delete("/updatepoints/:id", () => {});

export default router;
