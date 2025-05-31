import React, { useState } from 'react';
import { Table, Button, Image, Modal } from 'react-bootstrap';
import WorkshopModal from '../../Modals/WorkshopModal';

const mockPaintings = [
    {
        id: 1,
        title: 'Sunset Bliss',
        image: 'https://via.placeholder.com/100',
        content: 'A beautiful sunset over the mountains.'
    },
    {
        id: 2,
        title: 'Ocean Dreams',
        image: 'https://via.placeholder.com/100',
        content: 'Waves crashing under the moonlight.'
    },
    {
        id: 3,
        title: 'Urban Mirage',
        image: 'https://via.placeholder.com/100',
        content: 'A bustling city through abstract lenses.'
    }
];

const Paintings = () => {
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState({
        title: "",
        content: "",
        image: "",
        type: "paintings"
    })


    return (
        <>
            {openModal && <Modal animation centered show={openModal}>
                <WorkshopModal data={data} setModal={setOpenModal} /></Modal>}
            <div className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3>Paintings</h3>
                    <Button onClick={() => setOpenModal(true)} variant="primary">Add Painting</Button>
                </div>

                <Table striped bordered hover responsive>
                    <thead className="table-dark">
                        <tr>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Content</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockPaintings.map(painting => (
                            <tr key={painting.id}>
                                <td>{painting.title}</td>
                                <td><Image src={painting.image} alt={painting.title} width="100" rounded /></td>
                                <td>{painting.content}</td>
                                <td>
                                    <Button variant="warning" size="sm" className="me-2">Edit</Button>
                                    <Button variant="danger" size="sm">Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default Paintings;
