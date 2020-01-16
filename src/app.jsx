class HelloWord extends React.Component{
    render() {
        const continentes = ['africa', 'america', 'asia', 'australia','europe'];
        const olaContinentes = Array.from(continentes, c => `Ola ${c}!` );
        const message = olaContinentes.join(' ');
        
        return(
            <div titulo="div2">
                <h1>{message}</h1>
            </div>
        );
    }
}
const elemento = <HelloWord />

ReactDOM.render(elemento, document.getElementById('conteudo')); 