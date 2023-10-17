import { validationResult } from "express-validator";
export const handleInputErrors = (res, req, next) => {
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ errors: errors.array() });
  } else {
    next();
  }
};
