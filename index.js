export const log = (data, arg) => {
    if (typeof arg !== 'undefined') {
        console.log(data, arg);
    } else {
        console.log(data);
    }
}

export const info = (data, arg) => {
    if (typeof arg !== 'undefined') {
        console.info(data, arg);
    } else {
        console.info(data);
    }
}

export const warn = (data, arg) => {
    if (typeof arg !== 'undefined') {
        console.warn(data, arg);
    } else {
        console.warn(data);
    }
}