const homeController = require("./controllers/homeController");

const port = 3000,
    express = require('express'),
    app = express();

app.get("/items/:vegetable", homeController.sendReqParam);

app.listen(port, ()=> {
    console.log(`Server running on port: ${port}`);
});

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use("/", homeController.logRequestPaths);

app.post("/sign_up", homeController.userSignUpProcessor)

