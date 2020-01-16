class HelloWord extends React.Component {
  render() {
    const continentes = ['africa', 'america', 'asia', 'australia', 'europe'];
    const olaContinentes = Array.from(continentes, function (c) {
      return `Ola ${c}!`;
    });
    const message = olaContinentes.join(' ');
    return React.createElement("div", {
      titulo: "div2"
    }, React.createElement("h1", null, message));
  }

}

const elemento = React.createElement(HelloWord, null);
ReactDOM.render(elemento, document.getElementById('conteudo'));