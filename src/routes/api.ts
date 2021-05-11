import express from 'express';
import {assignments,displayAssignments} from "../models/assignment-db"

const routes = express.Router();

routes.get("api/assignments", (req,res) =>{
    res.json(displayAssignments());
    res.status(200)
})