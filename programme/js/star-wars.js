"use strict"

let tableauxVaisseaux = {
"venator" : {turboLourd : 56, turboMid : 2, torpilleProt : 4, rayonTract : 6, canonLasers : 52, image: '<img src= "../programme/img/venator.jpg">',  taille : 1155},
"providence" : {quadTurbo : 14, canonLasers : 34, canonIonLourd : 2, torpilleProt : 102, rayonTract : 8, image : '<img src = "../programme/img/Providence.jpg">', taille : 1088},
"imperial" : {turbolasers : 60, canonIonLourd : 60, rayonTract : 10, image : '<img src = "../programme/img/imperial.jpg">', taille : 1600},
"mc80" : {quadTurbo : 30, canonIonLourd : 36, rayonTract : 6, image : '<img src = "../programme/img/mc80.jpg">', taille : 1200},
"mc85" :{turboLourd : 18, canonIonLourd : 18, canonLasers : 12, torpilleProt : 6, rayontract : 1, image : '<img src = "../programme/img/mc85.jpg">', taille : 3438}
}

document.addEventListener('DOMContentLoaded', initPage);

function initPage(){ 
    document.getElementById("choixForm").addEventListener("submit", affichage); 
}

/**
Génère l'affichage de la page star wars.html
@param {objet} event -retour de l'addEventListener lors de son déclenchement
**/

function affichage(event){
	event.preventDefault()
	let choix1 = document.getElementById("vaisseaux1").value
	let choix2 = document.getElementById("vaisseaux2").value
	let texteVaisseaux = "<p> vous avez choisi les mêmes vaisseaux</p>"
	let texteVaisseaux1 = "<p>Le premier vaisseaux choisi est le " + choix1 + " armé de la manière suivante : <br>" 
	let texteVaisseaux2 = "<p>Le second vaisseaux choisi est le " + choix2 + " armé de la manière suivante : <br> " 
		
			
			for (let elemen in tableauxVaisseaux[choix1]) {
				texteVaisseaux1 += `${elemen} : ${tableauxVaisseaux[choix1][elemen]} ` + "<br>" 
			}
				
			
			for (let element in tableauxVaisseaux[choix2]) {
			texteVaisseaux2 += `${element} : ${tableauxVaisseaux[choix2][element]}  ` + "<br>"
			}
		
	
	if (choix1 == choix2){
		document.getElementById("texte").innerHTML = texteVaisseaux
		
	}
	
	else {
		document.getElementById("texte").innerHTML = null
	}
	
	
	document.getElementById("taille").innerHTML = "<p> la difference de taille des deux vaisseaux est de : " + calculTaille(choix1, choix2) + " m </p>"
	document.getElementById("reponse1").innerHTML = texteVaisseaux1 + "</p>"
	document.getElementById("reponse2").innerHTML = texteVaisseaux2 + "</p>"

}
/**
Calcul la difference de taille entre les vaisseaux
@param {string} vaisseaux1 -nom du premier vaisseaux choisi
@param {string} vaisseaux2 -nom du deuxième vaisseaux choisi
@return {number} diffTaille -la valeur de la difference de taille entre les vaisseaux
**/
function calculTaille (vaisseaux1, vaisseaux2){
	let diffTaille
	
	if (tableauxVaisseaux[vaisseaux1].taille < tableauxVaisseaux[vaisseaux2].taille ){
		diffTaille = tableauxVaisseaux[vaisseaux2].taille - tableauxVaisseaux[vaisseaux1].taille
	}
	
	else {
		diffTaille = tableauxVaisseaux[vaisseaux1].taille - tableauxVaisseaux[vaisseaux2].taille
	}
	
	return diffTaille
}
		
