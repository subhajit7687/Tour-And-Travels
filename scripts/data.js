import { ServicesCardItem } from "./model/services_card_item.js";
import { TravelPackages } from "./model/travel_packages.js";

// Services List
export const servicesList = [
    new ServicesCardItem("./assets/icons/services_1.png", "Hotel Reservation"),
    new ServicesCardItem("./assets/icons/services_2.png", "Flight Booking"),
    new ServicesCardItem("./assets/icons/services_3.png", "Train Booking"),
    new ServicesCardItem("./assets/icons/services_4.png", "Travel Guide"),
];

// Packages List
export const packagesList = [
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
