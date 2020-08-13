import {User} from './user.model';

export class DataRS {
    constructor(
        public page: number,
        public per_page: number,
        public total: number,
        public total_pages: number,
        public data: User[],
        public ad: any[]
    ) {}
}