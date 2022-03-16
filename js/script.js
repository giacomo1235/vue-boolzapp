const app = new Vue ({
    el:'.main',
    data:{
        activeIndex: 0,
       // arrRecived:[],
        sent:'',
        arrSent:[],
        arrContacts: [
            {
                name: 'Michele',
                image:'img/avatar_1.jpg',
                messages: [
                    {
                        text: 'ciao doc',
                        sent: true,
                        date: '10/20/2022'
                    },
                    {
                        text: 'ciao maestro',
                        sent: false,
                        date: '10/11/2022'
                    },
                    {
                        text: 'ciao capo',
                        sent: true,
                        date: '10/40/2022'
                    },

                ]
            },
            {
                name: 'Fabio',
                image:'img/avatar_2.jpg',
                messages: [
                    {
                        text: 'ciao bella',
                        sent: false,
                        date: '10/20/2022'
                    },
                    {
                        text: 'ciao mitico',
                        sent: true,
                        date: '10/11/2022'
                    },
                    {
                        text: 'ciao bellezza',
                        sent: true,
                        date: '10/40/2022'
                    },

                ]
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