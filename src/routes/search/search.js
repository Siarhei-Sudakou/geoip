import Maxmind from '../../libs/maxmind'

const search = {
    render: (req, res) => {
        let ipInfo = Maxmind.all(req.params.ip);
        console.log(ipInfo.city);
        res.render('pages/search', {
            title: req.params.ip,
            ipInfo: ipInfo
        });
    }
};

export default search;