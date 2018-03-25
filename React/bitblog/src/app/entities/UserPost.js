class UserPost {
    
    constructor(posts) {
        this.id = posts.id;
        this.userId = posts.userId;
        this.title = posts.title;
        this.comment = posts.body;
    }
}

export default UserPost;