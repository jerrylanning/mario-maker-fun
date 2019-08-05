const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const stageRoutes = express.Router();
const PORT = 4000;

let Stage = require('./src/models/stage.model');

// Different stuff we are using
app.use(cors());
app.use(bodyParser.json());

//Mongoose Connection
mongoose.connect('mongodb://127.0.0.1:27017/MarioMaker', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

stageRoutes.route('/').get(function (req, res) {
    Stage.find(function (err, stage) {
        if(err) {
            console.log(err);
        } else {
            res.json(stage)
        }
    })
});

stageRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Stage.findById(id, function (err, stage) {
        res.json(stage);
    });
});

stageRoutes.route('/add').post(function (req, res) {
    let stage = new Stage(req.body);
    stage.save()
        .then(stage => {
            res.status(200).json({'stage': 'stage added successfully'});
        })
        .catch(err => {
            res.status(400).send('New stage was not added.');
        });
});

stageRoutes.route('/update/:id').post(function(req, res) {
    Stage.findById(req.params.id, function (err, stage) {
        if(!stage)
            res.status(404).send("data is not found")
        else
            stage.stage_description = req.body.stage_description;
            stage.stage_tag = req.body.stage_tag;
            stage.stage_id = req.body.stage_id;
            stage.stage_completed = req.body.stage_completed
            stage.save().then(stage => {
                res.json("Stage updated!");
            }).catch(err => {
                res.send(400).send("Update not possible");
            });
    });
});

app.use('/stage', stageRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

