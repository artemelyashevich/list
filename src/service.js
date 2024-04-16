export function debounce(callBack, delay = 1000) {
    let timeout
    return (arg) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            callBack(arg)
        }, delay)
    }
}

export const handleChangeTheme = () => {
    const isLightTheme = window.localStorage.getItem("theme") !== 'true'
    console.log(isLightTheme);
    window.localStorage.setItem("theme", isLightTheme)
    document.documentElement.classList = [`${isLightTheme ? "light" : "dark"}`]
}

export const loadTheme = () => {
    let isLightTheme = window.localStorage.getItem("theme") === 'true' || false
    document.documentElement.classList = [`${isLightTheme ? "light" : "dark"}`]
}

export const getHeaders = (data) => {
    return Object.keys(data[0])
}