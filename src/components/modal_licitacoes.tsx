import { ChevronDown, ChevronRight, ChevronUp, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import ModaLEnvioFornecedor from "./modal_envio_fornecedor";

interface handleModalLicitacaoProps {
    handleModalLicitacao: (param: boolean) => void;
}

const ModalLicitacoes = ({ handleModalLicitacao }: handleModalLicitacaoProps) => {
    const [modalEnvioFornecedor, setModalEnvioFornecedor] = useState<boolean>(false);

    const handleModalEnvioFornecedor = (param: boolean) => {
        setModalEnvioFornecedor(param);
    }

    return (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-2 w-[800px] p-6 rounded-2xl bg-white z-30">

            {modalEnvioFornecedor ? (
                <ModaLEnvioFornecedor handleModalEnvioFornecedor={handleModalEnvioFornecedor} />
            ) : (
                <>
                    <h2 className="w-full flex items-center justify-between font-bold">
                        PREGÃO ELETRÔNICO Nº 22/2024 <X cursor="pointer" onClick={() => handleModalLicitacao(false)} />
                    </h2>
                    <p className="text-zinc-600">
                        PREFEITURA MUNICIPAL DE MATUPÁ - MT
                    </p>
                    <p className="text-zinc-600">PREGÃO ELETRÔNICO SISTEMA REGISTRO DE PREÇO PARA FUTURAS E EVENTUAIS AQUISIÇÕES DE MATERIAIS DE EXPEDIENTE, ESCRITÓRIOS, ESCOLARES, ENTRE OUTROS ITENS DO SEGMENTO EM ATENDIMENTO AS SECRETARIAS MUNICIPAIS DE MATUPÁ</p>

                    <div className="flex flex-col gap-2 w-full p-4 border border-zinc-700/20 rounded-2xl">
                        <strong className="flex items-center justify-between">
                            Item 1 - BANDA MUSICAL: BANDA DE RENOME REGIONAL <ChevronUp />
                        </strong>

                        <p className="text-zinc-600">
                            BANDA MUSICAL: BANDA DE RENOME REGIONAL, COM 15 INTEGRANTES ENTRE MÚSICOS, CANTORES, BAILARINOS, TÉCNICOS E PRODUTORES, REPERTÓRIO COM BOM ACERVO, ECLÉTICO DE MÚSICAS POPULARES CLÁSSICAS E MODERNAS.
                        </p>

                        <div className="flex flex-col mt-4">
                            <strong>Unidade: <span className="font-normal">un - unidade</span></strong>
                            <strong>Quantidade: <span className="font-normal">1</span></strong>
                            <strong>Valor de referência (unitário): <span className="font-normal">R$ 25.000,00</span></strong>
                            <strong>Valor de referência (total): <span className="font-normal">R$ 25.000,00</span></strong>
                        </div>
                    </div>

                    <div className="w-full py-3 px-4 rounded-xl border border-zinc-700/20">
                        <h3 className="flex items-center justify-between">
                            Item 2 - BANDA MUSICAL: BANDA DE RENOME REGIONAL <ChevronDown />
                        </h3>
                    </div>
                    <div className="w-full py-3 px-4 rounded-xl border border-zinc-700/20">
                        <h3 className="flex items-center justify-between">
                            Item 3 - BANDA MUSICAL: BANDA DE RENOME REGIONAL <ChevronDown />
                        </h3>
                    </div>
                    <div className="w-full flex items-center justify-end">
                        <Button
                            className="flex items-center bg-bgGreenLicit hover:bg-greenLicit text-black"
                            onClick={() => handleModalEnvioFornecedor(true)}
                        >
                            Enviar para fornecedor <ChevronRight />
                        </Button>
                    </div>
                </>
            )}
        </div>
    )
}

export default ModalLicitacoes;