document.getElementById("mobile-menu").addEventListener("click", function () {
  document.querySelector(".navbar-menu").classList.toggle("active");
});

const foodArr = [
  {
    url: "https://i.ibb.co/QjcVCwb/gyro-sandwich.jpg",
    header: "Gyro Sandwhic",
  },
  {
    url: "https://i.ibb.co/F6fhBfR/Enchilade.jpg",
    header: "Enchilade",
  },
  {
    url: "https://i.ibb.co/QkY8pPm/Green-Beans.jpg",
    header: "Green Beans",
  },
  {
    url: "https://i.ibb.co/rcsDCXS/Pizza2.jpg",
    header: "Pizza",
  },
  {
    url: "https://i.ibb.co/nRmvSQR/Chicken-Pot-Pie.jpg",
    header: "Chicken Pot Pie",
  },
  {
    url: "https://i.ibb.co/d2XMkjz/Green-Salad.jpg",
    header: "Green Salad",
  },
];

let isShowingMore = false;

function handleToggle() {
  const foodContainer = document.getElementById("card-container");
  const toggleButton = document.getElementById("toggle-button");

  if (!isShowingMore) {
    // Show more items
    for (const item of foodArr) {
      const foodDivItem = document.createElement("div");
      foodDivItem.className = "extra-item";

      foodDivItem.innerHTML = `
                        <img
                            src="${item.url}"
                            alt="Avatar"
                            style="width: 100%; border-radius: 15px 15px 0 0; height: 333px"
                        />
                        <div class="card-content">
                            <div class="name-rating">
                                <h4><b>${item.header}</b></h4>
                                <div class="rating">
                                    <img src="./images/star.png" width="18px" alt="" />
                                    <p>4.9</p>
                                </div>
                            </div>
                            <div class="add-to-cart-price">
                                <button class="add-to-cart">Add To Cart</button>
                                <p>$18.50</p>
                            </div>
                        </div>
                    `;

      foodContainer.appendChild(foodDivItem);
    }

    toggleButton.innerText = "Show Less Items";
    isShowingMore = true;
  } else {
    const extraItems = document.querySelectorAll(".extra-item");
    extraItems.forEach((item) => item.remove());

    toggleButton.innerText = "See More Products";
    isShowingMore = false;
  }
}

function handleSubscribe(event) {
  event.preventDefault();

  const email = event.target.email.value;

  const successContainer = document.getElementById("success-container");

  const successParagraph = document.createElement("p");
  successParagraph.innerText = "Subscription Successful";

  successContainer.appendChild(successParagraph);
}
