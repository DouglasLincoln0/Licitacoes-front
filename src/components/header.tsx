import { Bell } from "lucide-react";
import imgUser from '@/assets/img-user.png';

const Header = () => {
    return (
        <header className="flex items-center justify-between px-8 w-full h-20 border-b border-zinc-500/20 bg-white">
            <h1 className="font-oswald text-lct text-3xl">LCT</h1>
            <div className="flex items-center gap-8">
                <Bell size={22} />
                <div className="w-10">
                    <img
                        src={imgUser}
                        alt="Foto do usuário"
                        className="rounded-full"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;