var app = new Vue({

    el: '#root',

    data: {

        myAccount: {
            name: 'Simone',
            avatar: '_io',
        },


        // N.B. contacts.id = index del singolo oggetto + 1
        contacts: [{
                id: 1,
                name: 'Michele',
                avatar: '_1',
                visible: true,
                currentChat: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        showDropDown: true,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        showDropDown: true,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        showDropDown: true,
                    }
                ],
            },
            {
                id: 2,
                name: 'Sofia',
                avatar: '_2',
                visible: true,
                currentChat: false,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        showDropDown: true,
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        showDropDown: true,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        showDropDown: true,
                    }
                ],
            },
            {
                id: 3,
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                currentChat: false,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        showDropDown: true,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        showDropDown: true,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        showDropDown: true,
                    }
                ],
            },
            {
                id: 4,
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                currentChat: false,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        showDropDown: true,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        showDropDown: true,
                    }
                ],
            },
            {
                id: 5,
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                currentChat: false,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        showDropDown: true,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        showDropDown: true,
                    }
                ],
            },
            {
                id: 6,
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                currentChat: false,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        showDropDown: true,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        showDropDown: true,
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        showDropDown: true,
                    }
                ],
            },
            {
                id: 7,
                name: 'Federico',
                avatar: '_7',
                visible: true,
                currentChat: false,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        showDropDown: true,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        showDropDown: true,
                    }
                ],
            },
            {
                id: 8,
                name: 'Davide',
                avatar: '_8',
                visible: true,
                currentChat: false,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        showDropDown: true,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        showDropDown: true,
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                        showDropDown: true,
                    }
                ],
            },
        ],

        currentIndex: 0,
        
        // input per filtrare tra i contatti (colSx)
        searchContact: '',

        // testo del messaggio (input text della chat aperta)
        newMessageText: '',

    },

    methods: {
        // switch tra le chat nella colonna di sx (contatti)
        selectChat: function (identification) {
            // avere sul lato destro i messaggi della chat sulla quale si clicca 
            this.currentIndex = identification - 1;

            /*
                ho dovuto abbinare il "currentIndex" a CONTACT.ID - 1 per ogni contatto perchè filtrando
                i contatti gli index di ognuno cambiavano (poichè il filtraggio non è basato sulla
                proprietà booleana "VISIBLE" mentre in questo caso l'ID di ogni contatto non varia)
            */
        },

        // funzione generale per effettuare il toggle su qualsiasi elemento
        toggleElement: function (element) {

            // toggle per la chat aperta di lato (chat attuale)
            // TODO come impostare per avere un solo elemento TRUE (quello cliccato) e tutti gli altri FALSE?
            element.currentChat = !element.currentChat;

            // toggle per il dropdown di ogni singolo messaggio
            element.showDropDown = !element.showDropDown;
        },

        // inviare un nuovo messaggio
        sendNewMessage: function () {
            let currentDate = dayjs().format('DD/MM/YYYY');
            let currentTime = dayjs().format('HH:mm:ss')

            let singleArrayMessage = this.contacts[this.currentIndex].messages; 

            // validazione per non permettere di inviare un messaggio vuoto
            if (this.newMessageText !== '') {
                // struttura dell'oggetto per un nuovo messaggio inviato
                let newObjectMessage = {
                    date: `${currentDate} ${currentTime}`,
                    message: this.newMessageText,
                    status: 'sent',
                    showDropDown: true,
                }

                singleArrayMessage.push(newObjectMessage);
                
                // reset campo input (dopo aver inviato un messaggio) per inviare un nuovo messaggio
                this.newMessageText = '';
    
                // dopo 2 secondi che l'utente invia un messaggio si ha una risposta automatica
                setTimeout(function () {
                    let currentDate2 = dayjs().format('DD/MM/YYYY');
                    let currentTime2 = dayjs().format('HH:mm:ss')
 
                    // struttura dell'oggetto per un nuovo messaggio ricevuto
                    let newObjectMessageReceived = {
                        date: `${currentDate2} ${currentTime2}`,
                        message:  `Sei un povero gabbiano`,
                        status: 'received',
                        showDropDown: true,
                    }
    
                    singleArrayMessage.push(newObjectMessageReceived);
                }, 2000);
            }

        },
        
        // funzione per rendere dinamico l'ultimo messaggio della chat nella colonna sinistra
        lastMessage: function(index){
            let singleArrayMessage = this.contacts[index - 1].messages;
            let lastObjectMessage = singleArrayMessage[singleArrayMessage.length - 1];
            return lastObjectMessage.message
        },

        // funzione per rendere dinamica la data  dell'ultimo messaggio della chat nella colonna sinistra
        lastMessageDate: function(index){
            let singleArrayMessage = this.contacts[index - 1].messages;
            let lastObjectMessage = singleArrayMessage[singleArrayMessage.length - 1];
            return lastObjectMessage.date
        },

        deleteMessage: function(messageIndex) {
            let singleArrayMessage = this.contacts[this.currentIndex].messages;
            singleArrayMessage.splice(messageIndex,1)
        },

    },

    // sezione simile a "methods", ma più adatta per le funzioni che contengono molta più logica
    computed: {


        // viene creato un nuovo array con gli stessi elementi di contacts 
        // (il v-for in HTML è basato su quest'ultimo, non su "contacts")
        filteredList() {
            return this.contacts.filter(
                contact => {
                    return contact.name.toLowerCase().includes(this.searchContact.toLowerCase())
                }
            )
        },
    }
})