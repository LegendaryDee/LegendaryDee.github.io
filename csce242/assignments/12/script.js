const getHouses = async () => {
    const url =" https://portiaportia.github.io/json/house-plans.json";
    

    try {
        const response = await fetch(url);
        return await response.json();
    }    catch(error){
            console.log(error);
        }
    
};

const getImages = async () => {
    const url =" https://portiaportia.github.io/json/images/house-plans/farm.webp";
    

    try {
        const response = await fetch(url);
        return await response.json();
    }    catch(error){
            console.log(error);
        }
    
};

const showHouses = async() => {
    let houses= await getHouses();
    let housesSection = document.getElementById("houses-section");

    houses.forEach(house => {
       housesSection.append(getHouseItem(house));
    });

    console.log(houses);
};

const getHouseItem = (house) => {
    let section = document.createElement("section");

    let h3 = document.createElement("h3");
    h3.innerText = house.name;
    section.append(h3);

    let ul = document.createElement("ul");
    section.append(ul);
    ul.append(getLi(house.size));
    ul.append(getLi(house.bedrooms));
    ul.append(getLi(house.bathrooms));
    ul.append(getLi(house.features));

    let img = document.createElement("img");
    section.append("img");
    // img.append(getImg(house."main_image));
    // img.append(getImg(house.farm))
    
    
    section.append(getFeatures(house.features));
    // section.append(getImage(house.main_image));
    return section;
}

const getLi = data => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
};

const getImg = data => {
    const img = document.createElement("img");
    img.textContent = data;
    return img;
};

// const getImage = async(main_image, image) => {
//     try {
//         return (
//             await fetch(
//                 `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&&output=embed`
//             )
//         ).url;
//     } catch (error) {
//         console.log(error);
//     }
// };


const getFeatures = (features) => {
    const section = document.createElement("section");

    features.forEach(features => {
        const p = document.createElement("p");
        p.textContent = features;
        section.append(p);
    })
    return section;
}

window.onload = () => showHouses();