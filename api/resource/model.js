// build your `Resource` model here
const db = require('../../data/dbConfig')

function getResources() {
    return db('resources')
}

function getResourceById(resource_id) {
    return db('resources')
        .where({ resource_id })
        .first()
}

async function createResource(newResource) {
    const [id] = await db('resources').insert(newResource)  
    return getResourceById(id)
}

function getResourceByName(resource_name) {
    return db('resources')
        .where({ resource_name })
        .first()
}

module.exports = {
    getResources,
    createResource,
    getResourceById,
    getResourceByName
}