import Maxmind from './../../libs/maxmind'

const geoip = {
    city: (req, res) => {
        res.json( Maxmind.city(req.params.ip));
    },
    country: (req, res) => {
        res.json( Maxmind.country(req.params.ip));
    },
    asn: (req, res) => {
        res.json( Maxmind.asn(req.params.ip));
    },
    all: (req, res) => {
        res.json( Maxmind.all(req.params.ip));
    }
};


export default geoip;