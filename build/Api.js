import { BASE_URL as API_URL } from "./constants.js";
export class Api {
    BASE_URL = "";
    constructor(BASE_URL) {
        this.BASE_URL = BASE_URL || API_URL;
    }
    getAllPosts = async (query, currentPage = 1) => {
        let data;
        try {
            const url = new URL('/posts', this.BASE_URL);
            url.searchParams.set("_page", String(currentPage));
            url.searchParams.set("_limit", String(15));
            query && url.searchParams.set("title_like", query);
            const response = await fetch(url);
            if (response.ok) {
                data = await response.json();
            }
            else {
                throw new Error("Something went wrong...");
            }
        }
        catch (err) {
            console.log(err);
        }
        finally {
            return data;
        }
    };
}
