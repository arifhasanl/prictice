
import { Link } from 'react-router-dom';
import Item from './item';
import { useEffect, useState } from 'react';

const Main = () => {
    const [data,setData]=useState([]);
    const handleTab=(type)=>{
        console.log(type);
        fetch(`https://60f2479f6d44f300177885e6.mockapi.io/users?user_type={user_type}&?page={page_nu
        mber}&limit={no_of_item_to_get_in_a_call}`)
        .then(res=>res.json())
        .then(data=>{
            const result=data.filter(d=>d.user_type==type);
            setData(result)
        })
    }
    return (
        <div className='mt-16'>
            <div className='flex justify-between'>
                <div className='flex gap-5'>
                    <button onClick={()=>handleTab('admin')} className='bg-green-600 px-5 py-2 rounded-md text-white'>Admin</button>
                    <button onClick={()=>handleTab('emplyee')} className='bg-green-600 px-5 py-2 rounded-md text-white'>Emplyee</button>
                </div>
                <div>
                    <Link to={'/crateuser'}><button  className='bg-blue-700 px-5 rounded-md py-2 text-white'>Create New User</button></Link>
                    
                </div>
            </div>
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
                        <Item></Item>
                    }
                </table>
            </div>
        </div>
    );
};

export default Main;