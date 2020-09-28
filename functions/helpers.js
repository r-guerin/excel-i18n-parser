const removeParentheses = (string) => string.replace(/[()]/g, '');
const trimAll = (doubleArray = [[]]) => doubleArray.map((array) => array.map((elem) => elem.trim()));

export { removeParentheses, trimAll };
