import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

const MapPopup = (props) => {
    return(
        <Modal {...props} size="lg">
            <ModalBody>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509167.363120284!2d-123.79964746034663!3d37.192999291621064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2s!4v1605164650494!5m2!1sen!2s" width="770" height="600" frameborder="0" style={{border: "0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </ModalBody>
        </Modal>
    );
}

export default MapPopup;