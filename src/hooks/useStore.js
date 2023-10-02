import { useEffect } from "react";

const useStore = (key) => {
    useEffect(() => {
        const clearLocalStorageOnUnload = () => {
        localStorage.clear();
        };
    
        window.addEventListener('beforeunload', clearLocalStorageOnUnload);
    
        return () => {
        window.removeEventListener('beforeunload', clearLocalStorageOnUnload);
        };
    }, []);
    
    const storeGet = () => {
        return window.localStorage.getItem(key);
    }

    const storeSet = (value) => {
        return window.localStorage.setItem(key, value);
    }

    if (!storeGet()) {
        storeSet(0);
    }

    const storeValue = +storeGet();

    return { storeValue, storeSet };
}

export default useStore;