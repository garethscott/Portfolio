import React, { Component } from 'react';
import './AddressBookPage.css';
import WorkPageLight from './WorkPageLight';
import AddBookImg from '../images/Picture-Project-AddBook.jpg';

class AddressBookPage extends Component {
    state = {}
    render() {
        const AddressBookCopy = "An app built using React, were the user could store their friends and acquaintances telephone numbers."

        return (
            <div className="address-book">
                <WorkPageLight
                    url="/projects"
                    workImage={AddBookImg}
                    heading="Address Book"
                    copy={AddressBookCopy}
                    previous="/calculator"
                    next="/todoapp"
                    urlwork="https://garethscott.github.io/Phone-Book-Project/" />
            </div>
        )
    }
}

export default AddressBookPage;