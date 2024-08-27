import express from 'express';
const router = express.Router();

import Trade from "../controllers/trade";

router.get('/', Trade.openLongPosition);

export default router;