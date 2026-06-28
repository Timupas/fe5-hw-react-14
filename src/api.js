const API_KEY = '47446943-b17379f6931e486b133594f5d'
const BASE_URL = 'https://pixabay.com/api/'
export const fetchImages = (quary, page = 1) => {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${quary}&page=${page}&orientation=vertical&per_page=12`).then(res => res.json())
}