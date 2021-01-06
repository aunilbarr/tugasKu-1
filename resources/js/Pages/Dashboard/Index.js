import React, {useEffect, useState} from 'react';
import SearchBar from '../../Shared/SearchBar';
import DATA from "../Homepage/data.js"
import CardWrapper from '../../Shared/CardWrapper'
import Layout from '../../Shared/Layout'
import { InertiaLink } from '@inertiajs/inertia-react'

function Testimony() {
    return (
        <h2>Testimony here</h2>
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

function Dashboard() {
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

    function addHandler() {
        console.log("adding card")
    }

    return (
    <Layout>
      <div className="max-w-4xl w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-4 lg:mb-2">
            <div className="flex flex-col">
                <h1 className="font-bold text-3xl sm:text-4xl leading-tight mb-2 text-center sm:text-left">Selamat datang admin</h1>
                <p className="text-gray-700 text-base text-center sm:text-left">
                    Buat, Teliti, Perbarui, dan Hapus tugas-tugas disini.
                </p>
            </div>
            <InertiaLink href="/admin/create" className="flex flex-row sm:flex-col items-center">
                <svg className="w-12 h-12 mr-4 stroke-current text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
                </svg>
                <span>Buat Tugas Baru</span>
            </InertiaLink>
        </div>
        {
            isLoaded ? (
                <>
                    <div className="w-full py-4 px-4 mx-auto">
                        <SearchBar
                            searchBarOnChange={handleSearchChange}
                            selectedGroup={groupValue}
                            groupOnChange={handleGroupChange}
                        />
                    </div>
                    <div className="px-4 lg:pt-4">
                        <CardWrapper
                            adminMode={true}
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
    </Layout>
    );
}

export default Dashboard;
