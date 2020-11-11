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
        <div class="detail__restaurant">
        <h4><a href="${`/#/detail/${restaurant.id}`}">Detail Restaurant</a></h4>
        </div>
    </div>`;

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant__detail">
        <div class="restaurant__header">
            <h1 class="restaurant__detail__title">${restaurant.name}</h1>
            <img class="restaurant__detail__image" alt="${restaurant.name}"
            src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
            <div class="restaurant__info">
            <h3 class="restaurant__rating"> ⭐️ Rating : ${
              restaurant.rating
            }</h3>
            <h2 class="restaurant__city">City : ${restaurant.city}</h2>
            <h4>Restaurant Address</h4>
            <p>${restaurant.address}</p>
            <h4>Restaurant Categories</h4>
            <p>${restaurant.categories
              .map((category) => category.name)
              .join(" - ")}</p>
            <h4>Restaurant Menus</h4>
            <p><b>Food :</b> ${restaurant.menus.foods
              .map((food) => food.name)
              .join(" - ")}</p>
            <p><b>Drinks :</b> ${restaurant.menus.drinks
              .map((drink) => drink.name)
              .join(" - ")}</p>
            <h4>Description</h4>
            <p class="restaurant__description">${restaurant.description}</p>
            </div>
        </div>
        <div class="customer__review">  
        <h1>Review Restaurant</h1>
        </div>
        <div class="review__info">
            <h2>Nama : ${restaurant.customerReviews.map(
              (names) => names.name
            )}</h2>
            <h5>${restaurant.customerReviews.map(
              (reviews) => reviews.review
            )}</h5>
        </div>
        <div class="review__date">
            <p>${restaurant.customerReviews.map((dates) => dates.date)}</p>
        </div>
    </div>
`;

export { createRestaurantTemplate, createRestaurantDetailTemplate };
