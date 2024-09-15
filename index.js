// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "The Chain", artist: "Fleetwood Msc", genre: "Rock" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    const playlistsDiv = document.getElementById("playlists");

     Object.keys(guardians).map(guardian => {
        const preferredGenre = guardians[guardian];
        // Filter the songs to the preffered genre for guardians
        const playlist = songs.filter(song => song.genre === preferredGenre);

        // makes a new div for each guaedian's playlist
        const guardianDiv = document.getElementById("div");
        guardianDiv.className = "playlist";
        guardianDiv.innerHTML = `<h2>${guardian}'s Playlists</h2>`;

        const songList = document.createElement("ul");
        playlist.forEach(songs => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${song.title}</strong> by ${song.artist}`;
            songList.appendChild(listItem);
        });
        guardianDiv.appendChild(songList);
        playlistsDiv.appendChild(guardianDiv);
    });
    
    
    }
 
// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);




