class Personnage{
    constructor(prénom, SantéMentale){
     this.prénom = prénom;
     this.SantéMentale = SantéMentale;
    }  
}

class Trajet{
    constructor(){
     this.musique = ["Musique 1", "Musique 2", "Musique 3", "Musique 4","Anissa - Wejdene"];
     this.nbfeuxRouges = 30;
     this.nbChangementstaxi = 0;

    }

    jouerMusique(){
        return  this.musique[Math.floor(Math.random() * this.musique.length)];
    }
}

let john = new Personnage("John", 10);
let trajet = new Trajet();

while(trajet.nbfeuxRouges > 0 && john.SantéMentale > 0){
    let musique = trajet.jouerMusique();
    trajet.nbfeuxRouges-=1;

    console.log("Musique jouée: " + musique);
    trajet.nbfeuxRouges;
    console.log("Feux rouges restants: " + trajet.nbfeuxRouges);

    if(musique === "Anissa - Wejdene"){
    john.SantéMentale-=1;
    trajet.nbChangementstaxi+=1;
       }
    
}

if (trajet.nbfeuxRouges == 0) {
    console.log(`GG bien arrivé! Nombre de changements de taxis : ${trajet.nbChangementstaxi}`)
}
if(john.SantéMentale == 0){
    console.log("Macron Explosion !");

}

if (trajet.nbChangementstaxi > 30){
    console.log('Macron Explosion!')
 }