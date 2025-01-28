/*
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

fetch('https://flynn.boolean.careers/exercises/api/random/mail')
.then(response => response.json())
.then(data => {
    console.log(data.response);
    for (let i = 0; i < 10; i++) {
        document.getElementById('mail-list').innerHTML += `<li>${data.response}</li>`;
    }
})
.catch(error => console.error(error));