

const Detail = ({setDetails,singleData}) => {
    const { first_name, last_name, user_type, id } = singleData;
    return (
        <div className="fixed pt-16 inset-0 backdrop-blur-sm bg-black bg-opacity-5 w-full h-full flex justify-center items-center">
            <div className="bg-white w-96 h-96 p-4">
                <div className="text-end">
                    <button onClick={()=>setDetails(false)} className="px-2 py-2 border border-2">Close</button>
                </div>
                <h3 className="text-2xl mb-4"><span className="text-3xl font-bold">First Name:</span>{first_name}</h3>
                <h3 className="text-2xl mb-4"><span className="text-3xl font-bold">Last Name:</span>{last_name}</h3>
                <h3 className="text-2xl mb-4"><spna className="text-3xl font-bold">User Type:</spna>{user_type}</h3>
            </div>
        </div>
    );
};

export default Detail;