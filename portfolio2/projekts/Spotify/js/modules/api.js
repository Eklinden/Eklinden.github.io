// Get songs from spotify

let TOKEN = '';

async function getToken() {
    const response = await fetch('https://blooming-reef-63913.herokuapp.com/api/token');
    const data = await response.json();

    TOKEN = data.token;
}

async function getTracks (query) {
    const URL = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const response = await fetch(URL, {
        headers: {
            'authorization': `Bearer ${TOKEN}`
        }
    });
    const data = await response.json();

    return data.tracks.items;
}

export { getTracks, getToken };