import Cookies from 'js-cookie';

class CookieManager {
    private static defaultOptions: Cookies.CookieAttributes = {
        domain: process.env.AUTH_COOKIE_DOMAIN,
        path: '/',
    };

    private options: Cookies.CookieAttributes; // Instance property to store options

    constructor(options: Cookies.CookieAttributes = {}) {
        this.options = { ...CookieManager.defaultOptions, ...options };
    }

    public set(name: string, value: string, options: Cookies.CookieAttributes = {}) {
        Cookies.set(name, value, { ...this.options, ...options });
    }

    public get(name: string) {
        return Cookies.get(name);
    }
}

export default CookieManager;
