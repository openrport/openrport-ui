import axios from "axios";

export default defineNuxtPlugin((nuxtApp: any): any => {
    // axios.defaults.withCredentials = true;
    const defaultUrl = 'https://rport.viziosense.ai';
    const token = useCookie('token')
    let api = axios.create({
        baseURL: defaultUrl,
        headers: {
            Accept: 'application/json',
            Authorization: token.value
        }
    })
    return {
        provide: {
            axios: api
        }
    };
});
