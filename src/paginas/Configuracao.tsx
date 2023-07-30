import Card from "../componentes/Card"
import Formulario from "../componentes/Formulario"
import ListaParticipantes from "../componentes/ListaParticipantes"
import Rodape from "../componentes/Rodape"
import { useSorteador } from "../state/hook/useSorteador"

const Configuracao = () => {

    const sorteador = useSorteador()

  console.log(sorteador)

    return (
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Formulario />
                <ListaParticipantes />
                <Rodape />
            </section>
        </Card>
    )
}

export default Configuracao