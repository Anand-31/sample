import React from 'react';

class Footer extends React.Component{
    render(){
        return(
           <div style={{backgroundColor:"black", overflow:"hidden"}}>
                <div className="container text-center text-white">
                    <h6 className="pt-4">Copyright <strong>Bizpage.</strong>All Rights Reserved</h6>
                    <p className="p-2 mb-0">Designed by BootstrapMade</p>
                </div>
            </div>

            
        )
    }
}

export default Footer;
