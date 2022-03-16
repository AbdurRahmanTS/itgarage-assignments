import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import "./LeftContact.css"

const LeftContact = () => {
    return (
        <div>
            <ul className="social block">
                <li className="facebook"><p className="icon"><FacebookIcon /></p><p className="number">248k</p></li>
                <li className="twitter"><p className="icon"><TwitterIcon /></p><p className="number">30k</p></li>
                <li className="googleplus"><p className="icon"><GoogleIcon /></p><p className="number">124k</p></li>
                <li className="mailbox"><p className="icon"><MailOutlineIcon /></p><p className="number">89k</p></li>
            </ul>
        </div>
    );
};

export default LeftContact;