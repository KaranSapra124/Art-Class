import React, { useEffect, useState } from 'react';
import { Table, Button, Image, Modal } from 'react-bootstrap';
import WorkshopModal from '../../Modals/WorkshopModal';
import axios from 'axios';
import { toast } from 'react-toastify';


const Paintings = ({ sectionType }) => {
    const [openModal, setOpenModal] = useState(false);
    const [mockPaintings, setMockPaintings] = useState([
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
    ])
    const [data, setData] = useState({
        title: "",
        content: "",
        image: "",
        type: sectionType
    })
    const handleDelete = async (id) => {
        const { data } = await axios.get(`${import.meta.env.VITE_Backend_url}/admin/delete-art-workshop/${id}`)
        toast.success(data?.message);
        setMockPaintings(data?.data)
    }
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_Backend_url}/admin/get-workshop/${sectionType}`)
            setMockPaintings(data?.data)
        }
        fetchData()
    }, [])

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
                        {mockPaintings?.length > 0 ? mockPaintings.map(painting => (
                            <tr key={painting._id}>
                                <td>{painting.title}</td>
                                <td><Image src={painting.imageUrl} alt={painting.title} width="100" height={'100'} rounded /></td>
                                <td>{painting.content}</td>
                                <td>
                                    <Button variant="danger" onClick={() => handleDelete(painting?._id)} size="sm">Delete</Button>
                                </td>
                            </tr>
                        )) : <div>
                            <h1 className='text-center m-auto w-100'>No Data Found!</h1>
                        </div>}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default Paintings;
