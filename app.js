const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products")

app.get("/", (req, res) => {
    res.send("Hi I am live");
})

// middleware or to set router
app.use("/api/products", products_routes);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Listening at ${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start();