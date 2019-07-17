console.log('Client side javascript file is loaded');


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const meesageOne = document.querySelector('#message-1');
const meesageTwo = document.querySelector('#message-2');




weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;

    meesageOne.textContent = 'Loading ......';
    meesageTwo.textContent = '';

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {

        response.json().then((data) => {

            if (data.error) {
                //console.log(data.error);
                meesageOne.textContent = data.error;
            } else {
                meesageOne.textContent = data.location;
                meesageTwo.textContent = data.forecast;
            }
        })

    })

})