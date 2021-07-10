const { exec } = require('child_process');

exec(
  'node ./node_modules/eslint/bin/eslint.js ./src/** --config .eslintrc.json --ext .ts --ext .tsx --no-inline-config --no-ignore --format unix',
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }
    if (stdout !== '') {
      console.log(stdout);
      throw Error('ESLint. Tests not passed.');
    }
  }
);
