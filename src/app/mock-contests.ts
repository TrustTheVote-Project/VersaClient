import { Contest } from  './contest';

export const CONTESTS: Contest[] = [
    {
        id: '1001',
        name: 'Gadget City Mayor',
        district: {
            id: 2,
            name: 'Orbit City'
        },
        type: 'candidate'
    },
    {
        id: '1002',
        name: 'County Sales Tax Measure',
        district: {
            id: 1,
            name: 'Gadget County'
        },
        type: 'ballot measure'
    }
];
