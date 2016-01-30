
const API_URL = 'http://localhost:3000';
const blogPosts = JSON.parse(require('raw!../../data/blogposts.json'));

const API = {
    getAll: () => {
        let blogPostsArr = [];
        Object.keys(blogPosts).forEach(key => {
            let post = blogPosts[key].index;
            blogPostsArr.push(post);
        });
        return _.uniq(blogPostsArr, 'title');
    }
};

window.API = API;

export default API;
