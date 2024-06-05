import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "./ui/input";
import Licitacoes from "./licitacoes";
import { useState } from "react";
import ModalLicitacoes from "./modal_licitacoes";
import SideFiltros from "./side_filtros";

const Editais = () => {
    const [modalLicit, setModalLicit] = useState<boolean>(false);
    const [modalSideFiltro, setModalSideFiltro] = useState<boolean>(false);

    const handleModalLicitacao = (param: boolean) => {
        setModalLicit(param);
    }

    const handleSideFiltro = (param: boolean) => {
        setModalSideFiltro(param);
    }

    return (
        <div className="w-full py-6 px-6">
            {modalLicit && (<div className="absolute w-full h-full top-0 left-0 bg-zinc-800/20 z-30"></div>)}
            {modalLicit && (
                <ModalLicitacoes
                    handleModalLicitacao={handleModalLicitacao}
                />)}
            {modalSideFiltro && (<div className="absolute w-full h-full top-0 left-0 bg-zinc-800/30 z-20"></div>)}
            {modalSideFiltro && (
                <SideFiltros
                    handleSideFiltro={handleSideFiltro}
                />)}

            <div className="flex items-center gap-4 w-full h-20 py-2 px-4 bg-white rounded-lg shadow">
                <div className="relative flex items-center w-full">
                    <Input
                        type="text"
                        placeholder="Procurar"
                        className="py-6 px-6 rounded-3xl font-medium text-lg"
                    />
                    <Search
                        className="absolute right-4"
                    />
                </div>
                <div className="p-3 bg-greenLicit rounded-2xl">
                    <SlidersHorizontal
                        cursor="pointer"
                        onClick={() => handleSideFiltro(true)}
                    />
                </div>
            </div>

            <div className="flex flex-wrap gap-6 w-full py-8 overflow-auto">
                <Licitacoes handleModalLicitacao={handleModalLicitacao} />
                <Licitacoes handleModalLicitacao={handleModalLicitacao} />
                <Licitacoes handleModalLicitacao={handleModalLicitacao} />
                <Licitacoes handleModalLicitacao={handleModalLicitacao} />
                <Licitacoes handleModalLicitacao={handleModalLicitacao} />
                <Licitacoes handleModalLicitacao={handleModalLicitacao} />
            </div>
        </div>
    )
}

export default Editais;