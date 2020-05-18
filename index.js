//console.log("Hello world!");// theo cai da hoc phai nhung vao html-->frontend
// Runtime Environment -> command line
/*
Để sử dụng một package
1. Import package
2. Create Server
3. Sử dụng các request & response để trao đổi dữ liệu
*/
var express = require("express");

var app = express();
const PORT = process.env.PORT||3000;
app.listen(PORT,function(){
    console.log("Server is running..");
});

//static file
app.use(express.static('public'));// them dong nay
// set view engine
app.set("view engine","ejs");

var fs = require("fs");

app.get("/",function (req,res) { // routing - Routes
    res.send("Hello world");
});

app.get("/LeThanhDo",function (req,res) {
    res.render("LeThanhDo");
});

app.get("/TrinhNgocVan",function (req,res) {
    res.render("TrinhNgocVan");
});

app.get("/NguyenThanhBinh",function (req,res) {
    var coffees = fs.readFileSync("data/coffees.json");
    var cf = JSON.parse(coffees);

    res.render('NguyenThanhBinh',{
        cf : cf
    });
})
;
app.get("/NguyenAnhDuc",function (req,res) {
    res.render("NguyenAnhDuc");
});
app.get("/demo",function (req,res) {
    res.render("demo");
});