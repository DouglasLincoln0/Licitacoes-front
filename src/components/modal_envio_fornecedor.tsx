import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faEnvelopeRegular } from '@fortawesome/free-regular-svg-icons';
import { X } from 'lucide-react';

interface handleModalEnvioFornecedorProps {
    handleModalEnvioFornecedor: (param: boolean) => void;
}

const ModaLEnvioFornecedor = ({ handleModalEnvioFornecedor }: handleModalEnvioFornecedorProps) => {
    return (
        <div className='flex flex-col gap-2 max-h-96 overflow-y-auto'>
            <h1 className='flex items-center justify-between font-bold text-lg'>
                Escolher fornecedor
                <X cursor="pointer" onClick={() => handleModalEnvioFornecedor(false)} />
            </h1>
            <p className='text-zinc-500 font-semibold mb-2'>PREGÃO ELETRÔNICO Nº 22/2024 - PREFEITURA MUNICIPAL DE MATUPÁ - MT</p>

            <div className="flex justify-between items-center w-full py-3 px-4 rounded-xl border border-zinc-700/20">
                <h2>FORNECEDOR 1</h2>
                <div className='flex gap-4'>
                    <FontAwesomeIcon
                        icon={faWhatsapp}
                        size="2x"
                        className="text-green-500"
                        cursor="pointer"
                    />
                    <FontAwesomeIcon
                        icon={faEnvelopeRegular}
                        size="2x"
                        cursor="pointer"
                    />
                </div>
            </div>
            <div className="flex justify-between items-center w-full py-3 px-4 rounded-xl border border-zinc-700/20">
                <h2>FORNECEDOR 2</h2>
                <div className='flex gap-4'>
                    <FontAwesomeIcon
                        icon={faWhatsapp}
                        size="2x"
                        className="text-green-500"
                        cursor="pointer"
                    />
                    <FontAwesomeIcon
                        icon={faEnvelopeRegular}
                        size="2x"
                        cursor="pointer"
                    />
                </div>
            </div>
            <div className="flex justify-between items-center w-full py-3 px-4 rounded-xl border border-zinc-700/20">
                <h2>FORNECEDOR 3</h2>
                <div className='flex gap-4'>
                    <FontAwesomeIcon
                        icon={faWhatsapp}
                        size="2x"
                        className="text-green-500"
                        cursor="pointer"
                    />
                    <FontAwesomeIcon
                        icon={faEnvelopeRegular}
                        size="2x"
                        cursor="pointer"
                    />
                </div>
            </div>
        </div>
    )
}

export default ModaLEnvioFornecedor;