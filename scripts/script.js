// Services
class ServicesCardItem {
    constructor(image, title) {
        this.image = image;
        this.title = title;
        this.content =
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.";
    }
}

const servicesList = [
    new ServicesCardItem("./assets/icons/services_1.png", "Hotel Reservation"),
    new ServicesCardItem("./assets/icons/services_2.png", "Flight Booking"),
    new ServicesCardItem("./assets/icons/services_3.png", "Train Booking"),
    new ServicesCardItem("./assets/icons/services_4.png", "Travel Guide"),
];

// Element
const servicesBody = document.querySelector(".services-body");

// Add services into html
servicesList.forEach((service) => {
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

// Travel Packages
class TravelPackages {
    constructor(
        img,
        price,
        days,
        person,
        title,
        rating,
        details = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
    ) {
        this.img = img;
        this.price = price;
        this.days = days;
        this.person = person;
        this.title = title;
        this.rating = rating;
        this.details = details;
    }
}

const packagesList = [
    new TravelPackages(
        "./assets/images/packages_img1.png",
        250,
        4,
        2,
        "Bali",
        5
    ),
    new TravelPackages(
        "./assets/images/packages_img2.png",
        180,
        5,
        2,
        "Thailand",
        5
    ),
    new TravelPackages(
        "./assets/images/packages_img3.png",
        350,
        6,
        2,
        "Paris",
        5
    ),
];

const packagesBodyElement = document.querySelector(".travel-packages-body");

packagesList.forEach((package) => {
    const card = document.createElement("section");
    card.classList.add("packages-card");

    let ratingHTML = "";

    for (let i = 1; i <= package.rating; i++) {
        ratingHTML += `<img src="./assets/icons/rating_star.png" />`;
    }

    card.innerHTML = `<img src="${package.img}" alt="" />
                        <!-- CARD INFO -->
                        <section class="packages-info">
                            <div class="packages-info-content">
                                <img src="./assets/icons/dollar.png" alt="" />
                                <p>${package.price}$</p>
                            </div>
                            <div class="packages-info-content">
                                <img src="./assets/icons/calendar.png" alt="" />
                                <p>${package.days}days</p>
                            </div>
                            <div class="packages-info-content">
                                <img src="./assets/icons/person.png" alt="" />
                                <p>${package.person}person</p>
                            </div>
                        </section>

                        <!-- CARD BODY -->
                        <section class="packages-card-body">
                            <section class="packages-title-rating">
                                <h3 class="packages-title">${package.title}</h3>
                                <section class="packages-rating">${ratingHTML}</section>
                            </section>

                            <p>${package.details}</p>

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
