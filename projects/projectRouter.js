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

router.get('/:id', (req, res) => {
    const {id} = req.params;

    Projects.findById(id)
        .then(projects => {
            if (projects) {
                res.status(201).json(projects)
            } else {
                res.status(404).json({message: 'No projects found'})
            }
        })
        .catch(err => {
            console.log(err.message)
        })
})

router.get('/:id/tasks', (req, res) => {
    const {id} = req.params;

    Projects.findTasks(id)
        .then(tasks => {
            if (tasks.length > 0) {
                res.status(201).json(tasks)
            } else {
                res.status(404).json({message: 'No tasks found'})
            }
        })
        .catch(err => {
            console.log(err.message)
        })
})

module.exports = router;