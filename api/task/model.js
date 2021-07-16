// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks() {
    let tasks = await db('tasks AS t')
        .select(
            'task_id',
            'task_notes', 
            'task_description', 
            'task_completed', 
            'project_name', 
            'project_description')
        .leftJoin('projects AS p', 
            't.project_id', 
            'p.project_id')
    tasks.map(task => {
        if (task.task_completed === 0) {
           return  task.task_completed = false 
        } else {
           return task.task_completed = true
        }
    })
  
    return tasks
}

async function getTaskById(task_id) {
    let task = await db('tasks AS t')
        .select(
            'task_id',
            'task_notes', 
            'task_description', 
            'task_completed', 
            'project_name', 
            'project_description')
        .leftJoin('projects AS p', 
            't.project_id', 
            'p.project_id')
        .where({ task_id })
        .first()
    
    if (task.task_completed === 0) {
        task.task_completed = false 
    } else {
        task.task_completed = true
    }
    return task
}

async function createTask(newTask) {
    const [id] = await db('tasks')
        .insert(newTask)
    return getTaskById(id)
}

module.exports = {
    getTasks,
    createTask
}