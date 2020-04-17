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

router.get('/:id/resources', (req, res) => {
    const {id} = req.params;

    Projects.getResources(id)
    .then(resources => {
        if (resources.length > 0) {
            res.status(201).json(resources)
        } else {
            res.status(400).json({message: 'No resources found'})
        }
    })
    .catch(err => {
        console.log(err.message)
    })
})

router.post('/', (req, res) => {
    const addNewProjects = req.body;

    Projects.addProject(addNewProjects)
        .then(projects => {
            if (addNewProjects.projects_name && addNewProjects.projects_description) {
                res.status(201).json(projects)
            } else {
                res.status(404),json({
                    message: 'Error adding project, no description or name provided'
                })
            }
        })
        .catch(err => {
            console.log(err.message)
        })
})

router.post('/:id/tasks', (req, res) => {
    const addNewTasks = req.body;

    Projects.addTasks(addNewTasks)
        .then(task => {
            res.status(201).json(task);
        })
})

router.post('/:id/resources', (req, res) => {
    const addNewResources = req.body;

    Projects.addResources(addNewResources)
        .then(resource => {
            res.status(201).json(resource);
        })
})

module.exports = router;