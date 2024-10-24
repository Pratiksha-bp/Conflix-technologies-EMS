import{Link} from "react-router-dom"
function Customnav(){
    return(
        <>
        <div>
        <nav>
            <Link to={"/postuserdata"}>Add _User</Link>
            <Link to={"/getallusers"}>Get_All_Users</Link>
            <Link></Link>
            <Link></Link>
        </nav>
        </div>
        </>
    );
}

export default Customnav;