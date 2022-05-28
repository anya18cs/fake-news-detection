const index = (req, res) => {
    res.send('/api was hit');
}

const pushFormDetails = (req, res, next ) => {
    var obj = {
        newsId: req.body.formDetails || "The reponse from web came out Empty"
    }
    res.status(200).json(obj)
}


module.exports = {
    index,
    pushFormDetails
}