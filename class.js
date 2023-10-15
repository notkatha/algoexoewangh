/* class Guerrier {
    constructor(attack, defense) {
        this.attack=attack,
        this.defense=defense

    }

    getAttack() {
        console.log(this.attack)
    }
}

let alexis = new Guerrier (50,10)
let Pickael = new Guerrier (999,999)

Alexis.getAttack()
Pickael.getAttack()

class Survivant{
    constructor(prenom){
        this.prenom= prenom 
    }
}
*/


// Création de ma classe
class Pokemon{
    constructor(name,attack,defense,hp,luck){
    this.name = name
    this.attack = attack
    this.defense = defense
    this.hp = hp
    this.luck = luck}

isLucky(){ // Système de chance et d'esquive
if(Math.random() < this.luck){
return true 
} else {
    return false
}}

hit(cible){
    console.log(`${this.name} attaque ${cible.name}` )
    if(cible.isLucky()){
        console.log(this.name + ' a flop donc ' + cible.name + ' a esquivé')
    }
    else { 
        cible.hp -= this.attack - cible.defense
        console.log(`${this.name} s'est mangé un ratio de ${this.attack - cible.defense} dégats. Il reste ${cible.hp} hp a ${cible.name}`)
    }
}
}

// Création de mes petits pokémon
let Mewtwo = new Pokemon ("Mewtwo",120,80,300,0.3)
let Arceus = new Pokemon ("Arceus",110,87,300,0.5)
while(Mewtwo.hp > 0 && Arceus.hp > 0){
    Mewtwo.hit(Arceus)
    Arceus.hit(Mewtwo)
}

if (Mewtwo.hp <= 0) {
    console.log(Mewtwo.name + " est finito pipo")
}

if (Arceus.hp <= 0) {
    console.log(Arceus.name + " est finito pipo")
} 