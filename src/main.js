import { Api } from "./Api.js"
import { renderHeaders, renderPosts } from "./render.js"
import { debounce, handleChangeTheme, loadTheme } from "./service.js"

const searchInput = document.querySelector("input")
const themeBtn = document.querySelector("button")
const BASE_URL = "https://jsonplaceholder.typicode.com/posts"

let currentPage = 1

const api = new Api(BASE_URL)

let data = []
let isSearch = false

loadTheme()

const search = debounce(query => {
    setPosts(query)
}, 300)

const setPosts = async (query = "") => {
    if (!query) {
        data = isSearch
            ? await api.getAllPosts(query.trim())
            : [...data, ...await api.getAllPosts(query.trim(), currentPage)]
        isSearch = false
    }
    else {
        isSearch = true
        data = await api.getAllPosts(query.trim(""))
    }
    renderPosts(data)
}

await setPosts()
renderHeaders(data)

searchInput.addEventListener("input", e => search(e.target.value))
themeBtn.addEventListener("click", handleChangeTheme)
window.addEventListener("scroll", () => {
    console.log(window.scrollY + window.innerHeight + 250 - currentPage * 200);
    if (
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight
    ) {
        currentPage++
        setPosts()
    }
})