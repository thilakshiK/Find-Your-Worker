import React, { Component } from 'react';
import ClientNavComponent from '../../Navbar/clientnav';
import ClientEditProfileComponent  from "./clientEditProfile";

class ClientProfileComponent extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <ClientNavComponent/>
                <ClientEditProfileComponent />
            </div>
        );
    }
}
 
export default ClientProfileComponent;