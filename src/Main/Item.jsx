
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Edit from "../Edit/Edit";
import Detail from "../Details/Detail";


const Item = ({ singleData, data, setData,  }) => {

    const { first_name, last_name, user_type, id } = singleData;
    const [editModal, setEditModal] = useState(false);
    const [details,setDetails]=useState(false)
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure Delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://60f2479f6d44f300177885e6.mockapi.io/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        const result = data.filter(dt => dt.id !== id)
                        setData(result)
                    })

            }
        })

    }
    return (

        <>
            <tbody>
                <tr>
                    <th>{id}</th>
                    <td>{first_name}</td>
                    <td>{last_name}</td>
                    <td>{user_type}</td>
                    <td className="p-3 gap-0 w-32"><Link><button onClick={() => setEditModal(true)} className='bg-blue-600 px-6 py-2 rounded-md text-white'>Eid</button></Link></td>
                    <td className="p-0 gap w-10"> <Link  className='bg-green-600 px-6 py-2 rounded-md text-white'><button onClick={()=>setDetails(true)}>Details</button></Link></td>
                    <td className="p-0 w-12"><button onClick={() => handleDelete(id)} className='bg-red-600 px-6 py-2 rounded-md text-white'> Delete</button></td>
                </tr>
            </tbody>
            {
                editModal && <Edit setEditModal={setEditModal} singleData={singleData} setData={setData}id={id} data={data}></Edit>
            }
            {
                details&&<Detail setDetails={setDetails} singleData={singleData}></Detail>
            }
        </>
    );
};

export default Item;