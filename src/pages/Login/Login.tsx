import imgLogin from '@/assets/img-login.png';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
    username: z.string().min(6, { message: 'Usuário minimo de 6 caracteres.' }),
    password: z.string().min(6, { message: 'Senha minima de 6 caracteres.' }),
})

export default function Login() {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            password: ''
        },
    });

    const handleIconPassword = () => {
        if (showPassword) {
            setShowPassword(false);
        }
        else {
            setShowPassword(true);
        }
    }

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const { username, password } = values;
        console.log(username);
        console.log(password);
    }

    return (
        <div className='flex flex-col lg:flex-row w-full h-screen'>
            <div className='flex items-center justify-center md:w-full lg:w-[50%] h-[70%] md:h-[60%] lg:h-full bg-white'>
                <div className='w-[400px] sm:w-[500px] md:w-[580px] lg:w-[629px] md:h-[380px] lg:h-[429px]'>
                    <img
                        src={imgLogin}
                        alt="Imagem inicial de login"
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
            <div className='flex items-center justify-center md:w-full lg:w-[50%] h-full bg-[#D9D9D9]'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col w-[500px] rounded-2xl p-6 gap-6 bg-white'>
                        <h2 className='text-2xl text-zinc-700'>Entrar</h2>
                        <FormField
                            control={form.control}
                            name='username'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder='Email'
                                            className='bg-zinc-500/20 rounded-3xl py-6'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                    </FormLabel>
                                    <FormControl>
                                        <div className='relative'>
                                            <Input
                                                type={`${!showPassword ? 'password' : 'text'}`}
                                                placeholder='Senha'
                                                className='bg-zinc-500/20 rounded-3xl py-6'
                                                {...field}
                                            />
                                            <span
                                                onClick={handleIconPassword}
                                                className='absolute top-2 right-2'
                                            >
                                                {showPassword ? <EyeOff size={30} /> : <Eye size={30} />}
                                            </span>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className='flex justify-between'>
                            <Button
                                type='button'
                                className='bg-transparent border border-greenLicit py-6 text-zinc-700 rounded-3xl hover:bg-transparent text-[16px]'
                            >
                                Esqueci a senha
                            </Button>
                            <Button
                                type='submit'
                                className='flex gap-4 bg-greenLicit text-zinc-700 rounded-3xl py-6 text-[16px] hover:bg-bgGreenLicit'
                            >
                                Entrar
                                <ArrowRight />
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}
