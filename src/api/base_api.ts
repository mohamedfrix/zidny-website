
export interface ApiResult<T> {
    success: boolean;
    data?: T;
    error?: string;
    statusCode?: number;
}

export abstract class BaseApi {

    protected baseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

    protected async fetch<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResult<T>> {
        try {
            const url = `${this.baseUrl}${endpoint}`;

            const response = await fetch(url, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
            });

            if (!response.ok) {
                return {
                    success: false,
                    error: `HTTP error! status: ${response.status}`,
                    statusCode: response.status
                };
            }
            const data = await response.json();
            return {
                success: true,
                data
            };
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error occurred'
            };
        }
    }

    protected async post<T>(endpoint: string, body: unknown): Promise<ApiResult<T>> {
        return this.fetch<T>(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
    }
}