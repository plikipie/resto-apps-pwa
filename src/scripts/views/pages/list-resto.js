import RestaurantDbSource from "../../data/restaurantdb-source";
import { createRestaurantTemplate } from "../templates/template-creator";

const ListResto = {
  async render() {
    return `
        <div class="content">
        <h2 class="content__heading"> Daftar Restaurant</h2>
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
