export type Callback<K, V> = (key: K, val: V) => void

export class Dictionary<K, V> {
    private keys: K[] = [];
    private vals: V[] = [];

    set(key: K, val: V) {
        const index = this.keys.indexOf(key);
        if (index > -1) {
            this.vals[index] = val;
        } else {
            this.keys.push(key);
            this.vals.push(val);
        }
    }

    forEach(callback: Callback<K, V>) {
        this.keys.forEach((k, i) => {
            const v = this.vals[i];
            callback(k, v)
        })
    }

    has(key: K) {
        return this.keys.includes(key)
    }

    delete(key: K) {
        const index = this.keys.indexOf(key)
        if (index < 0) {
            return;
        }
        this.keys.splice(index, 1);
        this.vals.splice(index, 1);
    }

    get size() {
        return this.keys.length;
    }

}