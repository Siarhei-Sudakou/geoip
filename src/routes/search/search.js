
const search = {
    render: (req, res) => {
        res.render('pages/search', {
            title: req.params.ip,

        });
    }
};

export default search;