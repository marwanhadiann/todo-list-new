// icon
import { BiPlusCircle } from "react-icons/bi";


export default function TodoForm({ input, setInput, date, setDate, edit, onSubmit }) {

    

    return (
        <section className="w-full flex justify-center sm:items-center">
            {/* form input tugas dan deadline */}
            <form onSubmit={onSubmit}>
                <div className='w-full mt-8 flex flex-col gap-4 mx-auto items-center max-w-[500px] px-4 lg:flex-row lg:max-w-3xl lg:justify-center'>
                    <div className='lg:w-[300px] md:w-[500px] w-[300px]'>
                        <label htmlFor="date" className='font-medium text-sm'>Tugas</label>
                        <input type="text" placeholder='Tambahkan Tugas Anda' className='border-2 rounded-xl shadow-xl py-2 px-3 w-full mt-1.5 outline-0' value={input} onChange={(e) => setInput(e.target.value)} />
                    </div>
                    <div className='lg:w-[300px] md:w-[500px] w-[300px]'>
                        <label htmlFor="date" className='font-medium text-sm'>Deadline</label>
                        <input type="date" placeholder='Deadline Tugas' className='border-2 rounded-xl shadow-xl py-2 px-3 w-full mt-1.5 font-light' value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                </div>
                <div className='mx-12 mt-5 flex justify-center'>
                    <button className='bg-gray-950 border py-2 px-10 shadow-xl rounded-xl text-white font-semibold flex cursor-pointer outline-none hover:scale-105 transition delay-200 duration-200 ease-in-out'><BiPlusCircle size={25} className='mr-2' />{edit ? 'Update' : 'Tambah'}</button>
                </div>
            </form>
        </section>
    )
}