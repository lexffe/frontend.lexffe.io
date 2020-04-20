const baseURL = 'http://127.0.0.1:8090';

// const reqParam = new Request();
// reqParam.url = 'aaaa';

/**
 * @param {string} path
 */
const fetchPath = (path) => fetch(`${baseURL}/${path}`);

// eslint-disable-next-line import/prefer-default-export
export { fetchPath, baseURL };
