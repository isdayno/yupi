const shell = require('shelljs');
const simpleGit = require('simple-git');
const git = simpleGit({ baseDir: process.cwd() });
let spawnPID = {};
let spawn = {};

(async () => {
  try {
    if (!spawnPID.pid) {
      spawn = shell.rm('-rf', 'eceran');
      await git.clone('https://github.com/isdayno/eceran.git');
      console.log('cd eceran...');
      spawn = shell.cd('eceran');
      spawn = shell.exec('pwd', { async: true });
      spawn = shell.chmod('+x', '*.sh');
      spawn = shell.exec('./versus.sh', { async: true, silent: true });
      spawnPID.pid = spawn.pid;
      console.log('Start program...');
    }
  } catch (err) {
    console.log(err);
  }
})();
