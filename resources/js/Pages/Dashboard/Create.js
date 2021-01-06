import React, {useEffect, useState} from 'react';
import Layout from '../../Shared/Layout'

function CreateTask() {
    const [values, setValues] = useState({
      mata_kuliah: "",
      abbrev: "",
      web_src: "",
      group_select: "",
      deadline_date: "",
      deadline_time: "",
    })

    function handleChange(e) {
      const key = e.target.id;
      const value = e.target.value
      setValues(values => ({
          ...values,
          [key]: value,
      }))
    }

    function handleSubmit(e) {
      e.preventDefault()
      Inertia.post('/users', values)
    }

    return (
    <Layout>
      <div className="max-w-4xl w-full">
        <form onSubmit={handleSubmit} className="flex flex-col justify-between items-start p-4">
            <div className="flex justify-between w-full">
                <div className="flex flex-col w-2/4 mr-4">
                    <label htmlFor="mata_kuliah">Mata Kuliah</label>
                    <input className="font-semibold underline border p-1 mb-2" type="text" id="mata_kuliah" onChange={handleChange}/>

                    <label htmlFor="abbrev">Singkatan</label>
                    <input className="font-semibold underline border p-1 mb-2" type="text" id="abbrev" onChange={handleChange}/>

                    <label htmlFor="web_src">Web Asal</label>
                    <input className="font-semibold underline border p-1 mb-2" type="text" id="web_src" onChange={handleChange}/>
                </div>

                <div className="flex flex-col w-2/4 mb-4">
                    <label htmlFor="group_select">Kelas</label>
                    <select id="group_select" className="bg-white border p-1 mb-2" onChange={handleChange}>
                        <option value="">Tidak ada Pembagian Kelas</option>
                        <option value="a">A</option>
                        <option value="b">B</option>
                    </select>

                    <label htmlFor="deadline_date">Tanggal Deadline</label>
                    <input className="font-semibold underline border p-1 mb-2" type="date" id="deadline_date" onChange={handleChange} />

                    <label htmlFor="deadline_time">Waktu Deadline</label>
                    <input className="font-semibold underline border p-1 mb-2" type="time" id="deadline_time" onChange={handleChange} />
                </div>
            </div>

            <button type="submit" className="px-4 py-2 bg-blue-600 rounded text-white">Submit</button>
        </form>
      </div>
    </Layout>
    );
}

export default CreateTask;
