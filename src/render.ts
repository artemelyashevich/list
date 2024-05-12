import {getHeaders} from "./service.js"
import {TPost} from "./types";

export const renderHeaders = (data: TPost[]): void => {
    const tableHeader: Element = document.querySelector("table")!
    const tHead: Element = document.querySelector("thead")!
    const tr: Element = document.createElement("tr")!
    const styles = ["px-6", "py-3", "text-xs", "block"]
    tr.classList.add(...styles)
    getHeaders(data).forEach((header: string): void => {
        tr.innerHTML += `
       <th class="border border-slate-300">
            <p class="px-6 py-3">
                ${header}
            </p>
        </th>
       `
    })
    tHead.appendChild(tr)
    tableHeader.appendChild(tHead)
}

export const renderPosts = (data: TPost[]): void => {
    const body: Element = document.querySelector("tbody")!
    body.innerHTML = ''
    data.forEach((post: TPost): void => {
        const tr = document.createElement("tr")
        const styles = ["bg-white", "dark:bg-gray-800", "dark:border-gray-700", "py-4"]
        tr.classList.add(...styles)
        getHeaders(data).forEach((header: string) => {
            // @ts-ignore
            const val: string = post[header]
            tr.innerHTML += `
                <td class='px-3 py-3 border border-slate-300'>
                    <p class='px-6'>${val}</p>
                </td>
            `
        })
        body.appendChild(tr)
    })
}