
const API = {
    getAll: (type) => {
        switch (type) {
            case 'authors':
                return fetch(window.location.href +':3000/authors').then(data => data.json());
                break;
            default:
                // Do nothing
        }
    }
};

export default API;
