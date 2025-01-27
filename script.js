// Milestone 2
// Utilizzando Postman, testiamo una chiamata a questo endpoint:
// https://lanciweb.github.io/demo/api/pictures/
// Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.


// Milestone 3
// Inseriamo il JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!


// Select DOM elements

const cardsContainer = document.getElementById("cards_container");


// Popup Images

const popupContainer = document.getElementById("popup_container");


// API //

const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

axios.get(endpoint)
    .then(response => {

        // Endpoint data to work with

        cardsData = response.data;

        console.log(cardsData);


        // DISPLAY CARDS

        // Loop over the objects array

        for (cardElement of cardsData) {

            // Destructuring

            const { url, date, title } = cardElement;

            // Display cards on page

            cardsContainer.innerHTML += `
            <div class="card">

                <img src="./img/pin.svg" class="card_pin">
                <img src="${url}" class="card_image">

                <span>${date}</span>
                <h2>${title}</h2>

            </div>`

        }


        // DISPLAY POPUP IMAGES

        const cardImages = document.querySelectorAll('.card_image');

        // Loop over the cards images and dinamically display images on click

        cardImages.forEach((cardImage) => {

            cardImage.addEventListener('click', () => {

                popupContainer.innerHTML += `
                <div class="popup_content">

                    <span class="material-symbols-outlined">
                    close
                    </span>
                    <img src="${cardImage.src}" class="popup_image">

    
                </div>`

                // Remove the default hidden class on popup images

                popupContainer.classList.remove('hidden');

                // Add event listener to the close button

                const closeButton = document.querySelector('.material-symbols-outlined');

                closeButton.addEventListener('click', () => {

                    popupContainer.classList.add('hidden');

                })

            })

        })


        // Cards Animations

        const cardsList = document.querySelectorAll('.card')

        cardsList.forEach(card => {

            card.addEventListener('mouseover', () => {

                card.classList.add('rotate');

            })

            card.addEventListener('mouseout', () => {

                card.classList.remove('rotate');

            })

        })

    })
    .catch(error => {

        // handle error

        console.log(error);

    })
