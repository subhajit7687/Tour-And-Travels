import * as data from "./data.js";

// Element
const servicesBody = document.querySelector(".services-body");
const packagesBodyElement = document.querySelector(".travel-packages-body");

// Add services into html
data.servicesList.forEach((service) => {
    const section = document.createElement("section");
    section.classList.add("services-card");
    section.innerHTML = `<img
                            src="${service.image}"
                            alt=""
                        />
                        <h3>${service.title}</h3>
                        <p>${service.content}</p>
                        <button type="submit" class="animated-button">click here</button>`;

    servicesBody.appendChild(section);
});

data.packagesList.forEach((pack) => {
    const card = document.createElement("section");
    card.classList.add("packages-card");

    let ratingHTML = "";

    for (let i = 1; i <= pack.rating; i++) {
        ratingHTML += `<img src="./assets/icons/rating_star.png" />`;
    }

    card.innerHTML = `<img src="${pack.img}" alt="" />
                        <!-- CARD INFO -->
                        <section class="packages-info">
                            <div class="packages-info-content">
                                <img src="./assets/icons/dollar.png" alt="" />
                                <p>${pack.price}$</p>
                            </div>
                            <div class="packages-info-content">
                                <img src="./assets/icons/calendar.png" alt="" />
                                <p>${pack.days}days</p>
                            </div>
                            <div class="packages-info-content">
                                <img src="./assets/icons/person.png" alt="" />
                                <p>${pack.person}person</p>
                            </div>
                        </section>

                        <!-- CARD BODY -->
                        <section class="packages-card-body">
                            <section class="packages-title-rating">
                                <h3 class="packages-title">${pack.title}</h3>
                                <section class="packages-rating">${ratingHTML}</section>
                            </section>

                            <p>${pack.details}</p>

                            <!-- CARD BUTTONS -->
                            <section class="packages-card-buttons-section">
                                <button class="packages-card-buttons animated-button">
                                    Book Now
                                </button>
                                <button class="packages-card-buttons animated-button">
                                    View Details
                                </button>
                            </section>
                        </section>`;

    packagesBodyElement.appendChild(card);
});
