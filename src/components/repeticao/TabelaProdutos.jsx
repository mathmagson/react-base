import './TabelaProdutos.css'
import produtos from '../../data/produtos'

export default props => {
    function getRows() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>U$ {produto.preco.toFixed(2)}</td>
                </tr>
            )
        })
    }

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {getRows()}   
                </tbody>
            </table>
        </div>
    )
}