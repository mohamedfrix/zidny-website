export interface GetReviewsResponse {
    count: number;
    success: boolean;
    message?: string;
    reviews: {
        id: number;
        username: string;
        role: string;
        content: string;
        image?: string;
    }[];
}