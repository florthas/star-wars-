let tableauxVaisseaux = {
"venator" : {turboLourd : 56, turboMid : 2, torpilleProt : 4, rayonTract : 6, canonLasers : 52, <img src= "../img/Venator_clonewars.jpg">,  taille : 1155},
"providence" : {quadTurbo : 14, canonLasers : 34, canonIonLourd : 2, torpilleProt : 102, rayonTract : 8, image : "../img/Providence-class_carrier_1.jpg", taille : 1088},
"imperial" : {turbolasers : 60, canonIonLourd : 60, rayonTract : 10, image : "../img/Avenger.jpg", taille : 1600},
"mc80" : {quadTurbo : 30, canonIonLourd : 36, rayonTract : 6, image : "../img/mc80.jpg", taille : 1200},
"mc85" :{turboLourd : 18, canonIonLourd : 18, canonlasers : 12, torpilleProt : 6, rayontract : 1, image : "../img/mc85.jpg", taille : 3438}
}

document.addEventListener('DOMContentLoaded', initPage);

function initPage(){ 
    document.getElementById("choixForm").addEventListener("submit", affichage); 
}

	
function affichage(event){
	event.preventDefault()
	let choix1 = document.getElementById("vaisseaux1").value
	let choix2 = document.getElementById("vaisseaux2").value
	let texteVaisseaux = "<p> vous avez choisi les mêmes vaisseaux</p>"
	let texteVaisseaux1 = ""
	let texteVaisseaux2 = ""
	for (let element in tableauxVaisseaux){
		texteVaisseaux1 = "<p>Le premier vaisseaux choisi est le :" + tableauxVaisseaux[element] + " : " 
		texteVaisseaux2 = "<p>Le second vaisseaux choisi est le :" + tableauxVaisseaux[element] + " : " 
		if (choix1 == tableauxVaisseaux[element]){
			
			//let texteVaisseaux1 = "<p>Le premier vaisseaux choisi est le :" + tableauxVaisseaux[element] + " : " 
			//let texteVaisseaux2 = "<p>Le second vaisseaux choisi est le :" + tableauxVaisseaux[element] + " : " 
			
			for (element in tableauxVaisseaux[choix1][element]){
				texteVaisseaux1 += tableauxVaisseaux[choix1][element]
				
				//let texteVaisseaux1 = "<p>Le premier vaisseaux choisi est le :" + tableauxVaisseaux[element] + " : " + "</p>"
				//document.getElementById("reponse1").innerHTML = texteVaisseaux1
			}
			
			if (choix2 == tableauxVaisseaux[element]){
				for (element in tableauxVaisseaux[choix2][element]){
					texteVaisseaux2 += tableauxVaisseaux[choix2][element]
				}
				
				//let texteVaisseaux2 = "<p>Le second vaisseaux choisi est le :" + tableauxVaisseaux[element] + "</p>"
				//document.getElementById("reponse2").innerHTML = texteVaisseaux2
				
			}
		}
	}
	if (choix1 == choix2){
		document.getElementById("texte").innerHTML = texteVaisseaux
	}
	calculTaille (choix1, choix2)
	document.getElementById("reponse1").innerHTML = texteVaisseaux1 + "</p>"
	document.getElementById("reponse2").innerHTML = texteVaisseaux2 + "</p>"
	return false
}

function calculTaille (vaisseaux1, vaisseaux2){
	let diffTaille
	if (tableauxVaisseaux[vaisseaux1].taille < tableauxVaisseaux[vaisseaux2].taille ){
		diffTaille = tableauxVaisseaux[vaisseaux2].taille - tableauxVaisseaux[vaisseaux1].taille
	}
	else {
		diffTaille = tableauxVaisseaux[vaisseaux1].taille - tableauxVaisseaux[vaisseaux2].taille
	}
}
		
//for (let element in tableauxVaisseaux[choix1][element]