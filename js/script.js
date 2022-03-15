const app = new Vue ({
    el:'.main',
    data:{
        arrRecived:[],
        sent:'',
        arrSent:[],
        arrContacts: [
            {
                name: 'Michele',
                image:'img/avatar_1.jpg',
            },
            {
                name: 'Fabio',
                image:'img/avatar_2.jpg',
            },
            {
                name: 'Samuele',
                image:'img/avatar_3.jpg',
            },
            {
                name: 'Alessandro B.',
                image:'img/avatar_4.jpg',
            },
            {
                name: 'Alessandro L.',
                image:'img/avatar_5.jpg',
            },
            {
                name: 'Claudia',
                image:'img/avatar_6.jpg',
            },
            {
                name: 'Federico',
                image:'img/avatar_7.jpg',
            },
            {
                name: 'Davide',
                image:'img/avatar_8.jpg',
            },
            
        ]

    },
    methods:{
            addSent() {
            this.arrSent.push(this.sent);
            this.sent = '';
           // setTimeout(this.arrRecived.push('stupido!'),2000)
        }

    },
});