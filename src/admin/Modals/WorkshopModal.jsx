import axios from 'axios';
import React, { useState, useEffect } from 'react';

const WorkshopForm = ({ data = {}, setModal }) => {
    const [formData, setFormData] = useState({
        title: data.title || '',
        image: null, // File object
        content: data.content || '',
        type: data.type || ''
    });

    const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        setFormData({
            title: data.title || '',
            image: null,
            content: data.content || ''
        });
        setImagePreview(data.image || '');
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prev => ({ ...prev, image: file }));
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = new FormData();
    submissionData.append('title', formData.title);
    submissionData.append('content', formData.content);
    if (formData.image) {
        submissionData.append('image', formData.image);
    }
    submissionData.append("type", formData?.type);

    try {
        const res = await axios.post(
            `${import.meta.env.VITE_Backend_url}/admin/add-art-workshop/${data?.type}`,
            submissionData, // Use FormData here!
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        console.log('Upload success:', res.data);
        setModal(false);
    } catch (error) {
        console.error('Upload error:', error);
    }
};


    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="bg-white p-4">
                    <h3 className="mb-4">Workshop Details</h3>
                    <form onSubmit={handleSubmit} encType='multipart/form-data'>
                        <div className="form-group mb-3">
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label className="form-label">Upload Image</label>
                            <input
                                type="file"
                                className="form-control"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            {imagePreview && (
                                <div className="mt-2">
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        style={{ maxHeight: '200px' }}
                                        className="img-thumbnail"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="form-group mb-4">
                            <label className="form-label">Content</label>
                            <textarea
                                className="form-control"
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                rows="4"
                            />
                        </div>

                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary">
                                Save Workshop
                            </button>
                            <button onClick={() => setModal(false)} className="btn btn-danger">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WorkshopForm;
