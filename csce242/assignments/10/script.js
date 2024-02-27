let img1, img2, img3, img4, img5;
img1 = img2 = img3 = img4 = img5 = new Image();

// const images = {
//     'https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7': new Image(),
//     'https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4': new Image(),
//     'https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4': new Image(),
//     'https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4': new Image(),
//     'https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4': new Image()
// }

// images['https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7'].src = 'images/garden.jpg';
// images['https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4'].src = 'images/golden.jpg';
// images['https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4'].src = 'images/mountain-lake.jpg';
// images['https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4'].src = 'images/small-house.jpg';
// images['https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4'].src = 'images/snow.jpg'

const images = [
    
    'images/garden.jpg',
    'images/golden.jpg',
    'images/mountain-lake.jpg',
    'images/small-house.jpg',
    'images/snow.jpg'
            ];
            

const container = document.getElementById('container');
     
    for (let i = 0; i < images.length; i++) 
    {
        const img = document.createElement('img');
            img.src = images[i];
            container.appendChild(img);
    }

    const slide = () => {
        //find the child of slideshow that doesn't contain the class of hidden
        const currentAd = document.querySelector("#advertisement :not(.hidden)");
        let nextAd = currentAd.nextElementSibling;
    
        // loop on the last image
        if (nextAd == null) {
            nextAd = document.querySelector("#advertisement :first-child");
        }
    
        currentAd.classList.add("hidden");
        nextAd.classList.remove("hidden");
    };
    
    setInterval(slide, 1000);