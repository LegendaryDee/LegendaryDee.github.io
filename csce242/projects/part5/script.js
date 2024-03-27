const getPlaylists = async() =>
{
    let playlists= await getPlaylists();
    let pSection = document.getElementById("playlist-section");

    playlists.forEach(playlist => {
       pSection.append(getPlaylistItem(playlist));
    });

    console.log(playlists);
    
};

const showPlaylists = async() =>
{
    const playlists = await getPlaylists();

    playlists.forEach((playlist) =>
    {
        document.getElementById("playlist-section").append(getPlaylistSection(playlist));

    });
    
};

// const getPlaylistSection = (playlist) =>
// {
//     const playlist_section = document.createElement("section");
//     playlist_section.classList.add("playlist_section");
    
//     const pSection = document.createElement("section");
//     pSection.classList.add("p-section");
//     playlist_section.append(pSection);

//     const pText = document.createElement("section");
//     pText.classList.add("playlist-text");
//     pText.append(pText);

//     const playlist_id = document.createElement("h3");
//     playlist_id.innerHTML = playlist.id;
//     playlist_section.append(playlist_id);

//     const iframe = document.createElement("img");
//     iframe.src = "https://" + playlist.iframe;
//     playlist_section.append(iframe);

//     const genre = document.createElement("h4");
//     genre.innerHTML = playlist.genre;
//     pSection.append(genre);

//     const runtime = document.createElement("h4");
//     runtime.innerHTML = playlist.runtime;
//     pSection.append(runtime);

//     const numOfSongs = document.createElement("h4");
//     numOfSongs.innerHTML = playlist.numOfSongs;
//     pSection.append(numOfSongs);


//     return playlist_section;
// };





const getPlaylistItem = (playlist) => {
    let section = document.createElement("section");

    
    let h3 = document.createElement("h3");
    h3.innerText = playlist.name;
    section.append(h3);

    let ul = document.createElement("ul");
    section.append(ul);
    ul.append(getLi(playlist.genres));
    ul.append(getLi(playlist.run-time));
    ul.append(getLi(playlist.numOfSongs));
    ul.append(getLi(playlist.features));

    let iframe = document.createElement("img");
    section.append(iframe);
    iframe.src= "https://legendarydee.github.io/cscse242/json/images/playlist-section/" + house.main_image;
    
    
    section.append(getFeatures(playlist.features));
    // section.append(getImage(house.main_image));
    return section;
}

const getLi = data => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
};


const getFeatures = (features) => {
    const section = document.createElement("section");

    features.forEach(features => {
        const p = document.createElement("p");
        p.textContent = features;
        section.append(p);
    })
    return section;
}


window.onload = () => showPlaylists();