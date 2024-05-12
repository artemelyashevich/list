import { state } from "./constants.js";
import { search, setPosts } from "./utils.js";
export const handleChangeTheme = () => {
    const isLightTheme = window.localStorage.getItem("theme") !== 'true';
    console.log(isLightTheme);
    window.localStorage.setItem("theme", String(isLightTheme));
    if (isLightTheme) {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
    }
    else {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
    }
};
export const loadTheme = () => {
    let isLightTheme = window.localStorage.getItem("theme") === 'true' || false;
    if (isLightTheme) {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
    }
    else {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
    }
};
export const handleSearch = (e) => {
    search(e.target.value);
};
export const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        state.currentPage++;
        setPosts();
    }
};
export const getHeaders = (data) => {
    return Object.keys(data[0]);
};
