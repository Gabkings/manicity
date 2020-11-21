import React from 'react'
import {Link} from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import {firebase} from '../../../firebase'

function AdminNav() {

 const links = [
        {
            linkTo: "/admin_matches",
            title: "Matches"
        }
        ,{
            linkTo: "/admin_add_match",
            title: "Add Matches"
        },{
            linkTo: "/admin_player",
            title: "Players"
        },{
            linkTo: "/admin_add_player",
            title: "Add Matches"
        },
    ]

    const renderLinks = () =>(
        links.map((link) => (
            <Link to={link.linkTo} key={link.title}>
                <ListItem button style={{color:'#ffffff',
                 fontWeight: '300', borderBottom:"1px solid #ff32aa", fontSize:'20px'}}>
                    {link.title}
                </ListItem>
            </Link>
        ))
    )

    const logoutHandler = ()=>{
        firebase.auth().signOut()
        .then(()=>{
            console.log("Logout successful")
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }


    return (
        <div>
            {renderLinks()}
            <ListItem button style={{color:'#ffffff',
                 fontWeight: '300', borderBottom:"1px solid #ff32aa", fontSize:'20px'}}
                 onClick={() => logoutHandler()}
                 >
                     Log Out
                 </ListItem>
        </div>
    )
}

export default AdminNav
