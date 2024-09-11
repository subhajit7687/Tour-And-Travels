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

// Elements
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
                        <button type="submit">click here</button>`;

    servicesBody.appendChild(section);
});
