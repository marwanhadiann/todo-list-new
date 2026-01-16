// import component
import Sidebar from './Sidebar'
import TodoForm from './TodoForm'
import TodoFilter from './TodoFilter';
import TodoList from "./TodoList";
import { useState } from "react";

// icon
import { RiCalendarTodoFill } from "react-icons/ri";

export default function TodoApp() {



    const [input, setInput] = useState('');
    const [date, setDate] = useState('');
    //data default
    const [items, setItems] = useState([
        { id: 1, input: 'Membuat Website Todo List', date: '2025-12-23', checked: false },
        { id: 2, input: 'Membuat UI/UX', date: '2025-12-25', checked: false },
        { id: 3, input: 'Membuat Database', date: '2025-1-24', checked: false }
    ]);
    const [edit, setEdit] = useState(null);
    const [filter, setFilter] = useState('all'); //state untuk memfilter

    const keterangan = items.filter((item) => !item.checked).length; //untuk keterangan tugas yang belum selesai


    function handleSubmit(e) {
        e.preventDefault()

        if (!input.trim() || !date.trim()) return; //memvalidasi inputan yang kosong

        if (edit) {
            setItems(items.map(item => item.id === edit ? { ...item, input, date } : item));

            setEdit(null);
            setInput('');
            setDate('');

        } else {
            //untuk menambah item ke dalam list
            const newItem = { id: Date.now(), input, date, checked: false }
            setItems([newItem, ...items]),
                setInput(''),
                setDate('')
        }
    }

    // untuk mengaktifkan checked
    function toggleChecked(id) {
        setItems(
            (items) => items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        )
    }

    // untuk menghapus item
    function handleDelete(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    //untuk edit item
    function handleEdit(item) {
        setEdit(item.id);
        setInput(item.input);
        setDate(item.date);
    }

    //untuk memfilter item
    const filterItem = items.filter(item => {
        if (filter === 'active') return !item.checked;
        if (filter === 'complete') return item.checked;
        return true;
    });

    return (
        <div className='bg-gray-200 h-full w-full flex'>
            <Sidebar />
            <div className='flex flex-1 flex-col'>
                <main className='flex-1 flex justify-center items-center'>
                    {/* pembungkus Todo list */}
                    <div className='w-full max-w-md md:max-w-lg lg:max-w-3xl mx-auto'>
                        <div className='flex justify-center items-center pt-7'>
                            <RiCalendarTodoFill size={30} className='mr-3' />
                            <h1 className='text-3xl font-bold'> To do List App</h1>
                        </div>

                        <TodoForm
                            input={input}
                            setInput={setInput}
                            date={date}
                            setDate={setDate}
                            edit={edit}
                            onSubmit={handleSubmit} />

                        <TodoFilter
                            filter={filter}
                            setFilter={setFilter}
                            keterangan={keterangan} />

                        <TodoList
                            filter={filter}
                            filterItem={filterItem}
                            toggleChecked={toggleChecked}
                            onDelete={handleDelete}
                            onEdit={handleEdit} />
                    </div>
                </main>

                {/* footer */}
                <footer className='text-center text-gray-500 text-sm py-4'>
                    &copy; 2026 Todo List App by @mrwann.hdian
                </footer>
            </div>
        </div >
    )
}