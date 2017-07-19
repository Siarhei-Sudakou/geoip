import Maxmind from '../../libs/maxmind'

const search = {
    render: (req, res) => {
        let ipInfo = Maxmind.all(req.params.ip);
        res.render('pages/search', {
            title: req.params.ip,
            ipInfo: ipInfo,
            isIp: Maxmind.validateIp(req.params.ip)
        });
    }
};

export default search;