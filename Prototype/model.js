
// 1: HVilken informasjon trenger vi for å tegne opp dette skjermbildet

// 2: Hva kan man gjære på dette skjermbildet og hvilke endringer skal det føre til i modellen?

const model = {
    inputs:{
        selectedPoll:0,
    }
    ,


    polls: [
        {question:'Liker is?',
        besvart:'3/15',
        // extended:true,
        svaralternativ:[
            {svar:'Ja',
            prosent:10
            },
            {svar:'Nei',
            prosent:50
            },
            {svar:'Custom',
            prosent:40
            }]
            }
            ,
        {question:'Vil på telt tur?',
        besvart:'3/15',
        svaralternativ:[
            {svar:'Ja',
            prosent:10
            },
            {svar:'Nei',
            prosent:50
            },
            {svar:'Custom',
            prosent:40
            }]
            }
            ,
        {question:'Vil på telt tur?',
        besvart:'3/15',
        svaralternativ:[
            {svar:'Ja',
            prosent:10
            },
            {svar:'Nei',
            prosent:50
            },
            {svar:'Custom',
            prosent:40
            }]
            },
        ]
     };