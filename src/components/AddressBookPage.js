import React, { Component } from 'react';
import './AddressBookPage.css';
import WorkPageLight from './WorkPageLight';
import AddBookImg from '../images/Picture-Project-AddBook.jpg';

class AddressBookPage extends Component {
    state = {}
    render() {
        const AddressBookCopy = "Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        return (
            <div className="address-book">
                <WorkPageLight url="/projects" workImage={AddBookImg} heading="Address Book" copy={AddressBookCopy} previous="/calculator" next="/todoapp" />
            </div>
        )
    }
}

export default AddressBookPage;