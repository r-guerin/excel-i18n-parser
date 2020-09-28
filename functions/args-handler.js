import { argv } from 'yargs';
import { logError } from './logger';

const argsHandler = () => {
  const { filePath, outDir } = argv;

  if (!filePath || !outDir) {
    logError(
      `
      Invalid parameter

      Usage:

      excel-translations-parser
        --filePath=<filePath> 
        --outDir=<outDirectory> 

      Example: 
     
      excel-translations-parser
        --filePath=../../translations.xlsx 
        --outDir=../i18n  
      `,
    );
  }

  return { filePath, outDir };
};

export { argsHandler };
