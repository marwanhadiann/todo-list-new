// icon
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";



export default function TodoList({filter, filterItem,toggleChecked, onDelete, onEdit}) {

    // untuk mengubah format date ke lokal
    function formatDate(date) {
        return new Date(date).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
        })
    }

    return (
        <>
            {/* pembungkus list item */}
                <div className='mx-auto mt-5 pt-2 lg:w-[650px] h-60 overflow-auto'>

                    {/* jika data masih kosong */}
                    {filterItem.length === 0 ? (
                        <div className='flex justify-center items-center h-full'>
                            <ul>
                                <li className='md:text-2xl text-xl font-bold text-slate-600 italic text-shadow-xl'>{filter === 'all' ? 'Belum Ada Tugas yang Ditambahkan' : ''} </li>
                                <li className='md:text-2xl text-xl font-bold text-slate-600 italic text-shadow-xl'>{filter === 'active' ? 'Semua Tugas Selesai' : ''} </li>
                                <li className='md:text-2xl text-xl font-bold text-slate-600 italic text-shadow-xl'>{filter === 'complete' ? 'Belum Ada Tugas yang Selesai' : ''} </li>
                            </ul>
                        </div>
                    ) : (
                        <ul>
                            {filterItem.map((item) => (
                                <div key={item.id} className='bg-slate-50 mx-4 rounded-xl shadow-xl mb-5 relative'>
                                    <li>
                                        <input type="checkbox" className='flex absolute top-4 mx-3' checked={item.checked} onChange={() => toggleChecked(item.id)} />
                                        <span className='ml-9 text-shadow-lg' style={item.checked ? { textDecoration: 'line-through' } : {}}>
                                            {item.input}
                                            <p key={item.date} className='ml-[37px] text-sm font-light text-shadow-lg'>Deadline : {formatDate(item.date)}</p>
                                        </span>
                                        <button className='flex absolute right-3 top-3 cursor-pointer hover:scale-110' onClick={() => onDelete(item.id)}><RiDeleteBin5Fill size={20} className='' /></button>
                                        <button className='flex absolute right-10 top-3 cursor-pointer hover:scale-110' onClick={() => onEdit(item)}><MdEdit size={20} className='' /></button>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    )}
                </div>
        </>
    )
}