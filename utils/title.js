module.exports = function() {
    if(!global.title) {
        global.title = 'title';
    }
    let result = '';
    if(typeof arguments == 'array') {
        for(let i in arguments) {
            result = result + arguments[i]
            if(i != arguments.length - 1) {
                result = result + ' :: ';
            } 
        }
        result = result + ' :: ' + global.title
    } else {
        result = global.title;
    }
    return result;
}