export class User {
    _id: string;
    name: string;
    createdAt: Date;
    items;

    constructor() {
        this.name = "";
        this.items = [];
    }
}
