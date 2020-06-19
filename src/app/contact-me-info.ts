export class ContactMeInfo {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public message: string,
    ) {}
    reset() {
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.message = null;
    }
}

