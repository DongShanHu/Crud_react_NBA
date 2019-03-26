const express = require("express");

const businessRoutes = express.Router();
// Require Business model in our routes module
let Business = require("./business.model");

//Define store route

businessRoutes.route("/add").post(function(req, res) {
  let business = new Business(req.body);
  business
    .save()
    .then(business => {
      res.status(200).json({ business: "business in added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

//Defined get data(index or listing) route

businessRoutes.route("/edit/:id").post(function(req, res) {
  Business.findById(req.param.id, function(err, business) {
    if (!business) res.status(404).send("data is not found");
    else {
      business.person_name = req.body.person_name;
      business.business_name = req.body.business_name;
      business.business_gst_number = req.body.business_gst_number;

      business
        .save()
        .then(business => {
          res.json("Update complete");
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});
// Defined delete | remove | destroy route
businessRoutes.route("/delete/:id").get(function(req, res) {
  Business.findByIdAndRemove({ _id: req.params.id }, function(err, business) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = businessRoutes;
