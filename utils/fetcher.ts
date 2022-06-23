export const fetcher = (url: string) =>
fetch(url)
.then((res) => res.json())
.then((res)=>res.data)

export const BASE_URL = '  https://api.dev.coinghost.com';

export const API = {
    BLOGS: `${BASE_URL}/blogs`,
  };

