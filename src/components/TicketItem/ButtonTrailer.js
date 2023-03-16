import React, { useState, setShow } from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import "../Modal/Modal.scss"
import Trailer from '../TicketItem/Trailer';
export default function Example(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const play = <svg className="play-svg"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 191.255 191.255"><path d="M162.929 66.612a6 6 0 10-6.35 10.183c6.544 4.081 10.45 11.121 10.45 18.833s-3.906 14.752-10.45 18.833l-98.417 61.365c-6.943 4.329-15.359 4.542-22.512.573-7.154-3.97-11.425-11.225-11.425-19.406V34.262c0-8.181 4.271-15.436 11.425-19.406 7.153-3.969 15.569-3.756 22.512.573l57.292 35.723a6 6 0 106.35-10.183L64.512 5.247c-10.696-6.669-23.661-7-34.685-.883-11.021 6.116-17.601 17.293-17.601 29.898v122.73c0 12.605 6.58 23.782 17.602 29.898 5.25 2.913 10.939 4.364 16.616 4.364 6.241 0 12.467-1.754 18.068-5.247l98.417-61.365c10.082-6.287 16.101-17.133 16.101-29.015s-6.019-22.728-16.101-29.015z"/></svg>
    return (
        <>
            <a onClick={handleShow} className="test-popup-link button" rel="external" title="title">{play}</a>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "black" }}>{props.tenphim} Trailer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Trailer id={props.id}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

