export function capitalize(str) {
    return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
}

export function getActualDateFormated() {
    const date = new Date();
    let formatedDate = '';

    if(date.getMonth() < 10 && date.getDate() < 10) {
        formatedDate = `${date.getFullYear()}-0${date.getMonth() + 1}-0${date.getDate()}`;
    } else if (date.getMonth() < 10 && date.getDate() > 10) {
        formatedDate = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`;
    } else if (date.getMonth() > 10 && date.getDate() < 10) {
        formatedDate = `${date.getFullYear()}-${date.getMonth() + 1}-0${date.getDate()}`;
    } else if (date.getMonth() > 10 && date.getDate() > 10) {
        formatedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    return formatedDate;
}

let actualKey = 0;

export function generateRandomKey() {
    return actualKey++;
}