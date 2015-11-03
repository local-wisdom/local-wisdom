
const API = {
    getAll: (type) => {
        switch (type) {
            case 'posts':
                return 'Not implemented yet';
                // return fetch('http://localhost:3000/posts').then(data => {
                //     console.log(data);
                // });
                break;
            case 'authors':
                return fetch('http://localhost:3000/authors').then(data => data.json());
                break;
            default:
                // Do nothing
        }
    }
};

export default API;
