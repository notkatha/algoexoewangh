//Petit tableau des prénoms des suvivants

let nom_survivants = ['Margaret','Paul','Daphné','Aaron','Aliya','Lou','Dan'];

let caracteristiques = [            //Petit tableau des caractéristiques.
    ' Blonde',
    ' Sportif',
    ' Geek',
    ' Noob',
    ' Aventurier',
    ' Smart',
    ' rapide'
 ]

 
//Tableau des morts.
let tableaumorts = "" 


//Petite classe des personnages.
class Personnage {         
    constructor(nom, pointsdevie, hit, attaque_prob, death_hit_prob) {
        this.nom = nom
        this.hp = pointsdevie
        this.degats = hit
        this.attaque = attaque_prob
        this.contrecoup = death_hit_prob
    }


//Fonction permettant d'attaquer et de dodge
    attaquer(cible){       
        if (Math.random() < this.attaque) {
            console.log(`${this.nom} attaque ${cible.nom} et lui inflige ${this.degats} points de dégâts.`)
            cible.hp -= this.degats;
        }
        else {
            console.log(`${this.nom} a rate son attaque contre ${cible.nom}.`);
        }
    }




//Fonction permettant l'encaissement des dégâts, contre-attaques et éliminations.
    encaisserDegats(hit) { 
        if (Math.random() < this.contrecoup) {
            console.log(`${this.nom} contre-attaque et encaisse ${hit} points de dégâts.`);
            this.hp -= hit;
        }
        else {
            console.log(`${this.nom} encaisse ${hit} points de dégâts.`);
        }

        if (this.hp <= 0) {
            console.log(`${this.nom} a ete vaincu.`);
        }
    }
}

 //Classe du tueur. 
class Tueur {     
    constructor(nom_Tueur, pointsdevie, hit, attaque_prob, death_hit_prob) {
        this.nom = nom_Tueur
        this.hp = pointsdevie
        this.degats = hit
        this.attaque = attaque_prob
        this.contrecoup = death_hit_prob
    }

    attaquer(cible){
        if (Math.random() < this.attaque) {
            console.log(`${this.nom} attaque ${cible.nom} et lui inflige ${this.degats} points de dégâts.`)
            cible.hp -= this.degats;
        }
        else {
            console.log(`${this.nom} a rate son attaque contre ${cible.nom}.`);
        }
    }

    encaisserDegats(hit) {
        if (Math.random() < this.contrecoup) {
            console.log(`${this.nom} contre-attaque et encaisse ${hit} points de dégâts.`);
            this.hp -= hit;
        }
        else {
            console.log(`${this.nom} encaisse ${hit} points de dégâts.`);
        }

        if (this.hp <= 0) {
            console.log(`${this.nom} a été vaincu.`);
        }
    }
}

let survivants = new Personnage(nom_survivants[Math.floor(Math.random()*4)] + caracteristiques[Math.floor(Math.random() * 4)], 100, 20, 0.8, 0.2);      //On cree ici les 5 personnage principaux de notre histoire
let survivants2 = new Personnage(nom_survivants[Math.floor(Math.random()*4)] + caracteristiques[Math.floor(Math.random() * 4)], 100, 20, 0.6, 0.4);
let survivants3 = new Personnage(nom_survivants[Math.floor(Math.random()*4)] + caracteristiques[Math.floor(Math.random() * 4)], 100, 20, 0.7, 0.3);
let survivants4 = new Personnage(nom_survivants[Math.floor(Math.random()*4)] + caracteristiques[Math.floor(Math.random() * 4)], 100, 20, 0.8, 0.2);
let survivants5 = new Personnage(nom_survivants[Math.floor(Math.random()*4)] + caracteristiques[Math.floor(Math.random() * 4)], 100, 20, 0.7, 0.3);

let tableausurvivants = [survivants, survivants2, survivants3, survivants4, survivants5];

let i = 0;

let tueur = new Tueur("Jason Derulo", 100, 80, 0.7, 0.3);     //Création du killer avec classe Tueur.

let tour = 1;                     //Ici on lance le jeu 
while (tableausurvivants[i%tableausurvivants.length].hp > 0 && tueur.hp > 0) {       //Loop nombre de tours qu'il faudra pour que la partie se termine.
    console.log(`Tour ${tour}:`);

    tableausurvivants[i%tableausurvivants.length].attaquer(tueur);

    if (tueur.hp <= 0) {   
        console.log(`${tableausurvivants[i%tableausurvivants.length].nom} a pull up Jason.`)
        break;
    }

    tueur.attaquer(tableausurvivants[i%tableausurvivants.length]);

    if (tableausurvivants[i%tableausurvivants.length].hp <= 0) {
        console.log(`${tueur.nom} a martyrisé ${tableausurvivants[i%tableausurvivants.length].nom}`)
        tableaumorts += tableausurvivants[i%tableausurvivants.length].nom + ", ";
        break;
    }

    console.log(`${tableausurvivants[i%tableausurvivants.length].nom} : ${tableausurvivants[i%tableausurvivants.length].hp} hp`);
    console.log(`${tueur.nom} : ${tueur.hp} hp`);
    tour++;
    i++;
}

if (tableausurvivants[i%tableausurvivants.length].hp <= 0) {         //Ces IF et ELSE permettent d'afficher dans la console la fin de la partie et qui a gagne ou un potentiel match nul
    console.log("Le survivant a été bullied par le tueur. Le tueur gagne !");
    console.log("Ces survivants sont kapout au cours de la bataille : " + tableaumorts)
  } else if (tueur.hp <= 0) {
    console.log("Le tueur a été pull up par le héro ! Le héro gagne !");
    console.log("Les survivants suivants sont kapout au cours de la bataille : " + tableaumorts)
  } 
    else {
    console.log("Match nul ! Le survivant et le tueur sont tous les deux k.o !");
    console.log("Ces survivants sont kapout au cours de la bataille : " + tableaumorts)
  }