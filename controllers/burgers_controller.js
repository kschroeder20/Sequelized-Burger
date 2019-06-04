var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Customer.findAll({
            // passes in all associated models
            include: [db.Burger],
            order: [[db.Burger, 'burger_name', 'ASC']]
        }).then(function (customers) {
            res.render("index", {
                customers: customers
            });
        }).catch(err => {
            console.log(err);
        });
    });

    //POST route to create/add a customer.
    app.post("/api/customer", function (req, res) {
        db.Customer.create(req.body).then(() => res.redirect('/')).catch(err => {
            console.log(err);
        });
    });

    //POST route to create/add a burger.
    app.post("/api/burger/:id", function (req, res) {
        console.log("HERE");
        console.log(req.params);
        db.Burger.create({
            ...req.body,
            devoured: true,
            CustomerId: req.params.id
        }).then(function (result) {
            res.redirect('/');
        }).
        catch(err => {
            console.log(err);
        });
    });
};