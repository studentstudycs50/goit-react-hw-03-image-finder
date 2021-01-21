import axios from 'axios';

const fetchImagesQuery = (searchQuery, page = 1 ) => {
    const key = '19534964-3b894cbb98b7a7b0f6f1cef4d';
    return axios
        .get(
            ` https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(response => response.data.hits);
};


export default fetchImagesQuery ;