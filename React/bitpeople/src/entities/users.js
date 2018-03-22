class User {
    constructor (user){
        this.photo = user.picture.large;
        this.first = user.name.first[0].toUpperCase() + user.name.first.slice(1);
        this.last = user.name.last[0].toUpperCase() + user.name.last.slice(1);
        this.name = `${this.first} ${this.last}`;
        this.email = user.email;
        this.dob = user.dob;
        this.gender = user.gender;
    }

    mailHidden(){
        let arr = this.email.split('.');
        let first = arr[0].substr(0, 3);
        let second = arr[1] + '.' + arr[2];
        let arr2 = second.split('@');
        let surname = arr2[0].substr(arr2[0].length - 3);
        return first + '***' + surname + '@' + arr2[1];
    }
}

export default User;

