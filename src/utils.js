export const debounce = (foo, ms) => {
    let timeout
    return () => {
        const fooCall = () => {
            foo.apply(this, arguments)
        }
        clearTimeout(timeout)
        timeout = setTimeout(fooCall, ms)
    }
}