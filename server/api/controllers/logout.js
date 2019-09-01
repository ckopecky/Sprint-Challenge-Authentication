const logout = (req, res) => {
    if(req.session) {
        req.session.destroy(err => {
            if(err) {
                res.send({Error: err.message});
            } else {
                res.send({Message: "You have successfully logged out! Thanks for stopping by."})
            }
        })
    } else {
        res.end();
    }
}

module.exports = {
    logout
};