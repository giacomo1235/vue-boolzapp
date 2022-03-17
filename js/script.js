const app = new Vue({
    el: '.main',
    data: {
        show: false,
        activeIndex: 0,
        sent1:{
            text: '',
            sent: true,
            date: '10/20/2022'
        } ,
        arrContacts: [
            {
                name: 'Michele',
                image: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        text: 'ciao doc',
                        sent: true,
                        date: '2020-01-10T15:30:55'
                    },
                    {
                        text: 'ciao maestro',
                        sent: false,
                        date: '2020-01-10T15:30:55'
                    },
                    {
                        text: 'ciao capo',
                        sent: true,
                        date: '2020-01-10T15:30:55'
                    },

                ]
            },
            {
                name: 'Fabio',
                image: 'img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        text: 'ciao bella',
                        sent: false,
                        date: '2020-01-10T15:30:55'
                    },
                    {
                        text: 'ciao mitico',
                        sent: true,
                        date: '2020-01-10T15:30:55'
                    },
                    {
                        text: 'ciao bellezza',
                        sent: true,
                        date: '2020-01-10T15:30:55'
                    },
                    {
                        text: 'ciao capo',
                        sent: true,
                        date: '2020-01-10T15:30:55'
                    },

                ]
            },
            {
                name: 'Samuele',
                image: 'img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        text: 'ciao capo',
                        sent: true,
                        date: '2020-01-10T15:30:55'
                    },
                    {
                        text: 'ciao doc',
                        sent: true,
                        date: '2020-01-10T15:30:55'
                    },
                ]
            },
            {
                name: 'Alessandro B.',
                image: 'img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        text: 'ciao capo',
                        sent: true,
                        date: '2020-01-10T15:30:55'
                    },
                    {
                        text: 'ciao doc',
                        sent: true,
                        date: '2020-01-10T15:30:55'
                    },
                ]
            },
            {
                name: 'Alessandro L.',
                image: 'img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        text: 'ciao capo',
                        sent: true,
                        date: '2020-01-10T15:30:55'
                    },
                    {
                        text: 'ciao doc',
                        sent: true,
                        date: '2020-01-10T15:30:55'
                    },
                ]
            },
            {
                name: 'Claudia',
                image: 'img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        text: 'ciao capo',
                        sent: true,
                        date: '2020-01-10T15:30:55'
                    },
                    {
                        text: 'ciao doc',
                        sent: true,
                        date: '2020-01-10T15:30:55'
                    },
                ]
            },
            {
                name: 'Federico',
                image: 'img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        text: 'ciao capo',
                        sent: true,
                        date: '2020-01-10T15:30:55'
                    },
                    {
                        text: 'ciao doc',
                        sent: true,
                        date: '2020-01-10T15:30:55'
                    },
                ]
            },
            {
                name: 'Davide',
                image: 'img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        text: 'ciao capo',
                        sent: true,
                        date: '2020-01-10T15:30:55'
                    },
                    {
                        text: 'ciao doc',
                        sent: true,
                        date: '2020-01-10T15:30:55'
                    },
                ]
            },

        ]

    },
    methods: {
       addSent () {
            const sent1 = {...this.sent1};
            this.autoMessage(sent1);
            this.sent1.text = "";
            setTimeout(this.postReply,1000)
        },
            
        autoMessage(mex) {
            this.arrContacts[this.activeIndex].messages.push(mex);
            
        },
        postReply() {
            this.autoMessage(
                {text:'OK!',
                sent: false,
                date: '10/20/2022'}
            )
        },
        dontShow () {
            const show = this.show
            show = !show
            console.log(show)
        },
        getFormattedDate (date, format) {
            let formatStr= '';
            switch (format) {
                case 'italian':
                    formatStr = 'dd/MM/yyyy HH:mm:ss'
                    break;
                case 'american':
                    formatStr= 'MM/dd/yyyy HH:mm:ss'
                    break;    
            }

           return luxon.dateTime.fromISO(date).toFormat(formatStr)
        } 
    },
});