import { renderPosts } from "./render.js";
import { Api } from "./Api.js";
import { BASE_URL, state } from "./constants.js";
const api = new Api(BASE_URL);
export function debounce(callBack, delay = 1000) {
    let timeout;
    return (arg) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callBack(arg);
        }, delay);
    };
}
export const search = debounce((query) => {
    setPosts(query);
}, 300);
export const setPosts = async (query = "") => {
    if (!query) {
        state.data = state.isSearch
            ? await api.getAllPosts(query)
            : [...state.data, ...await api.getAllPosts(query, state.currentPage)];
        state.isSearch = false;
    }
    else {
        state.isSearch = true;
        state.data = await api.getAllPosts(query);
    }
    renderPosts(state.data);
};
