export class Post {
    public createdAt: string;
    public likeIt: number;
    public dontLikeIt: number;

    constructor(
        public title: string,
        public content: string
    ) {
        this.createdAt = new Date().toLocaleString();
        this.likeIt = 0;
        this.dontLikeIt = 0;
    }
}
