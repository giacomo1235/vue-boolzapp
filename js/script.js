const app = new Vue({
    el: '.main',
    data: {
        indexMessaggio: 0,
        searchString: '',
        activeIndex: 0,
        sent1:{
            text: '',
            sent: true,
            date: '10/20/2022',
            show: false
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
                        date: '2020-01-10T15:30:55',
                        show: false,
                    },
                    {
                        text: 'ciao maestro',
                        sent: false,
                        date: '2020-01-10T15:30:55',
                        show: false,
                    },
                    {
                        text: 'ciao capo',
                        sent: true,
                        date: '2020-01-10T15:30:55',
                        show: false,
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
                        date: '2020-01-10T15:30:55',
                        show: false,
                    },
                    {
                        text: 'ciao mitico',
                        sent: true,
                        date: '2020-01-10T15:30:55',
                        show: false,
                    },
                    {
                        text: 'ciao bellezza',
                        sent: true,
                        date: '2020-01-10T15:30:55',
                        show: false,
                    },
                    {
                        text: 'ciao capo',
                        sent: true,
                        date: '2020-01-10T15:30:55',
                        show: false,
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
                        date: '2020-01-10T15:30:55',
                        show: false,
                    },
                    {
                        text: 'ciao doc',
                        sent: true,
                        date: '2020-01-10T15:30:55',
                        show: false,
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
                        date: '2020-01-10T15:30:55',
                        show: false,
                    },
                    {
                        text: 'ciao doc',
                        sent: true,
                        date: '2020-01-10T15:30:55',
                        show: false,
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
                        date: '2020-01-10T15:30:55',
                        show: false,
                    },
                    {
                        text: 'ciao doc',
                        sent: true,
                        date: '2020-01-10T15:30:55',
                        show: false,
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
                        date: '2020-01-10T15:30:55',
                        show: false,
                    },
                    {
                        text: 'ciao doc',
                        sent: true,
                        date: '2020-01-10T15:30:55',
                        show: false,
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
                        date: '2020-01-10T15:30:55',
                        show: false,
                    },
                    {
                        text: 'ciao doc',
                        sent: true,
                        date: '2020-01-10T15:30:55',
                        show: false,
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
                        date: '2020-01-10T15:30:55',
                        show: false,
                    },
                    {
                        text: 'ciao doc',
                        sent: true,
                        date: '2020-01-10T15:30:55',
                        show: false,
                    },
                ]
            },

        ]

    },
    methods: {
       addSent () {
           if (this.arrContacts[this.activeIndex].newMessageContent != ''){
               const activeChat = this.arrContacts[this.activeIndex]
           const newMessage = {
               text:activeChat.newMessageContent,
               sent: true,
               date: '10/20/2022',
               show: false
            };
            activeChat.messages.push(newMessage);
            activeChat.newMessageContent = '';
            setTimeout(this.postReply,1000)
            } else {
                alert('scrivi qualcosa prima di premere!')
            }
        },
            
        autoMessage(mex) {
            this.arrContacts[this.activeIndex].messages.push(mex);
            
        },
        postReply() {
            this.autoMessage(
                {text:'OK!',
                sent: false,
                date: '10/20/2022',
                show: false,}
            )
        },
        dontShow (indexMessaggio) {
            this.arrContacts[this.activeIndex].messages[indexMessaggio].show = !this.arrContacts[this.activeIndex].messages[indexMessaggio].show;
            console.log(this.arrContacts[this.activeIndex].messages[indexMessaggio].show)

        },
        deleteMessage(indexMessaggio) {
            this.arrContacts[this.activeIndex].messages.splice(indexMessaggio,1)
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

           return luxon.DateTime.fromISO(date).toFormat(formatStr)
        } ,
        searchChat () {
            this.arrContacts.forEach(chat => {
                
                if (chat.name.toLowerCase().includes(this.searchString.toLowerCase())) {
                    chat.visible = true;
                } else {
                    chat.visible = false;

                }
                
            })
        }
    },
});/*  */