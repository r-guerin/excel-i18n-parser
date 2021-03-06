import fs from 'fs';
import { removeParentheses, revolvePath, trimAll } from './helpers';
import { log } from './logger';

const LOCALE_REGEX = /\([a-z]{2}\)/;

const translationsBuilder = (index) => (acc, elem) => {
  const [key] = elem;
  const value = elem[index + 1];
  return Object.assign(acc, { [key]: value });
};

const buildTranslationsObject = (translations, index) => translations.reduce(translationsBuilder(index), {});

const generateFile = (translations, outDir) => (language, index) => {
  const [locale] = LOCALE_REGEX.exec(language).map(removeParentheses);
  log(`Processing tranlations for locale ${locale} ...`);

  const formattedTranslations = trimAll(translations);
  const translationsObject = buildTranslationsObject(formattedTranslations, index);

  const data = JSON.stringify(translationsObject, null, 2);
  const fileName = revolvePath(`${outDir}/${locale}.json`);

  fs.writeFileSync(fileName, data);
  log(`${fileName} created!\n`);
};

export { generateFile };
