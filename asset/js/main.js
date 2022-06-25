var app = new Vue({

    el: '#root',

    data: {

        myAccount: {
            name: 'Simone Luca',
            avatar: '_io',
        },


        // N.B. contacts.id = index del singolo oggetto + 1
        contacts: [{
                id: 1,
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: 'Wed, 06 Apr 3:30 PM',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        showDropDown: false,
                    },
                    {
                        date: 'Wed, 06 Apr 3:50 PM',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        showDropDown: false,
                    },
                    {
                        date: 'Wed, 06 Apr 4:15 PM',
                        message: 'Tutto fatto!',
                        status: 'received',
                        showDropDown: false,
                    }
                ],
            },
            {
                id: 2,
                name: 'Sofia',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: 'Tue, 05 Apr 4:30 PM',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        showDropDown: false,
                    },
                    {
                        date: 'Tue, 05 Apr 4:30 PM',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        showDropDown: false,
                    },
                    {
                        date: 'Tue, 05 Apr 4:35 PM',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        showDropDown: false,
                    }
                ],
            },
            {
                id: 3,
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: 'Mon, 04 Apr 10:10 AM',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        showDropDown: false,
                    },
                    {
                        date: 'Mon, 04 Apr 10:20 AM',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        showDropDown: false,
                    },
                    {
                        date: 'Mon, 04 Apr 12:15 PM',
                        message: 'Ah scusa!',
                        status: 'received',
                        showDropDown: false,
                    }
                ],
            },
            {
                id: 4,
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [{
                        date: 'Sun, 03 Apr 3:30 PM',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        showDropDown: false,
                    },
                    {
                        date: 'Sun, 03 Apr 3:50 PM',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        showDropDown: false,
                    }
                ],
            },
            {
                id: 5,
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [{
                        date: 'Sun, 03 Apr 09:20 AM',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        showDropDown: false,
                    },
                    {
                        date: 'Sun, 03 Apr 09:45 AM',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        showDropDown: false,
                    }
                ],
            },
            {
                id: 6,
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [{
                        date: 'Sat, 02 Apr 8:25 PM',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        showDropDown: false,
                    },
                    {
                        date: 'Sat, 02 Apr 9:00 PM',
                        message: 'Non ancora',
                        status: 'received',
                        showDropDown: false,
                    },
                    {
                        date: 'Sat, 02 Apr 9:11 PM',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        showDropDown: false,
                    }
                ],
            },
            {
                id: 7,
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [{
                        date: 'Sat, 02 Apr 5:30 PM',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        showDropDown: false,
                    },
                    {
                        date: 'Sat, 02 Apr 5:50 PM',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        showDropDown: false,
                    }
                ],
            },
            {
                id: 8,
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [{
                        date: 'Fri, 01 Apr 6:00 PM',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        showDropDown: false,
                    },
                    {
                        date: 'Fri, 01 Apr 6:20 PM',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        showDropDown: false,
                    },
                    {
                        date: 'Fri, 01 Apr 6:21 PM',
                        message: 'OK!!',
                        status: 'received',
                        showDropDown: false,
                    }
                ],
            },
        ],

        currentIndex: 0,

        // input per filtrare tra i contatti (colSx)
        searchContact: '',

        // testo del messaggio (input text della chat aperta)
        newMessageText: '',

        // stato del singolo contatto (chat aperta a destra) --> online / sta scrivendo / ultimo accesso
        contactStatus: 'last access yesterday at 10:28 PM',
    },

    created() {

    },

    methods: {
        // switch tra le chat nella colonna di sx (contatti)
        selectChat: function (index) {
            // avere sul lato destro i messaggi della chat sulla quale si clicca 
            this.currentIndex = index;
        },

        // funzione generale per effettuare il toggle su qualsiasi elemento
        toggleElement: function (element) {

            // toggle per il dropdown di ogni singolo messaggio
            element.showDropDown = !element.showDropDown;
        },

        // inviare un nuovo messaggio
        sendNewMessage: function () {
            let currentDate = dayjs().format('ddd, DD MMM');
            let currentTime = dayjs().format('h:mm A');

            let singleArrayMessage = this.contacts[this.currentIndex].messages;

            // validazione per non permettere di inviare un messaggio vuoto o composto da spazi
            if (this.newMessageText !== '') {
                // struttura dell'oggetto per un nuovo messaggio inviato
                let newObjectMessage = {
                    date: `${currentDate} ${currentTime}`,
                    message: this.newMessageText,
                    status: 'sent',
                    showDropDown: false,
                }

                singleArrayMessage.push(newObjectMessage);

                // reset campo input (dopo aver inviato un messaggio) per inviare un nuovo messaggio
                this.newMessageText = '';

                // dopo 2 secondi che l'utente invia un messaggio --> status = sta scrivendo...
                setTimeout(() => {
                    this.contactStatus = 'typing...';
                }, 2000);

                // dopo 4 secondi che l'utente invia un messaggio --> stampa del messaggio
                setTimeout(() => {
                    let currentDate2 = dayjs().format('ddd, DD MMM');
                    let currentTime2 = dayjs().format('h:mm A');

                    // struttura dell'oggetto per un nuovo messaggio ricevuto
                    let newObjectMessageReceived = {
                        date: `${currentDate2} ${currentTime2}`,
                        message: `Risposta automatica da Boolzapp`,
                        status: 'received',
                        showDropDown: false,
                    }

                    singleArrayMessage.push(newObjectMessageReceived);

                    // status = online 
                    this.contactStatus = 'online';

                }, 4000);

            }

            // dopo 7 secondi che l'utente invia un messaggio --> status = ultimo accesso + ora attuale
            setTimeout(() => {
                let currentTime2 = dayjs().format('h:mm A');
                this.contactStatus = `last access today at ${currentTime2}`;
            }, 7000)


        },

        // funzione per filtrare i nomi tra tutti i contatti
        filterList: function () {
            this.contacts.forEach(element => {
                if (element.name.toLowerCase().includes(this.searchContact.toLowerCase())) {
                    element.visible = true;
                } else {
                    element.visible = false;
                }
            });
        },

        // funzione per rendere dinamico l'ultimo messaggio della chat nella colonna sinistra
        lastMessage: function (index) {
            let singleArrayMessage = this.contacts[index].messages;
            let lastObjectMessage = singleArrayMessage[singleArrayMessage.length - 1];
            return lastObjectMessage.message
        },

        // funzione per rendere dinamica la data  dell'ultimo messaggio della chat nella colonna sinistra
        lastMessageDate: function (index) {
            let singleArrayMessage = this.contacts[index].messages;
            let lastObjectMessage = singleArrayMessage[singleArrayMessage.length - 1];
            return lastObjectMessage.date
        },

        // viene mostrato un alert con ora e data del messaggio (click su "INFO MESSAGGIO" --> dropdown)
        showInfoMessage: function (messageIndex) {
            let singleArrayMessage = this.contacts[this.currentIndex].messages;
            let infoMessage = singleArrayMessage[messageIndex].date;
            alert(`Info messaggio: ${infoMessage}`)
        },

        // dropdown su ogni messaggio --> viene eliminato il singolo messaggio
        deleteMessage: function (messageIndex) {
            let singleArrayMessage = this.contacts[this.currentIndex].messages;
            singleArrayMessage.splice(messageIndex, 1)
        },

    },

    // sezione simile a "methods", ma più adatta per le funzioni che contengono molta più logica
    computed: {


        // // VECCHIA VERSIONE: viene creato un nuovo array con gli stessi elementi di contacts 
        // // (il v-for in HTML è basato su quest'ultimo, non su "contacts")
        // filteredList() {
        //     return this.contacts.filter(
        //         contact => {
        //             return contact.name.toLowerCase().includes(this.searchContact.toLowerCase())
        //         }
        //     )
        // },

    }
})