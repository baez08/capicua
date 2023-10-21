import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

export const ModalAddTeam = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Team <FontAwesomeIcon icon={faCirclePlus} />
            </Button>

            <Modal show={show} onHide={handleShow}>
                <Modal.Header>
                    <Modal.Title>Información</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre del equipo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre del equipo"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Primer jugador</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Primer jugador"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Segundo jugador</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Segundo jugador"
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
