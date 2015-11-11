
const API_URL = 'http://localhost:3000';
const API = {
    getAll: (type) => {
        switch (type) {
            case 'authors':
                return fetch(`${API_URL}/authors`).then(data => data.json());
                break;
            default:
                // Do nothing
        }
    },
    saveAuthor: (form, author) => {
        console.log( form, author );
        return fetch(`${API_URL}/authors/${author.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        });
    }
};

export default API;
