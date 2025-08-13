import express from "express";
import { 
  getTransactionsByUserId, 
  createTransaction, 
  deleteTransaction, 
  getSummary 
} from "../controllers/transactionsController.js";

const router = express.Router();

router.get("/summary/:userId", getSummary);
router.get("/:userId", getTransactionsByUserId);
router.post("/", createTransaction);
router.delete("/:id", deleteTransaction);

export default router;