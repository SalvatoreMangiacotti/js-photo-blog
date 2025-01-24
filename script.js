// Milestone 2
// Utilizzando Postman, testiamo una chiamata a questo endpoint:
// https://lanciweb.github.io/demo/api/pictures/
// Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

// Milestone 3
// Inseriamo il JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!


// Display Output Elements //

const cardsContainer = document.querySelector('.cards_container');


// API //

const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

axios.get(endpoint)
    .then(response => {

        // handle success


        // console ouput of the objects array

        const stickyNotes = response.data;

        console.log(stickyNotes);


        // For loop over the array to get each object

        for (note of stickyNotes) { // Now we can work on the objects properties

            // Destructuring 

            const { date, title, url } = note;


            // Display ouput (our images) on page

            cardsContainer.innerHTML += `
                <div class="card">
                    <img src="./img/pin.svg" class="card_pin">
                    <img src="${url}">
                    <span>${date}</span>
                    <h2>${title.toUpperCase()}</h2>
                </div>
            `;

        }

    })
    .catch(error => {

        // handle error
        console.log(error);

    })