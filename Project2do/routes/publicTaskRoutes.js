// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the todos
    app.get("/api/project2do/public/tasks", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.Tasks.findAll({}).then(function(dbTasks) {
            // We have access to the todos as an argument inside of the callback function
            res.json(dbTasks);
        });
    });

    // POST route for saving a new todo
    app.post("/api/project2do/public/tasks", function(req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property
        db.Tasks.create({
            text: req.body.text,
            complete: req.body.complete
        }).then(function(dbTasks) {
            // We have access to the new todo as an argument inside of the callback function
            res.json(dbTasks);
        });
    });

    // DELETE route for deleting todos. We can get the id of the todo to be deleted from
    // req.params.id
    app.delete("/api/project2do/public/tasks/:id", function(req, res) {
        // We just have to specify which todo we want to destroy with "where"
        db.Tasks.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbTasks) {
            res.json(dbTasks);
        });

    });

    // PUT route for updating todos. We can get the updated todo data from req.body
    app.put("/api/project2do/public/tasks", function(req, res) {
        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        db.Tasks.update({
            text: req.body.text,
            complete: req.body.complete
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbTasks) {
            res.json(dbTasks);
        });
    });
};