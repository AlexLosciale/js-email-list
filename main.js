/*
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

const emailList = document.getElementById("mail-list");
const apiURL = "https://flynn.boolean.careers/exercises/api/random/mail";

for (let i = 0; i < 10; i++) {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const listItem = document.createElement("li");
            listItem.textContent = data.response;
            emailList.appendChild(listItem);
        })
        .catch(error => console.error("Errore durante il recupero delle email:"));
};
