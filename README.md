# grunt-css-prefix [![Build Status](https://travis-ci.org/anasnakawa/grunt-css-prefix.png)](https://travis-ci.org/anasnakawa/grunt-css-prefix.png)

> prefixing css using rework

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-css-prefix --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-rework-css-prefix');
```

## The "css_prefix" task

### Overview
In your project's Gruntfile, add a section named `css_prefix` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  css_prefix: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.prefix
Type: `String`
Default value: `''`

Prefix any class name in the target file with this prefix.

#### options.processName
Type: `String`
Default value: `'dasherize'`

process the prefixed class name with any of [underscore.string](https://github.com/epeli/underscore.string) methods

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options

In this example, we'll prefix all classes with `libname-`, also each class name will be dasherized so `className` will become `class-name`.

```js
grunt.initConfig({
  css_prefix: {
    options: {
      prefix: 'libname-'
    },
    files: {
      'dest/style.css': ['css/style.css']
    }
  }
})
```

* **`style.css` before**:

```css
.foo,
.Bar,
h1 {
  display: none;
}
```

* **`style.css` after**:

```css
.libname-foo,
.libname-bar,
h1 {
  display: none;
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* 0.1.0: basic prefix usage