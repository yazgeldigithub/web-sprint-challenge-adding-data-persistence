const checkNewProjBody = (req, res, next) => {
    if (!req.body.project_name) {
        next({
            status: 400,
            message: 'Project name is required'
        })
    } else {
        next()
    }
}

module.exports = {checkNewProjBody}