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
        <a href="${`/#/detail/${restaurant.id}`}"> More Detail </a>
        </div>
    </div>`;

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant__detail">
        <div class="restaurant__header">
            <h1 class="restaurant__detail__title">${restaurant.name}</h1>
            <img class="restaurant__detail__image" alt="${restaurant.name}"
            src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
            </div>
          <div class="restaurant__info">
            <h2 class="restaurant__city">Kota : ${restaurant.city}</h2>
            <h3 class="restaurant__rating"> ⭐️ Rating : ${
              restaurant.rating
            }</h3>
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
        <div class="bg-h1">
        <h1>Review Restaurant</h1>
        </div>
        <h2>Nama : ${restaurant.customerReviews.map((names) => names.name)}</h2>
            <h5>${restaurant.customerReviews.map(
              (reviews) => reviews.review
            )}</h5>
        <div class="review__date">
        <p>${restaurant.customerReviews.map((dates) => dates.date)}</p>
        </div>
        </div>
        </div>
        
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
