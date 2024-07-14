/* Storing the API key directly in the code is a security risk!
Anyone with access to this code will also have access to your API key. 
Consider using a more secure method like environment variables or a secrets management service to store your API key. 
*/

export const API_KEY = '8cac6dec66e09ab439c081b251304443' // Placeholder value, remove before deployment
export const ENDPOINT = 'https://api.themoviedb.org/3'


/*
The API endpoints `ENDPOINT_DISCOVER` and `ENDPOINT_SEARCH` defined in lines 10 and 11 of `constants.js` appear to be incorrect. The trailing slash '/' in the URLs is causing issues with API requests.

Remove the trailing slash '/' from the URLs to ensure correct API requests. 
*/ 
export const ENDPOINT_DISCOVER = `${ENDPOINT}/discover/movie?api_key=${API_KEY}&sort_by=vote_count.desc`
export const ENDPOINT_SEARCH = `${ENDPOINT}/search/movie?api_key=${API_KEY}`
export const ENDPOINT_MOVIE = `${ENDPOINT}/movie/507086?api_key=${API_KEY}&append_to_response=videos`
