import {TPost} from "./types";
import {state} from "./constants";
import {search, setPosts} from "./utils";

export const handleChangeTheme = (): void => {
    const isLightTheme = window.localStorage.getItem("theme") !== 'true'
    console.log(isLightTheme);
    window.localStorage.setItem("theme", String(isLightTheme))
    if (isLightTheme) {
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
    } else {
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
    }
}

export const loadTheme = () => {
    let isLightTheme = window.localStorage.getItem("theme") === 'true' || false
    if (isLightTheme) {
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
    } else {
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
    }
}

export const handleSearch = (e: Event): void => {
    search((e.target as HTMLInputElement).value)
}

export const handleScroll = (): void => {
    if (
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight
    ) {
        state.currentPage++
        setPosts()
    }
}

export const getHeaders = (data: TPost[]) => {
    return Object.keys(data[0])
}