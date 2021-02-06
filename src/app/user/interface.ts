export interface IUser {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    }
    email: string;
    picture: {
        medium: string;
    }
}
