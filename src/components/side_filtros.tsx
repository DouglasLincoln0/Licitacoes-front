import { ChevronDown, X } from "lucide-react"
import { Button } from "./ui/button";

interface SideFiltrosProps {
    handleSideFiltro: (param: boolean) => void;
}

const SideFiltros = ({ handleSideFiltro }: SideFiltrosProps) => {
    return (
        <aside className="w-full max-w-md h-full absolute right-0 top-0 p-6 bg-white z-40">
            <div className="w-full h-full relative">
                <h1 className="flex items-center justify-between font-bold text-2xl">
                    Filtros
                    <X
                        cursor="pointer"
                        className="text-zinc-600"
                        onClick={() => handleSideFiltro(false)}
                    />
                </h1>

                <div className="mt-4 w-full px-4 py-2 rounded-3xl bg-zinc-600/10">
                    <span className="flex items-center justify-between text-zinc-600 text-lg">
                        Estado
                        <ChevronDown />
                    </span>
                </div>
                <div className="mt-4 w-full px-4 py-2 rounded-3xl bg-zinc-600/10">
                    <span className="flex items-center justify-between text-zinc-600 text-lg">
                        Cidade
                        <ChevronDown />
                    </span>
                </div>

                <div className="absolute bottom-0 right-0 w-full flex items-center justify-end">
                    <Button
                        className="bg-greenLicit text-zinc-800 rounded-3xl py-6 px-6 hover:bg-bgGreenLicit"
                    >
                        Aplicar filtros
                    </Button>
                </div>
            </div>
        </aside>
    )
}

export default SideFiltros;