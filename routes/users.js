const { Router } = require("express");
const router = Router();
const db = require("../database/db");

router.get("/", async (req, res) => {
    try {
        const { rows } = await db.query("SELECT * FROM users");
        console.log(rows);
        res.json({ ok: true });
    } catch (error) {
        console.log(error);
        res.json({ ok: false });
    }
});

module.exports = router;
