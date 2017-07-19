import Maxmind from './../../libs/maxmind'

const api = {
    single: (req, res) => {
        res.json(Maxmind.all(req.params.ip));
    },
    group: (req, res) => {
        let result = [];
        req.body.ip.some((ip)=>{
            result[ip] = Maxmind.all(ip);
        });
        console.log(result);
        res.json(result);
    }
};

export default api;