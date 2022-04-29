// Displays songs

const trackListElem = document.querySelector('.songs');
const audioElem = document.querySelector('audio');
const musicCardElem = document.querySelector('.music-card');

function createListItem(track) {
    const listItem = document.createElement('div');
    listItem.innerHTML += `
    <div class="flex song">
    <img src="${track.album.images[0].url}" alt="" class="song--album">
        <div class="song--title flex">
            <p>${track.name}</p>
        </div>
    </div>`;
    trackListElem.appendChild(listItem);
    listItem.addEventListener('click', () => {
        console.log('Preview url:', track.preview_url);
        audioElem.setAttribute('src', track.preview_url);
        musicCardElem.children[0].setAttribute('src', track.album.images[0].url)
        musicCardElem.children[1].innerText = track.album.name;
    })
}

function displayTracks(tracks) {
    trackListElem.innerHTML = '';
    for (const track of tracks) {
        if (track.preview_url) {
            console.log(track)
            createListItem(track);
        }
    }
}

export { displayTracks };