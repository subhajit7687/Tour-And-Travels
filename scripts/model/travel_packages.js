export class TravelPackages {
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
