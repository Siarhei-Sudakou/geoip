import Maxmind from './../../libs/maxmind'

const api = {
    single: (req, res) => {
        res.json(Maxmind.all(req.params.ip));
    },
    group: async (req, res) => {
        let result = [];
        let ips = req.body.ip;
        for(let ip in ips)
        {
            result[ips[ip]] = await Maxmind.all(ips[ip]);
        }
        res.json(result);
    }
};

export default api;