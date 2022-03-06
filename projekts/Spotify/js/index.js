
const inputElem = document.querySelector('#query');
const searchButton = document.querySelector('#search-button');

import { getToken, getTracks } from './modules/api.js';
import { displayTracks } from './modules/displaySongs.js';

searchButton.addEventListener('click', async () => {
    const query = inputElem.value;
    const results = await getTracks(query);

    displayTracks(results);
})

inputElem.addEventListener('keyup', async (e) => {
    const key = e;

    if (key.key == 'Enter') {
        const query = inputElem.value;
        const results = await getTracks(query);
    
        displayTracks(results);
    }
})

getToken();