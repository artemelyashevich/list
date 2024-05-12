import {renderHeaders} from "./render.js"
import {handleChangeTheme, handleScroll, handleSearch, loadTheme} from "./service.js"
import {setPosts} from "./utils";
import {searchInput, state, themeBtn} from "./constants";


loadTheme()

await setPosts()
renderHeaders(state.data)

searchInput.addEventListener("input", handleSearch)
themeBtn.addEventListener("click", handleChangeTheme)
window.addEventListener("scroll", handleScroll)