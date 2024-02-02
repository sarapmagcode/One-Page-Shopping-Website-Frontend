
const center = document.querySelector('.center');

fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            // Create card
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<img src="${data[i].imageUrl}" alt="product">`;

            // Create card body
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            
            // Place content based on json data
            cardBody.innerHTML += `
                <p id="product-name">${data[i].productName}</p>
                <h4>Php ${data[i].price}</h4>
            `;

            // Dynamic star rating
            const starRating = document.createElement('p');
            for (let j = 0; j < data[i].rating; j++) {
                starRating.innerHTML += `<i class="bi bi-star-fill checked"></i>`;
            }
            for (let j = 0; j < 5 - data[i].rating; j++) {
                starRating.innerHTML += `<i class="bi bi-star-fill"></i>`;
            }
            starRating.innerHTML += `&nbsp;<span id="sold">${data[i].sold} sold</span>`;

            // Complete the card body content
            cardBody.appendChild(starRating);
            cardBody.innerHTML += `<p id="location">${data[i].location}</p>`;
 
            // Append the elements
            card.appendChild(cardBody);
            center.appendChild(card);
        }
    });
