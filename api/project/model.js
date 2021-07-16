// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects() {
    let projects = await db('projects')
        .select(
            'project_name',
            'project_description',
            'project_completed'
        )

    projects.map(proj => {
        if (proj.project_completed === 0) {
            return proj.project_completed = false
        } else {
            return proj.project_completed = true
        }
    })  

    return projects
}

async function getProjectById(project_id) {
    const proj = await db('projects')
        .where({ project_id })
        .first()

    if (proj.project_completed === 0) {
        proj.project_completed = false
    } else {
        proj.project_completed = true
    }

    return proj
}

async function createProject(newProject) {
    const [id] = await db('projects')
        .insert(newProject)
    
    return getProjectById(id)
}

module.exports = {
    getProjects,
    createProject
}