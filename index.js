class champ {
    constructor (nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo 
    }
}
let hero = new champ ("Renan", "29", "Mago")
console.log(hero)

let escolha = "Monge"
console.log(atacar(escolha))
function atacar(escolha){
    if(escolha == "Guerreiro"){
        console.log("O Guerreiro Atacou Usando Espada:")
    }else if(escolha == "Mago"){
        console.log("O Mago Atacou Usando Magia:")
    }else if(escolha == "Monge"){
        console.log("O Monge Atacou Usando Artes Marciais:")
    }else if(escolha == "Ninja"){
        console.log("O Ninja Atacou Usando Shuriken:")
    }else {
        console.log("Não Definido")
    }
    switch(escolha){
        case "Guerreiro":
            console.log("Usou Sua Espada")
            break
        case "Mago":
            console.log("Usou Sua Magia")
            break
        case "Monge":
            console.log("Usou suas Tecnicas Secretas")
            break
        case "Ninja":
            console.log("Usou suas Shurikens")
            break
}
}
    
