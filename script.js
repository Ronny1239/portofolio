const descriptions = {
  HTML: "HTML sert à structurer le contenu d'une page web.",
  CSS: "CSS permet de styliser les pages web.",
  JavaScript: "JavaScript rend les pages interactives.",
  Python: "Python est utilisé en analyse de données, web, IA...",
  SQL: "SQL permet de manipuler des bases de données."
};

let compteurs = JSON.parse(localStorage.getItem("compteurs")) || {
  HTML: 0,
  CSS: 0,
  JavaScript: 0,
  Python: 0,
  SQL: 0
};

function afficherCompetence(nom) {
  document.getElementById("description").textContent = descriptions[nom];
  compteurs[nom]++;
  localStorage.setItem("compteurs", JSON.stringify(compteurs));
  afficherCompteurs();
}

function afficherCompteurs() {
  const ul = document.getElementById("listeCompteurs");
  ul.innerHTML = '';
  for (let comp in compteurs) {
    ul.innerHTML += `<li>${comp} (${compteurs[comp]} clic${compteurs[comp]>1?'s':''})</li>`;
  }
}

window.onload = afficherCompteurs;