class AuthorData {

    constructor(author) {
        this.id = author.id;
        this.name = author.name;
        this.username = author.username;
        this.photo = author.photo;
        this.email = author.email;
        this.phone = author.phone;
        this.street = author.address.street;
        this.city = author.address.city;
        this.zipCode = author.address.zipcode;
        this.company = {
            name: author.company.name,
            catchPhrase: author.company.catchPhrase
        }
        this.location = {
            lat: author.address.geo.lat,
            lng: author.address.geo.lng
        }
    }
}

export default AuthorData;