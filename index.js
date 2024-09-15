// Array of song objects
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" , url:"https://youtu.be/NrI-UBIB8Jk?si=81a5bwP53-mpjtRb"},
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" , url:"https://youtu.be/RPUAldgS7Sg?si=XE7hJ5q1Oogq6r63" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop", url:"https://youtu.be/DGDyAb6pePo?si=y2f8yTiRD7KBvrvh" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock", url:"https://youtu.be/n95A6G9IxlM?si=s6vXFZdDR_SW5ISH" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" , url:"https://youtu.be/K2ws6vMFF3c?si=vsLBhVPhBL_T4AE2"},
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" , url:"https://youtu.be/TazHNpt6OTo?si=Fx4M32yyfRZpqMP2"},
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" , url:"https://youtu.be/dguz0IsCuKU?si=AaCbxa4-fJ9z36r-"},
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" , url:"https://youtu.be/ABfQuZqq8wg?si=gO0X8n_-FZyuqzWK"},
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" , url:"https://youtu.be/bc0KhhjJP98?si=mEYyZGSoH-Gdk_FQ"},
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" , url:"https://youtu.be/OtBHfxU2wmc?si=8CRfkyls6bfSZdK5"},
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" , url:"https://youtu.be/DyMMEmwFQUE?si=iPgspVTKKVKfN0PO"},
    { title: "The Chain", artist: "Fleetwood Mac", genre: "Rock" , url:"https://youtu.be/xwTPvcPYaOo?si=NVJOR05lPVaODCqP"}
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
};

// Generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlistsDiv = document.getElementById("playlists");
    playlistsDiv.innerHTML = ''; // Clear existing content

    Object.keys(guardians).forEach(guardian => {
        const preferredGenre = guardians[guardian];
        const playlist = songs.filter(song => song.genre === preferredGenre);

        const guardianDiv = document.createElement("div");
        guardianDiv.className = "playlist";
        guardianDiv.innerHTML = `<h2>${guardian}'s Playlist</h2>`;

        const songList = document.createElement("div");
        playlist.forEach(song => {
            const listItem = document.createElement("div");
            listItem.className = "song"; // Add class for individual songs
            listItem.innerHTML = `
            <a class="song-link" href="${song.url}" target="_blank">
        <span class="song-title">${song.title}</span>
        </a> by ${song.artist}`;

            songList.appendChild(listItem);
        });

        guardianDiv.appendChild(songList);
        playlistsDiv.appendChild(guardianDiv);
    });
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
