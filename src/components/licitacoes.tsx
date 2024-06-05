import { Button } from "./ui/button";

interface ModalLicitProps {
    handleModalLicitacao: (param: boolean) => void;
}

const Licitacoes = ({ handleModalLicitacao }: ModalLicitProps) => {

    return (
        <div className="flex flex-col gap-2 w-[370px] p-4 rounded-xl bg-white shadow">
            <h2 className="font-bold">PREGÃO ELETRÔNICO Nº 22/2024 - PREFEITURA MUNICIPAL DE MATUPÁ - MT - Mato Grosso</h2>
            <p className="text-zinc-600">PREGÃO ELETRÔNICO SISTEMA REGISTRO DE PREÇO PARA FUTURAS E EVENTUAIS AQUISIÇÕES DE MATERIAIS DE EXPEDIENTE, ESCRITÓRIOS, ESCOLARES, ENTRE OUTROS ITENS DO SEGMENTO EM ATENDIMENTO AS SECRETARIAS MUNICIPAIS DE MATUPÁ</p>
            <span className="text-sm text-zinc-600">Abertura em 07/06/2024 às 14:30</span>
            <Button
                className="w-44 bg-greenLicit hover:bg-bgGreenLicit text-black"
                onClick={() => handleModalLicitacao(true)}
            >
                PREGÃO ELETRÔNICO
            </Button>
        </div>
    )
}

export default Licitacoes;