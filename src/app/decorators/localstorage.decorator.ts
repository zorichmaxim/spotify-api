export function LocalStorage() {
    const setInLocalStorage = (key: string, value: string): void => localStorage.setItem(key, JSON.stringify(value));
    const getFromLocalStorage = (key: string): any => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : '';
    };

    return (target: any, propertyName: string): void => {
        Object.defineProperty(target, propertyName, {
            get: () => getFromLocalStorage(propertyName),
            set: (newValue: string) => setInLocalStorage(propertyName, newValue),
            enumerable: true,
            configurable: true
        });
    };
}
