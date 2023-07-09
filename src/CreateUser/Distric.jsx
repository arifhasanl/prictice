import { useState } from "react";

const Distric = () => {


    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedDivision, setSelectedDivision] = useState('');
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

    const handleDistrictChange = (event) => {
      const district = event.target.value;
      setSelectedDistrict(district);
      setSelectedDivision('');
    };

    const handleDivisionChange = (event) => {
      const division = event.target.value;
      setSelectedDivision(division);
    };

    return (
      <div>
        <label htmlFor="district">Select District:</label>
        <select id="district" value={selectedDistrict} onChange={handleDistrictChange}>
          <option value="">-- Select District --</option>
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

        <br />

          <div className="border">
            <h3 htmlFor="division">Select Division:</h3>
            <select id="division" value={selectedDivision} onChange={handleDivisionChange}>
              <option value="">-- Select Division --</option>
              {divisionsByDistrict[selectedDistrict].map((division) => (
                <option key={division} value={division}>
                  {division}
                </option>
              ))}
            </select>
          </div>
      </div>
    );
  };



export default Distric;