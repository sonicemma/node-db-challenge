const express = require('express');

const Projects = require('./projectModel');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        if (projects.length > 0) {
            res.status(201).json(projects);
        } else {
            res.status(404).json({message: 'No projects found'})
        }
    })
    .catch(err => {
        console.log(err.message)
    })
})

module.exports = router;