import express from 'express';
const router = express.Router();

router.post("/newreport", (req, res) => {
    res.json({
        result: "success"
    });
})

export default router;