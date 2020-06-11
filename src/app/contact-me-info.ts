export class ContactMeInfo {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public message: string,
    ) {}
    reset() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.message = '';
    }
}

