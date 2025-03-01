import React, {useEffect, useState} from 'react';
import SearchBar from '../components/SearchBar';
import DATA from "./data.js"
import CardWrapper from '../components/CardWrapper';

function Testimony() {
    return (
        <div className="justify-between hidden lg:flex">
            <div className="flex flex-col items-center w-3/12">
                <svg className="w-10 h-10 mb-2 stroke-current text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
                <span className="text-center leading-tight text-sm">Tak perlu login, Cukup gunakan fitur pencarian dibawah ini</span>
            </div>
            <div className="flex flex-col items-center w-3/12">
                <svg className="w-10 h-10 mb-2 stroke-current text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                <span className="text-center leading-tight text-sm">Pengampu bisa melihat dan mengkondisikan jumlah tugas mahasiswa</span>
            </div>
            <div className="flex flex-col items-center w-3/12">
                <svg className="w-10 h-10 mb-2 stroke-current text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <span className="text-center leading-tight text-sm">Dibuat dan dipelihara oleh, dari, dan untuk Mahasiswa</span>
            </div>
        </div>
    )
}

function EmptyMessage() {
    return (
        <div className="items-center justify-center flex">
            <svg className="w-16 h-16 stroke-current text-blue-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-center leading-tight text-gray-700">Data tidak ditemukan (hooray?), silahkan lihat panduan mengapa data tidak ditemukan</span>
        </div>
    )
}

function Homepage() {
    const [tasks, setTasks] = useState([])
    const [filtered, setFiltered] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [groupValue, setGroupValue] = useState('all')
    const [noDataFoundComponent, setNoDataFoundComponent] = useState(() => <Testimony />)

    useEffect(() => {
        // calls API here
        setTasks(DATA)
        setIsLoaded(true)
    }, [])

    function handleSearchChange(value) {
        setSearchValue(value)
    }

    useEffect(() => {
        let filteredTasks = []
        if (searchValue) {
            filteredTasks = tasks.filter((task) => {
                const regex = new RegExp(searchValue, 'gi')
                return task.abbrev.match(regex) || task.subject.match(regex)
            })
            setNoDataFoundComponent(<EmptyMessage />)
        } else {
            setNoDataFoundComponent(<Testimony />)
        }

        if (groupValue !== 'all') {
            filteredTasks = filteredTasks.filter((task) => {
                if (task.group) {
                    return task.group.toLowerCase() === groupValue
                }
                return false
            })
        }

        setFiltered(filteredTasks)
    }, [searchValue, groupValue])

    function handleGroupChange(value) {
        setGroupValue(value)
    }

    return (
      <div className="max-w-4xl">
        <div className="w-full py-4 px-4 flex flex-col items-center lg:mb-2">
            <h1 className="font-bold text-4xl leading-tight mb-2 text-center">Temukan tugasmu dengan Mudah.</h1>
            <p className="text-gray-700 text-base text-center">
                kami para kontributor menyatukan semua tugas Teknik Informatika yang terpencar
                dari beberapa website pembelajaran Universitas Islam Negeri Sunan Kalijaga.
            </p>
        </div>
        {
            isLoaded ? (
                <>
                    <div className="py-4 px-4 mx-auto">
                        <SearchBar
                            searchBarOnChange={handleSearchChange}
                            selectedGroup={groupValue}
                            groupOnChange={handleGroupChange}
                        />
                    </div>
                    <div className="px-4 lg:pt-4">
                        <CardWrapper
                            cards={filtered}
                            emptyComponent={noDataFoundComponent}
                        />
                    </div>
                </>
            ) : (
                <div className="flex items-center justify-center">
                    <svg className="w-6 h-6 animate-spin mr-2 stroke-current text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                    <span className="font-medium text-gray-500">Memuat tugas...</span>
                </div>
            )
        }
      </div>
    );
}

export default Homepage;

