import {BaseApi} from "@/api/base_api";
import {GetReviewsResponse} from "@/types/reviews";


export class ReviewsApi extends BaseApi {
    private static instance: ReviewsApi = new ReviewsApi();

    static async getReviews() : Promise<GetReviewsResponse> {
        const result = await this.instance.fetch<GetReviewsResponse>('/reviews');
        if (result.success && result.data) {
            return result.data;
        }
        console.error('Failed to fetch reviews:', result.error);
        return mockReviews; // Return mock data in case of error
    }
}

const mockReviews: GetReviewsResponse = {
    count: 10,
    success: true,
    reviews: [
        {
            id: 1,
            username: "John Doe",
            role: "Software Engineer",
            content: "This is a great product! Highly recommend it. This is a great product! Highly recommend it. This is a great product! Highly recommend it. This is a great product! Highly recommend it.",
            image: "https://example.com/image1.jpg"
        },
        {
            id: 2,
            username: "Jane Smith",
            role: "Product Manager",
            content: "Amazing experience, will definitely use it again. Amazing experience, will definitely use it again. Amazing experience, will definitely use it again. Amazing experience, will definitely use it again.",
            image: "https://example.com/image2.jpg"
        },
        {
            id: 3,
            username: "Alice Johnson",
            role: "UX Designer",
            content: "The design is intuitive and user-friendly. Love it! The design is intuitive and user-friendly. Love it! The design is intuitive and user-friendly. Love it!",
            image: "https://example.com/image3.jpg"
        },
        {
            id: 4,
            username: "Bob Brown",
            role: "Data Scientist",
            content: "Incredible insights and analytics. A must-have tool. The design is intuitive and user-friendly. Love it! The design is intuitive and user-friendly. Love it!",
            image: "https://example.com/image4.jpg"
        },
        {
            id: 5,
            username: "Charlie White",
            role: "DevOps Engineer",
            content: "Streamlined our workflow significantly. Very satisfied.",
            image: "https://example.com/image5.jpg"
        },
        {
            id: 6,
            username: "Diana Green",
            role: "Marketing Specialist",
            content: "Fantastic results from using this product. Highly effective.",
            image: "https://example.com/image6.jpg"
        },
        {
            id: 7,
            username: "Ethan Blue",
            role: "Sales Executive",
            content: "Boosted our sales performance tremendously. Great value!",
            image: "https://example.com/image7.jpg"
        },
        {
            id: 8,
            username: "Fiona Black",
            role: "Customer Support",
            content: "Excellent support and features. Very happy with the service.",
            image: "https://example.com/image8.jpg"
        },
        {
            id: 9,
            username: "George Yellow",
            role: "Content Writer",
            content: "The content management features are top-notch. Very useful.",
            image: "https://example.com/image9.jpg"
        },
        {
            id: 10,
            username: "Hannah Purple",
            role: "QA Engineer",
            content: "Thoroughly tested and reliable. Highly recommend it.",
            image: "https://example.com/image10.jpg"
        }
    ]

}