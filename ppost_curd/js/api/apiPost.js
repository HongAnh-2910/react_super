import instance from "./apiClient"

const apiPost = {
    getAll(params)
    {
        return instance.get('/post', { params })
    }
}

export default apiPost