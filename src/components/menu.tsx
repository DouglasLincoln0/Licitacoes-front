import { NotepadTextDashed, StickyNote, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <aside className="flex flex-col gap-8 py-6 h-full w-96 bg-white">
            <div className='w-[100% - 48px] mx-6 flex gap-4 px-6 py-4 border rounded-lg'>
                <Link to="/home" className='flex gap-4'><StickyNote /> <span className='font-bold'>Editais </span></Link>
            </div>
            <div className='w-[100% - 48px] mx-6 px-6 py-4 border rounded-lg'>
                <Link to="/fornecedor" className='flex gap-4'><Truck /> <span className='font-bold'>Fornecedores </span></Link>
            </div>
            <div className='w-[100% - 48px] mx-6 px-6 py-4 border rounded-lg'>
                <Link to="/acompanhar" className='flex gap-4'><NotepadTextDashed /> <span className='font-bold'>Acompanhar </span></Link>
            </div>
        </aside>
    )
}

export default Menu;