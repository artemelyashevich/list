export type TPost = {
    id: number,
    userId: number,
    title: string,
    body: string
}

export type TState = {
    data: TPost[],
    currentPage: number,
    isSearch: boolean
}