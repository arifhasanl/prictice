import { useState } from "react";
import Swal from "sweetalert2";

const CreateUser = ({ setModal}) => {
    const [selectedDistrict, setSelectedDistrict] = useState([]);
    const [selectedDivision, setSelectedDivision] = useState('');
    const [type, setType] = useState('')
    console.log(type);
    const divisionsByDistrict = {
        Dhaka: ['Dhaka', 'Gazipur', 'Narayanganj'],
        Chittagong: ['Chittagong', 'Coxs Bazar', 'Rangamati'],
        Rangpur: ['Rangpur', 'Gaibandha', 'Kurigram', 'Nilphamari', 'Lalmonirhat', 'Dinajpur', 'Thakurgaon', 'Panchagarh',],
        Sylhet: ['Sylhet ', 'Habiganj ', 'Maulvibazar ', 'Sunamganj '],
        Rajshahi: ['Natore', 'Rajshahi', 'Sirajganj', 'Pabna', 'Bogura', 'Chapainawabganj', 'Naogaon', 'Joypurhat'],
        Mymensingh: ['Mymensingh', 'Jamalpur', 'Netrokona', 'Sherpur'],
        Khulna: ['Bagerhat', 'Chuadanga', '	Jashore', 'Jhenaidah', 'Khulna', '	Kushtia', '	Magura', 'Meherpur', 'Narail', 'Satkhira'],
        Barisal: ['Barisal', 'Barguna', 'Bhola', 'Jhalokati', 'Patuakhali', 'Pirojpur']

    };
    const CreateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.fristname.value;
        const lastName = form.lastname.value;
        const userType = form.usertype.value;
        const division = form.division.value;
        const district = form.district.value;

        const userInfo = {
            first_name: firstName,
            last_name: lastName,
            user_type: userType,
            division: division,
            district: district
        }
        console.log(userInfo);
        fetch('https://60f2479f6d44f300177885e6.mockapi.io/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(() => {
                form.reset()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.log(error);
            })

    }
    const handleDistrictChange = (event) => {
        const district = event.target.value;
        setSelectedDistrict(district);
        setSelectedDivision('');
    };

    const handleDivisionChange = (event) => {
        const division = event.target.value;
        setSelectedDivision(division);
    };
    const handleType = (event) => {
        const type = event.target.value;
        setType(type)

    }
    return (
        <div className=" fixed pt-16 inset-0 backdrop-blur-sm bg-black bg-opacity-5 w-full h-full ">
            <div className="card-body  bg-white w-96 mx-auto border">
                <div className=" text-end">

                    <button onClick={() => setModal(false)} className="px-2 py-2 border border-2 inline">Close</button>

                </div>
                <form onSubmit={CreateUser}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Frist Name</span>
                        </label>
                        <input type="text" required placeholder="Frist Name" name='fristname' className="input input-bordered" />
                    </div>
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" required placeholder="Last Name" name='lastname' className="input input-bordered" />
                    </div>
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text">Select User Type</span>
                        </label>
                        <div className='border'>
                            <select name='usertype' required onChange={handleType} className="select border w-full max-w-xs">
                                <option value="">select type</option>
                                <option value="admin">admin</option>
                                <option value="emplyee">emplyee</option>
                            </select>
                        </div>
                    </div>
                    {
                        type && <>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Select Divison:</span>
                                </label>
                                <div className='border'>
                                    <select name='division' required value={selectedDistrict} onChange={handleDistrictChange} className="select border w-full max-w-xs">
                                        <option value="">Select type</option>
                                        <option value="Rangpur">Rangpur</option>
                                        <option value="Rajshahi">Rajshahi</option>
                                        <option value="Mymensingh">Mymensingh</option>
                                        <option value="Sylhet">Sylhet</option>
                                        <option value="Dhaka">Dhaka</option>
                                        <option value="Khulna">Khulna</option>
                                        <option value="Barisal">Barisal</option>
                                        <option value="Chittagong">Chittagong</option>

                                    </select>
                                </div>
                            </div>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Select Dristic:</span>
                                </label>
                                <div className="border">
                                    <select name="district" value={selectedDivision} onChange={handleDivisionChange} className="select border w-full max-w-xs">
                                        <option value="">Select Dristic</option>
                                        {divisionsByDistrict[selectedDistrict]?.map((division) => (
                                            <option key={division} value={division}>
                                                {division}
                                            </option>
                                        ))}

                                    </select>
                                </div>
                            </div>
                        </>
                    }


                    <div className="form-control mt-6">
                        <input  className="btn btn-primary" type="submit" value="Creat User" />
                    </div>
                </form>

            </div>

        </div>
    );
};

export default CreateUser;


