---
title: 'Vorpal.js'
date: '2015-10-19'
lat: 52.1171140
lng: 53.1171140
author: ramon
avatar: 'http://i.imgur.com/UBLi3O3.jpg'
template: article.jade
---

Vorpal (GitHub: [dthree/vorpal](https://github.com/dthree/vorpal), License: MIT, npm: vorpal)

Vorpal is a framework for building interactive CLI applications. Inspired and based on [commander.js](https://www.npmjs.com/package/commander) which is a port from the wonderful work done on this [Ruby Gem](https://github.com/commander-rb/commander).
It provides you with an interactive prompt provided by [inquirer](https://www.npmjs.com/package/inquirer) and also provides a very extensive API with features such as: piped commands, command history, built-in help menu, tab autocompletion and the list goes on.

For full documentation of the API you should take a look at the [Wiki](https://github.com/dthree/vorpal/wiki).

Getting started with Vorpal.
```javascript
import vorpal from 'vorpal'

const program = vorpal();

program
  .command('foo', 'Outputs "bar"')
  .action((args, callback) => {
    this.log('bar');
    callback();
  });

program
  .delimiter('app $')
  .show();
```
This creates an instance of Vorpal, adds a command which logs "bar", sets the prompt delimiter to say "app $", and shows the prompt.
