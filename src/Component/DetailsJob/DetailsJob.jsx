import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const DetailsJob = ({JOb}) => {
    const {logo,job_title,company_name,}=JOb;
    return (
        <div>
           <div className="card max-w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={logo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  ">
    <h1> {job_title}</h1>
  
    <h2 className="card-title"> {company_name}</h2>
    {/* div for job  */}
    <div className='flex' >
      <p className='border border-sky-600 p-3 m-2 text-center'>Remote</p>
      <p className='border border-sky-600 p-3 m-2 text-center'>Full time </p>
    </div>
    {/* div for job location  */}
    <div className='flex'>
      {/* job location  */}
      <div className='flex '>
      <CiLocationOn className='text-2xl'></CiLocationOn>
      <p>  Dhaka, Bangladesh </p>

      </div>
      {/* salary section  */}

      <div className='flex'>
        <RiMoneyDollarCircleLine className='text-2xl'></RiMoneyDollarCircleLine>
        <p>Salary:10000k-30000k </p>
      </div>
    
     
    </div>

   
    <div className="card-actions">
      <button className="btn btn-primary">Show Details </button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default DetailsJob;
DetailsJob.propTypes={
    JOb:PropTypes.object.isRequired
}