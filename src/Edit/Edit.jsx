import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Edit = ({data,setData,setEditModal,id,singleData}) => {
    const { first_name, last_name, user_type,  } = singleData;
    const upDateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.fristname.value;
        const lastName = form.lastname.value;
        const userType = form.usertype.value;
        const userInfo = {
            first_name: firstName,
            last_name: lastName,
            user_type: userType,
        }

            Swal.fire({
                title: 'Are you sure Update?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Update !'
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://60f2479f6d44f300177885e6.mockapi.io/users/${id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => res.json())
                        .then((dt) => {
                            console.log(dt);
                            Swal.fire(
                                'Updated!',
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
            <div className="fixed pt-16 inset-0 backdrop-blur-sm bg-black bg-opacity-5 w-full h-full">
                <div className="card-body w-96 bg-white mx-auto border">
                    <form onSubmit={upDateUser}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Frist Name</span>
                            </label>
                            <input type="text" placeholder="Frist Name" defaultValue={first_name} name='fristname' className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" placeholder="Last Name"defaultValue={last_name} name='lastname' className="input input-bordered" />
                        </div>
                        <div className="form-control mb-4">

                            <label className="label">
                                <span className="label-text">Select User Type</span>
                            </label>
                            <div className='border'>
                                <select name='usertype'defaultValue={user_type} className="select border w-full max-w-xs">
                                    <option >admin</option>
                                    <option >emplyee</option>
                                </select>
                            </div>
                        </div>
                        <input className="bg-blue-600 px-6 py-2 rounded-md text-white mr-4" type="submit" value="Update User" />
                        <Link ><button onClick={() => setEditModal(false)} className='bg-red-600 px-6 py-2 rounded-md text-white'>Cencel</button></Link>
                    </form>

                </div>

            </div>
        );
        };

    export default Edit;
















