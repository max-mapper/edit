var codemirror = require('codemirror')
var extend = require('extend')
var fs = require('fs')
var insertCSS = require('insert-css')

module.exports = function(opts) {
  if (!opts) opts = {}
  
  var cmStyle = fs.readFileSync(require.resolve('codemirror/lib/codemirror.css'))
  insertCSS(cmStyle)
    
  var defaults = {
    lineNumbers: true,
    autofocus: (window === window.top),
    matchBrackets: true,
    indentWithTabs: false,
    smartIndent: true,
    tabSize: 2,
    indentUnit: 2,
    updateInterval: 500,
    dragAndDrop: true,
    container: document.body
  }
  
  var cmOpts = extend({}, defaults, opts)
  
  var cm = codemirror(cmOpts.container, cmOpts)
  return cm
}
