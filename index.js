const spawn = require('child_process').spawn;

module.exports = function(name, targetPath, opts, cb) {

  if (typeof opts === 'function') {
    cb = opts;
    opts = null;
  }

  opts = opts || {};

  var cmds = opts.docker || 'docker';
  var args = ['build', '--tag'];

  args.push(name);

  Object.keys(opts)
    .map(key => {
      let cmd = `--${key}`
      let val = opts[key]
      cmd += val !== '' ? ` ${val}` : ''
      args.push(cmd)
    })

  args.push('.');

  var process = spawn(cmds, args, {cwd: targetPath});
  process.on('close', function(status) {
    if (status == 0) {
      cb && cb();
    } else {
      cb && cb(new Error("'docker build' failed with status " + status));
    }
  });
}
