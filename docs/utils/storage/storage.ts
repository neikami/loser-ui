
const caching = {
    cookie: {
        set: (key, value, exdays) => {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = key + "=" + value + "; " + expires;
        },
        get: (key) => {
            var _key = key + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(_key) != -1) return c.substring(_key.length, c.length);
            }
            return "";
        },
        remove: function (name) {
            this.set(name, "", -1);
        }
    },
    local: {
        set: (key, value) => {
            if (!window.localStorage) {
                alert('浏览器不支持localStorage');
                return false;
            } else {
                window.localStorage.setItem(key, value);
            }
            return window.localStorage.setItem(key, value);
        },
        get: (key) => {
            if (!window.localStorage) {
                alert('浏览器不支持localStorage')
                return false;
            } else {
                window.localStorage.getItem(key)
            }
            return window.localStorage.getItem(key)
        },
        remove: (key, all) => {
            if (!window.localStorage) {
                alert('浏览器不支持localStorage')
                return false;
            } else {
                if (all) {
                    window.localStorage.clear();
                } else {
                    window.localStorage.removeItem(key)
                }
            }
            return window.localStorage.removeItem(key)
        }
    },
    session: {
        set: (key, value) => {
            if (!window.sessionStorage) {
                alert('浏览器不支持localStorage');
                return false;
            } else {
                window.sessionStorage.setItem(key, value);
            }
            return window.sessionStorage.setItem(key, value);
        },
        get: (key) => {
            if (!window.sessionStorage) {
                alert('浏览器不支持sessionStorage')
                return false;
            } else {
                window.sessionStorage.getItem(key)
            }
            return window.sessionStorage.getItem(key)
        },
        remove: (key, all) => {
            if (!window.sessionStorage) {
                alert('浏览器不支持sessionStorage')
                return false;
            } else {
                if (all) {
                    window.sessionStorage.clear();
                } else {
                    window.sessionStorage.removeItem(key)
                }
            }
            return window.sessionStorage.removeItem(key)
        }
    },
}
export default caching