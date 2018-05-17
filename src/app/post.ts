export class Post {
    public created_at: Date;
    public loveIts: number;

    constructor(
        public title: string,
        public content: string
    ) {
        this.created_at = new Date();
        this.loveIts = 0;
    }
}
