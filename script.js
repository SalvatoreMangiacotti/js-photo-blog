// Milestone 2
// Utilizzando Postman, testiamo una chiamata a questo endpoint:
// https://lanciweb.github.io/demo/api/pictures/
// Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

// Milestone 3
// Inseriamo il JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!


// Display Output Elements //

const mainContainer = document.getElementById('main_container');
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
                    <img src="${url}" class="card_images">
                    <span>${date}</span>
                    <h2>${title.toUpperCase()}</h2>
                </div>
            `;
        }

        mainContainer.innerHTML += `
            <div class="modal_background">
            <div class="modal_content">
                <img class="modal_image hidden">
            </div>
            </div>
        `;


        // Images Popup

        // Select the modal container

        const modalBackground = document.querySelector('.modal_background');

        // Select the modal image

        const modalImage = document.querySelector('.modal_image');

        // Select the card images

        const cardImages = document.querySelectorAll('.card_images');

        cardImages.forEach(image => {

            // If i click on the image

            image.addEventListener('click', () => {

                // Remove the class hidden and show the modal image

                modalImage.classList.remove('hidden');
                modalImage.src = image.src;
                modalBackground.style.display = 'block';

            })

            modalImage.addEventListener('click', () => {

                // Remove the class hidden and show the modal image

                modalImage.classList.add('hidden');
                modalBackground.style.display = '';

            })

        });


        // Cards Animations

        // Select all the cards just created

        const cardsList = document.querySelectorAll('.card');

        // Loop over the cards list

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

