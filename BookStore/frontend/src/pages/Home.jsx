import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import BooksTable from '../components/home/BooksTable'
import BooksCard from '../components/home/BooksCard'


const Home = () => {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [showType, setShowType] = useState('table')
    useEffect(() => {
        setLoading(true)
        axios
            .get('http://localhost:5555/books')
            .then((res) => {
                setBooks(res.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, [])

    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'></div>
            <button
                className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                onClick={() => setShowType('table')}>Table
            </button>
            <button
                className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                onClick={() => setShowType('card')}>Card
            </button>
            <div className='flex justify-between items-center'>
                <h1 className='text-4xl my-8'>Books List</h1>
                {/* <h2 className='text-lg my-8 ml-4 text-slate-50 '>hello project </h2> */}
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
            {loading ? <Spinner /> : showType === 'table' ? (<BooksTable books={books} />) : (<BooksCard books={books} />)}
        </div>
    )
}

export default Home
