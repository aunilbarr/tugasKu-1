import React from 'react';

function SearchBar() {
    return (
        <div className="border w-full rounded-lg py-2 pl-4 flex flex-col lg:flex-row items-center lg:mb-0 mb-2">
          <div className="flex items-center">
            <div className="inline-block mr-2">
              <svg className="w-6 h-6 stroke-current text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <form className="flex-auto lg:border-r lg:mr-4" >
              <input
                className="py-4 px-4 w-full"
                type="text"
                placeholder="Mulai cari tugasmu"/>
            </form>
          </div>
          <div>
            <label htmlFor="semester-select" className="mr-2">Semester:</label>
            <select id="semester-select"
              className="bg-white text-blue-600 font-semibold underline border p-1 rounded text-center"
            >
              <option value="All">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="6">7</option>
            </select>
          </div>
        </div>
    );
}

export default SearchBar;
