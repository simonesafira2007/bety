const input = require('readline-sync')  

//Questão 6

// Digite 0 - para NÃO  
// Digite 1 - para SIM

const input1 = input.question(' animal mamifero?')
    if (input1 == 1) {
        const input2 = input.question('animal quadrupede?')
        if (input2 == 1){
            const input3 = input.question('animal carnivoro?')
                if (input3 == 1){
                console.log('LEÃO')

                }else {
                        console.log('CAVALO')
            }
        }

    }


const input4 = input.question ('animal bipede?')
            if (input4 == 1){
                const input5 = input.question('onivaro')
                    if (input5 == 1){
                    console.log('homem')

                    }else{
                    console.log('macaco')
                }
            }
        