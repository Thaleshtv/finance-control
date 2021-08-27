import { Sumary } from '../Sumary'
import { Container } from './styles'
import { TransactionsTable } from '../TransactionsTable'

export function Dashboard() {
    return(
        <Container>
            <Sumary />
            <TransactionsTable />
        </Container>
    )
}