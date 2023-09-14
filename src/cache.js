class Cache{
    constructor() {
        this._keyValuePairs = []
        this._logs = []
    }
    
    addKV(key, value, hits=1) {
        this._keyValuePairs.push({key: key, value: value, hits: hits})
    }

    getValue(key) {
        for (let kv of this._keyValuePairs) {
            if (kv.key === key)
                if (kv.hits > 0) {
                    kv.hits--
                    this._logs.push({key: kv.key, value: kv.value, hits_left: kv.hits})
                    return kv.value
                }
                else {
                    this._logs.push({key: kv.key, value: null, hits_left: kv.hits})
                    return null
                }
        }
        this._logs.push({key: key, value: null, hits_left: null})
        return null
    }

    getHits(key) {
        for (let kv of this._keyValuePairs) {
            if (kv.key === key)
                return kv.hits
        }
        return null
    }

    getLogs() {
        return this._logs
    }

}
export {Cache}