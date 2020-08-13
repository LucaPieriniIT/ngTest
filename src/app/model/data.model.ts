import { User } from './user.model';

export interface DataRS {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: User[],
    ad: any[]
}