import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobAllDetails = () => {
    const Jobs=useLoaderData();
    const{id}=useParams();
    const idInt=parseInt(id);
    const job=Jobs.find(job=>job.id ===idInt)
    console.log(job)
    // toast section 
    const notify = () => toast("You are Application is successful ");


    console.log(Jobs,id)

    return (
        
        <div>
            <h1>Here is the job details{Jobs.length} </h1>
            <div className="grid grid-cols-4 gap-3 m-3 p-3">
                <div className="border md:col-span-3 m-5 p-4">
                   <h2> Here is the job details </h2>
                </div>
                <div >
                    <div className="border m-5 p-4 ">
                    <h2>here is the job applied </h2>
                    </div>
                    <div>
                    <button onClick={notify} className="bg-blue-700 text-white m-2 p-2 w-auto">Applied Jobs </button>
                    <ToastContainer></ToastContainer>

                    </div>
                    

                </div>
            </div>
            
        </div>
    );
};

export default JobAllDetails;