import { Container } from './styles';

import entradaImg from '../../assets/Entradas.svg'
import saidaImg from '../../assets/Saídas.svg'
import totalImg from '../../assets/Total.svg'

export function Sumary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradaImg} alt="entrada" />
                </header>
                <strong>R$1000</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={saidaImg} alt="saida" />
                </header>
                <strong>R$1000</strong>
            </div>
            <div className="divBackgroundGreen">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>R$1000</strong>
            </div>
            
        </Container>
    )
}