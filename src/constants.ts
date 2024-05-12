import {TPost, TState} from "./types";

export const BASE_URL = "https://jsonplaceholder.typicode.com/posts"

export const searchInput: HTMLInputElement = document.querySelector("input")!
export const themeBtn: HTMLButtonElement = document.querySelector("button")!
export const state: TState = {
    data: [],
    currentPage: 1,
    isSearch: false
}