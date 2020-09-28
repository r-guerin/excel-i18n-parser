import { argsHandler } from './args-handler';
import { logError } from './logger';
import { parseFile } from './parser';

try {
  const { filePath, outDir } = argsHandler();
  parseFile(filePath, outDir);
} catch (e) {
  logError(e);
}
