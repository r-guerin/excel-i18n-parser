import path from 'path';

const removeParentheses = (string) => string.replace(/[()]/g, '');
const trimAll = (doubleArray = [[]]) => doubleArray.map((array) => array.map((elem) => elem.trim()));

const revolvePath = (relativePath) => path.resolve('..', '..', '..', relativePath);

export { removeParentheses, trimAll, revolvePath };
