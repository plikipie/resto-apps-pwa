import UrlParser from "../../routes/url-parser";
import RestaurantDbSource from "../../data/restaurantdb-source";
import { createRestaurantDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
        <div id="detail" class="detail_restaurant"></div>
        <a class="backButton" href="/#/list-resto">Back</a>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector("#detail");
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(
      restaurant.restaurant
    );
  },
};

export default Detail;
