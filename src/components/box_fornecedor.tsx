import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const BoxFornecedor = () => {
    return (

        <div className="w-full flex items-center justify-between p-4 mb-4 bg-white rounded-3xl shadow">
            <div className="flex flex-col">
                <h2 className="font-bold">FORNECEDOR LTDA.</h2>
                <span className="text-zinc-600">05.311.244/0001.09</span>
                <span className="text-zinc-600">Tel: (11)9 5573-7956 - E-mail: example@email.com</span>
            </div>
            <div className="flex gap-6">
                <FontAwesomeIcon
                    icon={faPenToSquare}
                    size="xl"
                />
                <FontAwesomeIcon
                    icon={faTrashAlt}
                    size="xl"
                />
            </div>
        </div>
    )
}

export default BoxFornecedor;