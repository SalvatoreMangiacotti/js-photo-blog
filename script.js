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
                    <img src="${url}" class="images">
                    <span>${date}</span>
                    <h2>${title.toUpperCase()}</h2>
                </div>

                <div class="modal_container">
                    <img class="modal_image hidden">
                </div>
            `;

        }


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


        // Select the modal image

        const modalImage = document.querySelector(".modal_image");

        // Select the card images

        const images = document.querySelectorAll(".images");


        // Loop over the images

        images.forEach(image => {

            // If i click on the image

            image.addEventListener('click', () => {

                // Remove the class hidden and show the modal image

                modalImage.classList.remove('hidden');
                modalImage.src = image.src;

            })
        });


        // If i click on the modal image

        modalImage.addEventListener('click', () => {

            // Hide the modal image by adding the class hidden

            modalImage.classList.add('hidden');

        });

    })
    .catch(error => {

        // handle error
        console.log(error);

    })

