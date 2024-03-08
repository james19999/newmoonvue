class LocalStorages {

    async setdata(key, value) {
        await localStorage.setItem(key, JSON.stringify(value));
    }

    async getdata(key) {
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    }

    async removedata(key) {
        await localStorage.removeItem(key);
    }

    async clearAll() {
        await localStorage.clear();
    }
}

export default new LocalStorages();
