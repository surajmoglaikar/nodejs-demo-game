module.exports = {
    getType,
    parseJSON
}

function getType(variable) {
    if(variable === undefined) return 'undefined'
    else if(variable === null) return 'null'
    else if(variable.constructor === String) return 'string'
    else if(variable.constructor === Number) return 'number'
    else if(variable.constructor === Boolean) return 'boolean'
    else if(variable.constructor === Array) return 'array'
    else if(variable.constructor === Date) return 'date'
    else if(variable.constructor === Function) return 'function'
    else if(variable.constructor === Object) return 'object'
    else return 'unknown'
}

function parseJSON(data) {
    if(getType(data) == 'object') {
        return data;
    }

    try {
        return JSON.parse(data);
    } catch(err) {
        // console.log("parseJSON error : ",err)
        return {};
    }
}
