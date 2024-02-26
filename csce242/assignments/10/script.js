const images = [
    // 'https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7' 
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
