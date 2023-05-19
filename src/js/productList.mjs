import { getData } from "./productData.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function productcardTemplate(product){
    return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.Id}">
      <img
        src="${product.Image}"
        alt="Image of ${product.Name}"
      />
      <h3 class="card__brand">${product.Brand.Name}</h3>
      <h2 class="card__name">${product.NameWithoutBrand}</h2>
      <p class="product-card__price">$${product.FinalPrice}</p></a>
  </li>`
}

export default async function productList(selector, category){
    const productElement = document.querySelector(selector);
    const data = await getData(category);
    let newkeep = data.filter(el =>
        el.Id != "989CG" &&
        el.Id != "880RT"
    );

    renderListWithTemplate(productcardTemplate, newkeep, productElement );

    
}

