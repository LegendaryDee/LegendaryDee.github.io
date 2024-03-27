const getPlaylists = async() =>
{
    const url ="https://legendarydee.github.io/csce242/json/playlist-info.json";
    

    try {
        const response = await fetch(url);
        return await response.json();
    }    catch(error){
            console.log(error);
        }
    
};

const showPlaylists = async() =>
{
    const playlists = await getPlaylists();

    playlists.forEach((playlist) =>
    {
        document.getElementById("playlist-section").append(getPlaylistSection(playlist));

    });
    
};

const getPlaylistSection = (playlist) =>
{
    const playlist_section = document.createElement("section");
    playlist_section.classList.add("playlist_section");
    
    const pSection = document.createElement("section");
    pSection.classList.add("p-section");
    playlist_section.append(pSection);

    const pText = document.createElement("section");
    pText.classList.add("playlist-text");
    pText.append(pText);

    const playlist_id = document.createElement("h3");
    playlist_id.innerHTML = playlist.id;
    playlist_section.append(playlist_id);

    const iframe = document.createElement("img");
    iframe.src = "https://" + playlist.iframe;
    playlist_section.append(iframe);

    const genre = document.createElement("h4");
    genre.innerHTML = playlist.genre;
    pSection.append(genre);

    const runtime = document.createElement("h4");
    runtime.innerHTML = playlist.runtime;
    pSection.append(runtime);

    const numOfSongs = document.createElement("h4");
    numOfSongs.innerHTML = playlist.numOfSongs;
    pSection.append(numOfSongs);


    return playlist_section;
};

window.onload = () => showPlaylists();