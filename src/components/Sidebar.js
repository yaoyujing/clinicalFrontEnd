import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
export default function SidebarComp(props){
    return (<div className="sidebar">
        <Sidebar   rootStyles={{
            height:"800px",backgroundColor:"white", width:'200px'
         }}>
               <div className="flex gap-4">
                <Link to='/' className="w-[100px] h-[100px] mx-auto my-2"> <img src={logo} ></img></Link>
                  
               </div>
              
               <Menu >
                   
               <MenuItem component={<Link to="/addPatient" />}> Register Patient</MenuItem>
               <MenuItem component={<Link to="/" />}> To be continue..</MenuItem>
                 {/* <Link to={"/clinicals/" + patient._id}>{patient.firstName}</Link> */}
               </Menu>
        </Sidebar>
        {props.children}
        </div>
    )
}