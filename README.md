# gulp & phaser template

```bash
$ npm install -g gulp
$ npm install -g bower
$ npm install
$ bower install
$ gulp
```

This installs dependencies and starts a dev server at http://localhost:8080. Make changes to any files and it will rebuild and reload the page. No refreshing needed. Assets and bower components are minified and copied over.

You can `$ gulp clean` and `$ gulp build`, to clean the output folder and rebuild respectively.

You can run also `$gulp run` to run your game standalone via node-webkit, or `$ gulp nodewebkit` to build your game for linux, mac, and windows.
