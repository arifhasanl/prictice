
import { Link } from 'react-router-dom';
import Item from './item';
import { useEffect, useState } from 'react';
import CreateUser from '../CreateUser/CreateUser';

const Main = () => {
    const [data,setData]=useState([]);
    const [modal,setModal]=useState(false);
    const [type,setType]=useState('')
    const handleTab=(type)=>{
        setType(type);
        fetch(`https://60f2479f6d44f300177885e6.mockapi.io/users?user_type=${type}&?page=${1}&limit=${10}`)
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    }
    return (
        <div className='mt-16'>
            <div className='flex justify-between mb-10'>
                <div className='flex gap-5'>
                    <button onClick={()=>handleTab('admin')} className='bg-green-600 px-5 py-2 rounded-md text-white'>Admin</button>
                    <button onClick={()=>handleTab('emplyee')} className='bg-green-600 px-5 py-2 rounded-md text-white'>Emplyee</button>
                </div>
                <div>
                    <Link onClick={()=>setModal(true)}><button  className='bg-blue-700 px-5 rounded-md py-2 text-white'>Create New User</button></Link>
                    
                </div>
            </div>
            {
                type=='admin'&&<h3 className='bg-green-600 capitalize text-white py-2 rounded-md px-3 inline'>{type}</h3>
            }
            <div className="overflow-x-auto mt-5">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className='text-3xl text-black'>
                        <tr>
                            <th>ID</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>TYPE</th>
                            <th></th>
                            <th>ACTION</th>
                            <th></th>
                        </tr>
                        <hr></hr>
                    </thead>
                    {
                        data.map(singleData=><Item key={singleData.id}singleData={singleData} data={data}setData={setData}></Item>)
                    }
                </table>
            </div>
           <div >
           {
                modal&&<CreateUser setModal={setModal} setData={setData} data={data}></CreateUser>
            }
            
           </div>
        </div>
    );
};

export default Main;