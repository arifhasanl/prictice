import { Link } from "react-router-dom";


const Edit = (id) => {
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
        fetch(`https://60f2479f6d44f300177885e6.mockapi.io/users/${id}`, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data,'data');
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className="mt-16">
            <div className="card-body w-96 mx-auto border">
                <form onSubmit={upDateUser}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Frist Name</span>
                        </label>
                        <input type="text" placeholder="Frist Name" name='fristname' className="input input-bordered" />
                    </div>
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" placeholder="Last Name" name='lastname' className="input input-bordered" />
                    </div>
                    <div className="form-control mb-4">

                        <label className="label">
                            <span className="label-text">Select User Type</span>
                        </label>
                        <div className='border'>
                            <select name='usertype' className="select border w-full max-w-xs">
                                <option>admin</option>
                                <option>emplyee</option>
                            </select>
                        </div>
                    </div>
                        <input className="bg-blue-600 px-6 py-2 rounded-md text-white mr-4" type="submit" value="Update User" />
                        <Link to={'/'}><button className='bg-blue-600 px-6 py-2 rounded-md text-white'>Cencel</button></Link>
                </form>

            </div>
          
        </div>
    );
};

export default Edit;