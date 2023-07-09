import { Link } from "react-router-dom";


const Item = () => {
    return (
        <tbody>
            <tr>
                <th>1</th>
                <td>Sagor</td>
                <td>Hasan</td>
                <td>Admin</td>
                <td className="p-3 gap-0 w-32"><Link  to={'/edit'}><button className='bg-blue-600 px-6 py-2 rounded-md text-white'>Eid</button></Link></td>
                <td className="p-0 gap w-10"> <Link to={'/details'} className='bg-green-600 px-6 py-2 rounded-md text-white'><button>Details</button></Link></td>
                <td className="p-0 w-12"><button className='bg-red-600 px-6 py-2 rounded-md text-white'> Delete</button></td>
            </tr>
        </tbody>
    );
};

export default Item;