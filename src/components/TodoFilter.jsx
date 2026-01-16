export default function TodoFilter({filter, setFilter, keterangan}) {
    return (
        <>
            {/* fitur untuk filter tugas dan keterangan */}
                <div className='lg:mx-[90px]  mt-10 relative'>
                    <button className={`md:text-sm text-xs cursor-pointer hover:scale-105 ${filter === 'all' ? 'underline font-semibold' : ''}`} onClick={() => setFilter('all')}>Semua</button>
                    <span className='px-2'>|</span>
                    <button className={`md:text-sm text-xs cursor-pointer hover:scale-105 ${filter === 'active' ? 'underline font-semibold' : ''}`} onClick={() => setFilter('active')}>Belum Selesai</button>
                    <span className='px-2'>|</span>
                    <button className={`md:text-sm text-xs cursor-pointer hover:scale-105 ${filter === 'complete' ? 'underline font-semibold' : ''}`} onClick={() => setFilter('complete')}>Selesai</button>

                    <span className='absolute right-0 self-center md:text-sm text-xs'>Ket : {keterangan} Tugas Belum Selesai</span>
                </div>
        </>
    )
}