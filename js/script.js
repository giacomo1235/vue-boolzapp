const app = new Vue({
    el: '.main',
    data: {
        searchString: '',
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
                newMessageContent: '',
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
                newMessageContent: '',
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
                newMessageContent: '',
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
                newMessageContent: '',
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
                newMessageContent: '',
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
                newMessageContent: '',
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
                newMessageContent: '',
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
                newMessageContent: '',
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
           const activeChat = this.arrContacts[this.activeIndex]
           const newMessage = {
               text:activeChat.newMessageContent,
               sent: true,
               date: '10/20/2022'
            };
            activeChat.messages.push(newMessage);
            activeChat.newMessageContent = '';
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
        dontShow (activeIndex) {
            const show = false;
           this.show = !this.show
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
        } ,
        searchChat () {
            this.arrContacts.forEach(chat => {
                if (chat.name.includes(this.searchString)) {
                    chat.visible = true;
                } else {
                    chat.visible = false;

                }
                
            })
        }
    },
});