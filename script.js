const accessKey = 'p4CRM2hSpcg03bca2OjlgPiRjwMBSFChX3balOep';
const apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=' + accessKey;

try {
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const imageGallery = document.getElementById('image-gallery');
    const photos = data.photos;
    photos.forEach((ele) => {
      const column = document.createElement("div");
      column.setAttribute("class","col-lg-4");

      const card = document.createElement('div');
      card.setAttribute('class', 'card text-center mb-3');

      const cardBody = document.createElement('div');
      cardBody.setAttribute('class','card-body');
      cardBody.innerHTML = `
        <img class="card-img" src="${ele.img_src}" alt="">
      `;

      const cardFooter = document.createElement('div');
      cardFooter.setAttribute('class','card-footer');
      cardFooter.innerText = `Image taken by: ${ele.camera.full_name}`;


      column.append(card);
      card.append(cardBody,cardFooter);
      imageGallery.append(column);
    });
  })
  .catch(error => console.log('Error fetching images:', error));
}
catch (error) {
  console.log('Error fetching images:', error);
}
