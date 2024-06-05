import Editais from '@/components/editais'
import Header from '@/components/header'
import Menu from '@/components/menu'

export default function Home() {
  return (
    <div className='relative w-full h-screen bg-zinc-400/20 overflow-hidden'>
      <Header />
      <div className='flex h-full w-full'>
        <Menu />
        <Editais />
      </div>
    </div>
  )
}
