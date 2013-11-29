# generator-chaos [![Build Status](https://secure.travis-ci.org/bmorwood/generator-chaos.png?branch=master)](https://travis-ci.org/bmorwood/generator-chaos)

[![NPM](https://nodei.co/npm/generator-chaos.png)](https://nodei.co/npm/generator-chaos)

![alt tag](https://raw.github.com/bmorwood/generator-chaos/master/chaos-logo.jpg)

Maintainer: [Barry Morwood](https://github.com/bmorwood) <script data-gittip-username="bmorwood" data-gittip-widget="button" >
</script>

Chaos is a boilerplate used to generate HTML5 interactive standalone web applications.

Chaos is based on the 'carngorhm' design pattern used to create flash / flex style web applications. If in another life you were a Flex / Flash developer or you are looking for portable web application, you are in the right place.

http://en.wikipedia.org/wiki/Cairngorm_%28Flex_framework%29

### Included right out of the box.


* built in localization using http://i18next.com.
* code documentation using http://yui.github.io/yuidoc/.
* pre-loader.
* grunt build tasks.
* basic web application scaffolding.
* simple setup to integrate into any web page.
* works on all modern browsers; I still need to check older versions of IE.

### grunt tasks

build and open application
```
$ grunt
```

create documentation
```
$ grunt yuidoc
```

### samples - coming soon!

## Usage

Install yeoman using NPM.

```
$ npm install -g yo
```

Install: `npm install -g generator-chaos`

Make a new directory and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo chaos`
```
yo chaos
```

chaos will ask for a namespace, enter your namespace and hit enter.

## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after
  scaffolding has finished.

## Generators

Available generators:

- command
- controller
- event
- initializer
- model
- proxy
- service
- singleton
- view model
- view

```
yo chaos:entity [object name]
```
this is a multiple choice selector, you can also use the 'All' to generate all entities.
choose from the available list items, you can select any combination you want.


## Typical workflow

```
yo chaos # generates your application base and build workflow
[enter namespace]
yo chaos:entity blog
[choose view & view model]
grunt
```

**NOTE: Do not put beginning or trailing slashes on the directory structure!**


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
