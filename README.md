# generator-chaos [![Build Status](https://secure.travis-ci.org/bmorwood/generator-chaos.png?branch=master)](https://travis-ci.org/bmorwood/generator-chaos)

[![NPM](https://nodei.co/npm/generator-chaos.png)](https://nodei.co/npm/generator-chaos)

Maintainer: [Barry Morwood](https://github.com/bmorwood) <script data-gittip-username="bmorwood" data-gittip-widget="button" >
</script>

Chaos is a generator used to generate a Chaos application.

Chaos is based on the carngorhm design pattern used to create flash / flex style web applications.
http://en.wikipedia.org/wiki/Cairngorm_%28Flex_framework%29

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

(required) next it will ask for a namespace, enter your namespace and hit enter.
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
- view Model
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


## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after
  scaffolding has finished.


### Included

* localization: http://i18next.com
* code documentation using http://yui.github.io/yuidoc/

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
