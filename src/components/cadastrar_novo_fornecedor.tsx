import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import z from 'zod';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
    nome: z.string(),
    cnpj: z.string().min(11, { message: 'CNPJ Precisa de 11 caracteres' }),
    email: z.string().email(),
    telefone: z.string(),
    logradouro: z.string(),
    numero: z.number().nullable(),
    bairro: z.string(),
    cidade: z.string(),
    estado: z.string(),
});

interface InputFormProps {
    name: string;
    placeholder: string;
    control: any;
}

interface handleRegisterSupplierProps {
    handleRegisterSupplier: (param: boolean) => void;
}

const InputForm = ({ name, placeholder, control }: InputFormProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            className="w-full px-6 py-6 rounded-3xl text-lg bg-zinc-500/10 border border-zinc-500/10"
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        >
        </FormField>
    )
}

const CadastrarNovoFornecedor = ({ handleRegisterSupplier }: handleRegisterSupplierProps) => {
    const [proximo, setProximo] = useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: "",
            cnpj: "",
            email: "",
            telefone: "",
            logradouro: "",
            numero: null,
            bairro: "",
            cidade: "",
            estado: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }

    const handleProximo = (param: boolean) => {
        setProximo(param);
    }

    return (
        <div className="relative w-full flex flex-row-reverse justify-center">
            {!proximo ? (
                <>
                    <Button
                        className="absolute right-6 top-4 flex gap-4 px-8 py-6 rounded-3xl text-zinc-800 text-lg bg-greenLicit hover:bg-bgGreenLicit"
                        onClick={() => handleRegisterSupplier(false)}
                    >
                        <ArrowLeft />  Voltar
                    </Button>
                    <div className="w-full max-w-2xl max-h-[730px] mt-2 px-8 py-2 bg-white rounded-2xl">
                        <h1 className="font-bold text-2xl mb-3">Cadastrar novo fornecedor</h1>
                        <span className="flex mb-4">Informações básicas</span>
                        <div>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
                                    <InputForm
                                        control={form.control}
                                        name="nome"
                                        placeholder="Nome"
                                    />
                                    <InputForm
                                        control={form.control}
                                        name="cnpj"
                                        placeholder="CNPJ"
                                    />
                                    <InputForm
                                        control={form.control}
                                        name="email"
                                        placeholder="E-mail"
                                    />
                                    <InputForm
                                        control={form.control}
                                        name="telefone"
                                        placeholder="Telefone"
                                    />
                                    <h2 className="text-lg font-medium">Endereço</h2>
                                    <InputForm
                                        control={form.control}
                                        name="logradouro"
                                        placeholder="Logradouro"
                                    />
                                    <InputForm
                                        control={form.control}
                                        name="numero"
                                        placeholder="Número"
                                    />
                                    <div className="flex w-full gap-4">
                                        <div className="w-1/2">
                                            <InputForm
                                                control={form.control}
                                                name="bairro"
                                                placeholder="Bairro"
                                            />
                                        </div>
                                        <div className="w-1/2">
                                            <InputForm
                                                control={form.control}
                                                name="cidade"
                                                placeholder="Cidade"
                                            />
                                        </div>
                                    </div>
                                    <Select>
                                        <SelectTrigger className="border p-6 border-zinc-500/10 text-lg bg-zinc-500/10 rounded-3xl">
                                            <SelectValue placeholder="Estado" />
                                        </SelectTrigger>
                                        <SelectContent className="border-zinc-500/10">
                                            <SelectItem value="light">Light</SelectItem>
                                            <SelectItem value="dark">Dark</SelectItem>
                                            <SelectItem value="system">System</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <div className="w-full flex justify-end">
                                        <Button className="flex items-center gap-4 px-8 py-6 rounded-3xl text-zinc-800 text-lg bg-greenLicit hover:bg-bgGreenLicit"
                                            onClick={() => handleProximo(true)}
                                        >
                                            Próximo <ArrowRight />
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <Button className="absolute right-6 top-4 flex gap-4 px-8 py-6 rounded-3xl text-zinc-800 text-lg bg-greenLicit hover:bg-bgGreenLicit"
                        onClick={() => handleProximo(false)}
                    >
                        <ArrowLeft />  Voltar
                    </Button>
                    <div className="w-full max-w-xl h-72 mt-24 px-8 py-2 bg-white rounded-2xl">
                        <h1 className="font-bold text-2xl mb-3">Cadastrar novo fornecedor</h1>
                        <span className="flex mb-4">Áreas de atuação</span>

                        <Select>
                            <SelectTrigger className="border p-6 border-zinc-500/10 text-lg bg-zinc-500/10 rounded-3xl">
                                <SelectValue placeholder="Selecione um local" />
                            </SelectTrigger>
                            <SelectContent className="border-zinc-500/10">
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>

                        <div className="flex gap-4 w-full h-20 p-4 overflow-x-auto">
                            <div className="flex items-center justify-center gap-3 px-4 text-greenLicit rounded-3xl border border-green-50/10 bg-greenLicit/10">
                                Piauí <X color="blue" size={20} />
                            </div>
                            <div className="flex items-center justify-center gap-3 px-4 text-greenLicit rounded-3xl border border-green-50/10 bg-greenLicit/10">
                                Federal <X color="blue" size={20} />
                            </div>
                        </div>
                        <div className="w-full flex justify-end">
                            <Button className="px-8 py-6 mt-2 bg-greenLicit hover:bg-bgGreenLicit rounded-3xl text-zinc-800 text-lg">
                                Finalizar
                            </Button>
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}

export default CadastrarNovoFornecedor;