express = require("express"),
    app = express();
app.use(express.urlencoded())
app.post("/form", function (req, res) {
    var str = req.body.str.split('').reverse().join('');
    res.end(str);
});

app.listen(process.argv[2]);
