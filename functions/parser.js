import xlsx from 'node-xlsx';
import fs from 'fs';

import { generateFile } from './generator';

const parseFile = (filePath, outDir) => {
  const fileBuffer = fs.readFileSync(`${__dirname}/${filePath}`);
  const doc = xlsx.parse(fileBuffer);

  const data = doc[0].data;

  const [rawLanguages] = data.slice(0, 1);
  const languages = rawLanguages.slice(1);
  const translations = data.slice(1);

  languages.forEach(generateFile(translations, outDir));
};

export { parseFile };
