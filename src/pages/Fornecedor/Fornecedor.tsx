import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Menu from '@/components/menu'
import BoxFornecedor from "@/components/box_fornecedor";
import Header from "@/components/header";
import { useState } from "react";
import CadastrarNovoFornecedor from "@/components/cadastrar_novo_fornecedor";

const Fornecedor = () => {
  const [modalRegisterSupplier, setModalRegisterSupplier] = useState<boolean>(false);

  const handleRegisterSupplier = (param: boolean) => {
    setModalRegisterSupplier(param);
  }

  return (
    <div className='relative w-full h-screen bg-zinc-400/20 overflow-hidden'>
      <Header />
      <div className='flex h-full w-full'>
        <Menu />
        {modalRegisterSupplier
          ? (
            <CadastrarNovoFornecedor
              handleRegisterSupplier={handleRegisterSupplier}
            />
          )
          : (
            <div className='w-full mt-6 mb-20 px-6 flex flex-col items-end overflow-y-auto'>
              <Button
                className="bg bg-greenLicit hover:bg-bgGreenLicit mb-4 p-6 rounded-2xl text-zinc-700 text-md"
                onClick={() => handleRegisterSupplier(true)}
              >
                <Plus />
                Adicionar novo fornecedor
              </Button>

              <BoxFornecedor />
              <BoxFornecedor />
              <BoxFornecedor />
              <BoxFornecedor />
              <BoxFornecedor />
              <BoxFornecedor />
              <BoxFornecedor />
              <BoxFornecedor />
              <BoxFornecedor />
            </div>
          )}
      </div>
    </div>
  )
}

export default Fornecedor;