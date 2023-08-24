import React, { useRef } from 'react'
import axiosClient from '../../../axios-client';

export default function AddCatagory() {
    const catagoryRef = useRef();

    const onSave = () => {
        console.log('save clicked');
        const load = {
            catagory: catagoryRef.current.value
        }
        axiosClient.post('/add-catagory', load)
            .then(({data}) => {
                console.log('ADD catagory success.');
            })
    }

    return (
        <div className='h-full'>
            {/* Heading */}
            <div className="">
                <h2 className='text-2xl font-semibold text-blue-900'>
                    Add New Blogs Catagory.
                </h2>
            </div>



            {/* members list */}
            <div className="flex flex-col h-[90%] bg-white">

                <div className="flex flex-col bg-blue-100 rounded-lg w-[80%] px-4 py-10 m-auto">

                    <label className="block text-sm font-medium text-slate-700">Catagory</label>
                    <div className="mt-1 mb-8">
                        <input ref={catagoryRef} type="email" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter catagory." onChange={({ value }) => {
                            console.log(value);
                        }} />
                    </div>
                    <div onClick={onSave} className="bg-sky-500 hover:bg-sky-700 px-5 w-32 self-end py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
                        Save
                    </div>
                </div>
            </div>
        </div>
    )
}
