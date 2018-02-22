var express = require("express");
var mongojs = require('mongojs');
var config = require('../config');
var db = mongojs(config.database_mlab, ['event']);

var router = express.Router();

router.use("/", (req, res) => {
  res.sendFile(__dirname, "/create-event.ejs");
})

// get all events
router.get("/event", function(req, res, next) {
    //res.send("EVENTS API");
    db.event.find( (err, data) => {
        if(err)
            res.send(err);

        res.json(data);
    })
});

// get one event by id
router.get("/event/:id", function(req, res, next) {
    db.event.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, data){
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

// add an event
router.post("/addEvent", function(req, res, next) {
    /*var e = req.body;

    if (!e.IsActive) {
        e.IsActive = true;
    }

    if ((!e.Event_ID) || (!e.Event_To_Time) || (!e.Event_From_Time) || (!e.Activity_Type) )  {
        res.status(400);
        res.json(
            {"error": "Bad data, could not be inserted into the database."}
        )
    } else {
        db.event.save(c, function(err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        })
    }
    */
    var eventData = new User(req.body);
    eventData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
});

// delete an event
router.delete("/event/:id", function(req, res, next) {
    db.event.remove({_id: mongojs.ObjectId(req.params.id)},function(err, data){
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

// edit an event
router.put("/event/:id", function(req, res, next) {
    var e = req.body;
    var e2 = {};

    if (e.Event_ID) {
        e2.Event_ID = e.Event_ID;
    }

    if (e.Event_To_Time) {
        e2.Event_To_Time = e.Event_To_Time;
    }

    if (e.Event_From_Time) {
        e2.Event_From_Time = e.Event_From_Time;
    }

    if (e.Activity_Type) {
        (e2.Activity_Type) = (e.Activity_Type);
    }

    if (e.IsActive) {
        e2.IsActive = e.IsActive;
    }

    if (!c2) {
        res.status(400);
        res.json(
            {"error": "Bad Data"}
        )
    } else {
        db.event.update({_id: mongojs.ObjectId(req.params.id)}, e2,{},function(err, data){
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
});



module.exports = router;
