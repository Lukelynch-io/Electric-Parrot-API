import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        result: "success"
    });
})

router.post("/newreport", (req, res) => {
    res.status(200).send();
})

export default router;