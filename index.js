const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({ ok: true });
});
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server iniciado 👍👍👍"));
