import CONFIG from "../../globals/config";

const createRestaurantTemplate = (restaurant) => `
    <div class="container__restaurant">
            <h1 class="restaurant__title">${restaurant.name}</h1>
            <img class="restaurant__poster" src="${
              CONFIG.BASE_IMAGE_URL + restaurant.pictureId
            }" 
            alt="${restaurant.name}"/>
        <div class"content__info>
            <h2 class="info__city">Kota : ${restaurant.city}</h2>
            <h3 class="info__rating"> ⭐️ Rating : ${restaurant.rating}</h3>
            <p class="info__description">${restaurant.description}</p>
        </div>
    </div>`;

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant__detail">
        <div class="restaurant__header">
            <h1 class="restaurant__detail__title">${restaurant.name}</h1>
            <img class="restaurant__detail__image" alt="${restaurant.name}"
            src="${
              restaurant.backdrop_path
                ? CONFIG.BASE_IMAGE_URL + restaurant.backdrop_path
                : "https://restaurant-api.dicoding.dev/images/large"
            }">
            <div class="restaurant__info">
            <h2 class="restaurant__city">City : ${restaurant.city}</h2>
            <h3 class="restaurant__rating"> ⭐️ Rating : ${
              restaurant.rating
            }</h3>
            <p class="restaurant__description">${restaurant.description}</p>
            </div>
        </div>
    </div>
`;

export { createRestaurantTemplate, createRestaurantDetailTemplate };
