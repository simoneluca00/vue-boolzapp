var app = new Vue(
{

    el:'#root',

    data: {

        myAccount : {
            name : 'Simone',
            avatar: '_io',
        },

        
        // N.B. contacts.id = index del singolo oggetto + 1
        contacts: [
            {
                id: 1,
                name: 'Michele',
                avatar: '_1',
                visible: true,
                currentChat : true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                id: 2,
                name: 'Sofia',
                avatar: '_2',
                visible: true,
                currentChat : false,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                id: 3,
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                currentChat : false,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                id: 4,
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                currentChat : false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                id: 5,
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                currentChat : false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                id: 6,
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                currentChat : false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                id: 7,
                name: 'Federico',
                avatar: '_7',
                visible: true,
                currentChat : false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                id: 8,
                name: 'Davide',
                avatar: '_8',
                visible: true,
                currentChat : false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            },
            
        ],

        currentIndex: 0,

        newMessageText : '',

        searchContact: '',

        contactsName: [],
        
    },

    created(){

    },

    methods: {
        selectChat: function(element,identification){
            
            // toggle per la chat aperta di lato (chat attuale)
            // TODO come impostare per avere un solo elemento TRUE (quello cliccato) e tutti gli altri FALSE?
            element.currentChat = !element.currentChat;
            
            // avere sul lato destro i messaggi della chat sulla quale si clicca 
            this.currentIndex = identification - 1;
        },

        sendNewMessage: function(){
            let currentDate = dayjs().format('DD/MM/YYYY');
            let currentTime = dayjs().format('HH:mm:ss')
            console.log(currentDate, currentTime);

            let newObjectMessage = {
                date: `${currentDate} ${currentTime}`,
                message: this.newMessageText,
                status: 'sent'
            }

            let singleArrayMessage = this.contacts[this.currentIndex].messages;

            if (newObjectMessage.message !== '') {
                singleArrayMessage.push(newObjectMessage);
            }

            this.newMessageText = '';
            
            setTimeout(function(){
                let currentDate2 = dayjs().format('DD/MM/YYYY');
                let currentTime2 = dayjs().format('HH:mm:ss')

                let newObjectMessageReceived = {
                    date: `${currentDate2} ${currentTime2}`,
                    message: 'Povero gabbiano',
                    status: 'received'
                }
    
                singleArrayMessage.push(newObjectMessageReceived);
            },2000);

        },

    },

    computed: {
        
        filteredList(){
            return this.contacts.filter(
                contact => {
                    return contact.name.toLowerCase().includes(this.searchContact.toLowerCase())
                }
            )
        }
    }
}
)