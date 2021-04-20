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
        type: 'ballot measure',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium lectus quam id leo in vitae turpis massa sed. Amet nisl purus in mollis.',
        pro_statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        con_statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa enim nec dui nunc mattis enim ut.'
    }   
];
