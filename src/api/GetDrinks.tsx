export function getDrinks(url:string, config:RequestInit = {}): Promise<any>{
    return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data);
}