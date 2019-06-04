// var express = require("express");

// var router = express.Router();

// // Import the model (burger.js) to use its database functions.
// var burger = require("../models/burger");

// // Create all our routes and set up logic within those routes where required.
// router.get('/', function (req, res) {
//     burger.all(function (data) {
//         var hbsObject = {
//             burgers: data
//         };
//         console.log(hbsObject);
//         res.render('index', hbsObject);
//     });
// });

// //POST route to create/add a burger.
// router.post("/api/burgers", function(req, res) {
//     console.log(req.body.burger_name)
//     burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
//         console.log(result)
//         // Send back the ID of the new quote
//         res.json({
//             id: result.insertId
//         });
//     });
// });

// router.put("/api/burgers/:id", function (req, res) {
//     var condition = `id = ${req.params.id}`;
//     console.log(req.body.devoured)
//     console.log(condition);
// // CHANGE THIS CODE
//     burger.update({
//         devoured: req.body.devoured
//     }, condition,
//         function (result) {
//             if (result.changedRows == 0) {
//                 // If no rows were changed, then the ID must not exist, so 404
//                 return res.status(404).end();
//             } else {
//                 res.status(200).end();
//             }
//         });
// });

// // Export routes for server.js to use.
// module.exports = router;

var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Customer.findAll({
            // passes in all associated models
            include: [db.Burger]
        }).then(function (customers) {
           
            //console.log(result);
            res.render("index", {
                customers: customers
            });
        });
    });

    //POST route to create/add a customer.
    app.post("/api/customer", function (req, res) {
        db.Customer.create(req.body).then(() => res.redirect('/'));
        // var customer = req.body;
        // db.Customer.create({
        //     name: customer.name
        // }).then(function (result) {
        //     res.json({
        //         id: result.insertId
        //     });
        // });
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
        });
    });

    // app.put("/api/burgers/:id", function (req, res) {
    //     var newBurger = {
    //         devoured: true
    //     };

    //     db.Burger.update(newBurger, {
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function (result) {
    //         console.log(`Updated ${req.body.burger_name}`);
    //         if (result.changedRows == 0) {
    //             // If no rows were changed, then the ID must not exist, so 404
    //             return res.status(404).end();
    //         } else {
    //             res.status(200).end();
    //         }
    //     });
    // });
};