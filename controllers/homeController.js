exports.sendReqParam = (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
};

exports.logRequestPaths = (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST successful");
};


exports.userSignUpProcessor = (req, res) => {
    console.log(req.params);
    res.send(`Thank you for signing with us!`)
};