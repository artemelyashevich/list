import { getHeaders } from "./service.js"

export const renderHeaders = data => {
    const tableHeader = document.querySelector("table")
    const tHead = document.querySelector("thead")
    const tr = document.createElement("tr")
    const styles = ["px-6", "py-3", "text-xs"]
    tr.classList.add(...styles)
    getHeaders(data).forEach(header => {
        tr.innerHTML += `
       <th>
            <p class="px-6 py-3">
                ${header}
            </p>
        </th>
       `
    })
    tHead.appendChild(tr)
    tableHeader.appendChild(tHead)
}

export const renderPosts = (data) => {
    const body = document.querySelector("tbody")
    body.innerHTML = ''
    data.forEach(post => {
        const tr = document.createElement("tr")
        const styles = ["bg-white", "border-b", "dark:bg-gray-800", "dark:border-gray-700"]
        tr.classList.add(...styles)
        getHeaders(data).forEach(header => {
            tr.innerHTML += `
                <td class='px-3 py-3'>
                    <p class='px-6'>${post[header]}</p>
                </td>
            `
        })
        body.appendChild(tr)
    })
}