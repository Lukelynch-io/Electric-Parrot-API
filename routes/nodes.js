import express from 'express';
import pg from 'pg';
const router = express.Router();

const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
});

router.get("/", async (req, res) => {
    pool.query("SELECT NOW()", (err, res) => {
        console.log(err || res.rows);
    })
    res.json({
        result: "success"
    });
})

router.post("/newreport", (req, res) => {
    res.status(200).send();
})

export default router;