import maxmind from 'maxmind'

const cityLookup = maxmind.openSync(__dirname + './../../maxmind/GeoLite2-City.mmdb',
    {
        watchForUpdates: true,
        cache: {
            max: 10000,
            maxAge: 1000 * 60 * 60
        }
    }
);

const countryLookup = maxmind.openSync(__dirname + './../../maxmind/GeoLite2-Country.mmdb',
    {
        watchForUpdates: true,
        cache: {
            max: 10000,
            maxAge: 1000 * 60 * 60
        }
    }
);

const asnLookup = maxmind.openSync(__dirname + './../../maxmind/GeoLite2-ASN.mmdb',
    {
        watchForUpdates: true,
        cache: {
            max: 10000,
            maxAge: 1000 * 60 * 60
        }
    }
);

const Maxmind = {
    city: (ip) => {
        return cityLookup.get(ip);
    },
    country: (ip, callback) => {
        return countryLookup.get(ip);
    },
    asn: (ip) => {
        return asnLookup.get(ip);
    },
    all: async (ip) => {
        return await {
            'country': countryLookup.get(ip),
            'city': cityLookup.get(ip),
            'asn': asnLookup.get(ip),
        }
    },
    validateIp: (ip) => {
        return maxmind.validate(ip);
    },
    /*ipArray: async (ips) => {

    }*/
};

export default Maxmind;