import { Container } from "./styles"

export function TransactionsTable() {
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td>12.000</td>
                        <td>Venda</td>
                        <td>31/03/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td>12.000</td>
                        <td>Venda</td>
                        <td>31/03/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td>12.000</td>
                        <td>Venda</td>
                        <td>31/03/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td>12.000</td>
                        <td>Venda</td>
                        <td>31/03/2021</td>
                    </tr>
    
                </tbody>
            </table>
            
        </Container>
    )
}