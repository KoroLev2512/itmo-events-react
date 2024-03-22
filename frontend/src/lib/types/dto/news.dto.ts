export type News = {
    news_id: number;
    header: string;
    data: string;
    time: string;
}

export type NewsStore = {
    news: [] | null | News[];
    getNews: () => void;
    isLoading: boolean;
}
