import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Content API working 🚀"
  });
});

export default router;
