import {TPost} from "./types";
import {BASE_URL as API_URL} from "./constants";

export class Api {
    private BASE_URL: string = ""

    constructor(BASE_URL: string) {
        this.BASE_URL = BASE_URL || API_URL
    }

    getAllPosts = async (query: string, currentPage: number = 1): Promise<TPost[]> => {
        let data
        try {
            const url = new URL('/posts', this.BASE_URL)
            url.searchParams.set("_page", String(currentPage))
            url.searchParams.set("_limit", String(15))
            query && url.searchParams.set("title_like", query)
            const response = await fetch(url)
            if (response.ok) {
                data = await response.json()
            } else {
                throw new Error("Something went wrong...")
            }
        } catch (err) {
            console.log(err)
        } finally {
            return data
        }
    }
}