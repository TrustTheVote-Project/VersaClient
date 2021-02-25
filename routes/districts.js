const express = require('express');
const router = express.Router();

const orbitCity = {
    external_id: "1",
    name: 'Orbit City',
    type: "city",
    contact_information: '555-555-5555',
    is_district: true,
    is_mail_only: true,
    elections: [{ external_id: 1, name: "Mayor Special Election" }]
};

const districts = [ orbitCity, 
    {
        external_id: "2", 
        name: 'Gadget County', 
        type: 'county',
        contact_information: '555-555-5555',
        is_district: true, 
        is_mail_only: true,
        elections: []
    }
];

router.get('/', (req, res) => {
    res.render('district/index', { districts: districts });
});

router.get('/new', (req, res) => {
    res.render('district/edit');
});

router.get('/:external_id', (req, res) => {
    district = districts.find((d) => d.external_id === req.params.external_id);
    res.render('district/show', { district });
});

module.exports = router