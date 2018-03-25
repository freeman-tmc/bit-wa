import UserPost from '../app/entities/UserPost.js';
import AuthorData from '../app/entities/AuthorData.js';



class DataService {

    getPosts(url) {
        return fetch(url)
            .then(data => {
                return data.json();
            })
            .then(userData => {
                return userData.map(user => {
                    return new UserPost(user);
                })
            })
    }

    getAuthors(url1, url2) {
        var nesto;
        return fetch(url1)
            .then(data => {
                return data.json();
            })
            .then(userData => {
                nesto = userData;
                return fetch(url2);
            })
            .then(data => { 
                return data.json();
            })
            .then(data => {   
                let allData = nesto.map( (el, i) => {
                    return {...el, photo: data[i].thumbnailUrl}
                })
                return allData;
             })
            .then(userData => {
                return  userData.map(user => {
                    return new AuthorData(user);
                })
            })
    }

    // getAuthorPhotos(photosLink) {
    //     return fetch(url)
    //         .then(data => {
    //             return data.json();
    //         })
    //         .then(userData => {
    //             return userData.map(user => {
    //                 return new AuthorData(user);
    //             })
    //         })
    // }

}

const dataLists = new DataService();

export default dataLists;

