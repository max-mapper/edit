# edit

wraps [codemirror](http://npmjs.org/codemirror) into a high-level API that you can require() and insert into a page as a standlone editor, easily.

the codemirror stylesheet will automatically get inserted into the page for you when you create a new `edit` instance.

## installation

```
npm install edit --save
```

now you can `require('edit')` and use it in the browser with [browserify](http://browserify.org)

## usage

this will create a codemirror editor and append it to `document.body`:

```js
var edit = require('edit')
edit()
```

you can also pass in codemirror options, including a `container` option which is where the editor will get appended into:

```js
var edit = require('edit')
var editor = edit({
  container: document.querySelector('.editor'),
  tabSize: 16
})
```
