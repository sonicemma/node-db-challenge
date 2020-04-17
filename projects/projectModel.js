const db = require('../data/db-config');

module.exports = {
    getProjects,
    getResources,
    findById,
    findTasks,
    addTasks,
    addProject,
    addResources
}

function getProjects() {
    return db('projects');
}

function getResources() {
    return db('resources');
}

function findById(id) {
    return db
        .select('*')
        .from('projects')
        .where({id})
        .first();
}

function findTasks(projectId){
    return db('projects')
        .select(
            'projects.projects_name',
            'tasks.nates',
            'tasks.tasks_description',
            'tasks.tasks_completed'
        )
        .join('tasks', 'tasks.project_id', 'projects.id')
        .where('projects.id', projectId)
}

function addTasks(task){
    return db('tasks').insert(task)
}

function addProject(project){
    return db('projects').insert(project)
}

function addResources(resource){
    return db('resources').insert(resource)
}