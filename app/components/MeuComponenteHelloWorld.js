var React = require('react'); // importa a lib react

var MeuComponenteHelloWorld = React.createClass({
  render: function(){
    return (
      <h1>Hello World</h1>
    );
  }
});

module.exports = MeuComponenteHelloWorld;