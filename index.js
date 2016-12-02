const spawn = require('child_process').spawn;

module.exports = function(name, targetPath, opts, cb) {

  if (typeof opts === 'function') {
    cb = opts;
    opts = null;
  }

  opts = opts || {};

  var docker = opts.docker || 'docker';
  var args = ['build', '--tag'];

  args.push(name);
  args.push('.');

  var process = spawn(docker, args, {cwd: targetPath});
  process.on('close', function(status) {
    if (status == 0) {
      cb && cb();
    } else {
      cb && cb(new Error("'docker build' failed with status " + status));
    }
  });
}
