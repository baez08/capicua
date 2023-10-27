import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button, Form, Modal } from 'react-bootstrap';

export const ModalAddNote = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);

    return (
        <>
            <div className="note__box-opciones d-flex justify-content-between">
                <Button variant="primary" onClick={handleShow}>
                    Equipo #1 <br />
                    <FontAwesomeIcon icon={faPlus} />
                </Button>

                <Button variant="primary" onClick={handleShow}>
                    Equipo #2 <br />
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </div>

            <Modal show={show} onHide={handleShow}>
                <Modal.Header>
                    <Modal.Title>Añadir apunte</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Tantos</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="0"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShow}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleShow}>
                        Añadir
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
