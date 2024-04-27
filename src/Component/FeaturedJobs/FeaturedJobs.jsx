import { useEffect, useState } from "react";
import DetailsJob from "../DetailsJob/DetailsJob";


const FeaturedJobs = () => {
    const [job,setJob]=useState([]);
    const[lengthJob,setLengthJob]=useState(4);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJob(data))
    },[])
    return (
        <div>
            <h1 className="text-6xl text-center">This is a featured jobs :{job.length} </h1>
           <div className="grid  grid-cols-2 gap-24">
           {
                job.slice(0,lengthJob).map(item=><DetailsJob key={item.id} JOb={item}></DetailsJob>)
            }
           </div>
           <div>
           <div onClick={()=>setLengthJob(job.length)} className={lengthJob === job.length && 'hidden'}>
      <button className="btn btn-primary">Show All Job </button>
    </div>
           </div>

           
            
        </div>
    );
};

export default FeaturedJobs;