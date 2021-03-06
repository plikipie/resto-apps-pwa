import RestaurantDbSource from "../../data/restaurantdb-source";
import { createRestaurantTemplate } from "../templates/template-creator";

const ListResto = {
  async render() {
    return `
        <div class="hero">
        <div div tabindex="0" class="hero__wrap">
          <h1 class="hero__title">O'Deliciouzo</h1>
          <p class="hero__tagline">temukan makanan & restaurant favorit mu.</p>
        </div>
        </div>
        <div class="main_restaurant">
        <div class="content">
        <h2 class="content__heading"> Daftar Restaurant</h2>
        </div>
        <div id="restaurants" class="restaurants">
        </div>
        </div>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.ListRestaurant();
    const restaurantContainer = document.querySelector("#restaurants");
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantTemplate(restaurant);
    });
  },
};

export default ListResto;
