'use strict';

var StreamZip = require('node-stream-zip');
const path = require('path');
const mkdirp = require('mkdirp');

var zip = new StreamZip({
  file: './example.zip',
  storeEntries: true
});

zip.on('error', function(err) {
  console.error('[ERROR]', err);
});

zip.on('ready', function() {
  console.log('All entries read: ' + zip.entriesCount);
  //console.log(zip.entries());
});

zip.on('entry', function(entry) {
  var pathname = path.resolve('./temp', entry.name);
  if (/\.\./.test(path.relative('./temp', pathname))) {
    console.warn(
      '[zip warn]: ignoring maliciously crafted paths in zip file:',
      entry.name
    );
    return;
  }

  if ('/' === entry.name[entry.name.length - 1]) {
    console.log('[DIR]', entry.name);
    return;
  }

  console.log('[FILE]', entry.name);

  zip.stream(entry.name, function(err, stream) {
    if (err) {
      console.error('Error:', err.toString());
      return;
    }

    stream.on('error', function(err) {
      console.log('[ERROR]', err);
      return;
    });

    // example: print contents to screen
    //stream.pipe(process.stdout);

    // example: save contents to file
    mkdirp(
      path.dirname(pathname, function(err) {
        stream.pipe(fs.createWriteStream(pathname));
      })
    );
  });
});
