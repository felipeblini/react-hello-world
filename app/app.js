var React = require('react');
var reactDom = require('react-dom');

var MeuComponenteHelloWorld = require('./components/MeuComponenteHelloWorld.js');

// código HTML escrito em JSX e jogado no elemento ui com id app
reactDom.render(<MeuComponenteHelloWorld />, document.getElementById('app'));