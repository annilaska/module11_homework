export function str(arg) {
    if (typeof arg === 'string') {
        let result = arg.split('').reverse().join('')
        return result;
    } else if ((arg === 'number') || (arg !== isNaN(arg))) {
        return 'данные не найдены';
    } 
}

