const log = (message) => {
  console.log('\x1b[32m', message);
};

const logError = (message) => {
  console.error('\x1b[31m', message);
  process.exit(-1);
};

export { log, logError };
