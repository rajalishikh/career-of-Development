import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Jobcatagorylist from "../JobCatagorylist/Jobcatagorylist";


const Home = () => {
    return (
        <div>
            <h1>This is a home </h1>
            <div className="mb-10"><Jobcatagorylist></Jobcatagorylist></div>
            <div>
            <FeaturedJobs></FeaturedJobs>

            </div>
            
            
            
            
            
        </div>
    );
};

export default Home;