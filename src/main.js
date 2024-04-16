import { Api } from "./Api.js"
import { renderHeaders, renderPosts } from "./render.js"

const searchInput = document.querySelector("input")
const themeBtn = document.querySelector("button")

const api = new Api("https://jsonplaceholder.typicode.com/posts")

let data = []
let isLightTheme = window.localStorage.getItem("theme") === 'true'

console.log(isLightTheme);

if (!isLightTheme) {
    window.localStorage.setItem("theme", isLightTheme)
    document.documentElement.classList = [`${isLightTheme ? "light" : "dark"}`]
}

const setPosts = async (query = "") => {
    data = await api.getAllPosts(query.trim(""))
    renderPosts(data)
}

await setPosts()
renderHeaders(data)


const handleInput = e => {
    const query = e.target.value
    setPosts(query)
}

const handleChangeTheme = () => {
    isLightTheme = !isLightTheme
    window.localStorage.setItem("theme", isLightTheme)
    document.documentElement.classList = [`${isLightTheme ? "light" : "dark"}`]
}

searchInput.addEventListener("input", handleInput)
themeBtn.addEventListener("click", handleChangeTheme)