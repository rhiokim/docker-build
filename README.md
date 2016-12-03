# docker-build

Build a Docker image via shell command.

## Installation

Install:

  $ npm install docker-build

Require:

  var dockerBuild = require('docker-build');

## API

#### `build(name, [options], cb)`

Build `name` image, calling `cb` on completion.

Supported `options`:
  * https://docs.docker.com/engine/reference/commandline/build/

```
dockerBuild('imageName', {
  'file': 'PATH/Dockerfile',
  'tag': 'v1.0.0', //(default latest)
  'label': [
    'node=v7.2.0',
    'docker=1.13.rc0'
  ],
  'no-cache': '',
  'rm': true
})
```

## Copyright &amp; License

&copy; 2016 Rhio Kim [ [@rhiokim](http://twitter.com/rhiokim) / [rhio.kim@gmail.com](mailto:rhio.kim@gmail.com) ]

Released under the ISC license.
