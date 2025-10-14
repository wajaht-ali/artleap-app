const BaseURL: string = "http://43.205.54.198:8000/api";

type Apis = {
    [key: string]: string
}

export const endPoints: Apis = {
    allImages: `${BaseURL}/all-images`
}

export const dataUrls = (url: string): URL => {
    if (url) {
        return new URL(url);
    }
    return new URL("");
}