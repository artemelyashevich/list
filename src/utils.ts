import {renderPosts} from "./render";
import {Api} from "./Api";
import {BASE_URL, state} from "./constants";

const api = new Api(BASE_URL)

export function debounce(callBack: Function, delay: number = 1000) {
    let timeout: ReturnType<typeof setTimeout>
    return (arg:string): void => {
        clearTimeout(timeout)
        timeout = setTimeout((): void => {
            callBack(arg)
        }, delay)
    }
}

export const search = debounce((query: string): void => {
    setPosts(query)
}, 300)

export const setPosts = async (query = ""): Promise<void> => {
    if (!query) {
        state.data = state.isSearch
            ? await api.getAllPosts(query)
            : [...state.data, ...await api.getAllPosts(query, state.currentPage)]
        state.isSearch = false
    }
    else {
        state.isSearch = true
        state.data = await api.getAllPosts(query)
    }
    renderPosts(state.data)
}