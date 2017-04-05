function changeMap(num, nom, numC, nomC) {
	document.getElementById('Carte_Oran').src = "img/zone/Oran" + num + ".png"
	document.getElementById('num').innerHTML = 'Numero : ' + num;
	document.getElementById('Daira').innerHTML = 'Daira : ' + nom;
	document.getElementById('NbCom').innerHTML = 'Nombre de communes : ' + numC;
	document.getElementById('Com').innerHTML = 'Communes : ' + nomC;
};


function initMap() {
	document.getElementById('Carte_Oran').src = "img/Oran.png"
	document.getElementById('num').innerHTML = 'Numero : ';
	document.getElementById('Daira').innerHTML = 'Daira : ';
	document.getElementById('NbCom').innerHTML = 'Nombre de communes : ';
	document.getElementById('Com').innerHTML = 'Communes : ';
};
