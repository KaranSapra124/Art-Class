import React, { useEffect, useRef, useState } from 'react';

const UsersModal = ({ setModal, data }) => {
    const [enrollData, setEnrollData] = useState(data);
    // Ref to modal container for detecting outside clicks
    const modalRef = useRef(null);

    // Function to handle closing the modal
    const closeModal = () => {
        setModal(false); // Close the modal when the close button is clicked
    };

    // Close modal when pressing the 'Esc' key
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleEscapeKey);

        return () => {
            window.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);

    // Close modal when clicking outside of the modal
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    };

    // Attach the click event listener to the overlay
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    // Set focus on the close button when the modal is opened
    useEffect(() => {
        const closeButton = document.getElementById('close-modal-button');
        if (closeButton) {
            closeButton.focus(); // Focus on the close button when the modal opens
        }
    }, []);

    useEffect(() => {
        setEnrollData(data);
    }, [data]);

    return (
        <>
            {/* Modal Overlay */}
            <div className="d-flex justify-content-center" style={{width:"100%", background: "gray",transition:"all"}} >
                <div style={{ position: "absolute",zIndex:999, margin: "auto", textAlign: "center" }} className="p-5 fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
                <div

                    className="modal-content bg-white rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 p-4 shadow-lg"
                >
                    {/* Modal Header */}
                    <div className="modal-header d-flex justify-content-between align-items-center pb-3 mb-4">
                        <h3 className="h4 mb-0 text-dark">User Enrollment Data</h3>
                        <button
                            id="close-modal-button"
                            className="btn-close text-dark"
                            onClick={closeModal}
                        />
                    </div>

                    {/* Modal Body (Table layout) */}
                    <div className="overflow-x-auto">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr className="table-secondary text-dark">
                                    {/* Table Headings (Field Names) */}
                                    <th className="py-2 px-4">Field</th>
                                    <th className="py-2 px-4">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Full Name */}
                                <tr>
                                    <td className="font-weight-bold">Full Name</td>
                                    <td>{enrollData?.fullName}</td>
                                </tr>
                                {/* Email */}
                                <tr>
                                    <td className="font-weight-bold">Email</td>
                                    <td>{enrollData?.email}</td>
                                </tr>
                                {/* Gender */}
                                <tr>
                                    <td className="font-weight-bold">Gender</td>
                                    <td>{enrollData?.gender}</td>
                                </tr>
                                {/* Date of Birth */}
                                <tr>
                                    <td className="font-weight-bold">Date of Birth</td>
                                    <td>{enrollData?.dob}</td>
                                </tr>
                                {/* School Name */}
                                <tr>
                                    <td className="font-weight-bold">School Name</td>
                                    <td>{enrollData?.schoolName}</td>
                                </tr>
                                {/* Address */}
                                <tr>
                                    <td className="font-weight-bold">Address</td>
                                    <td>{enrollData?.address}</td>
                                </tr>
                                {/* Board */}
                                <tr>
                                    <td className="font-weight-bold">Board</td>
                                    <td>{enrollData?.board}</td>
                                </tr>
                                {/* Class Grade */}
                                <tr>
                                    <td className="font-weight-bold">Class Grade</td>
                                    <td>{enrollData?.classGrade}</td>
                                </tr>
                                {/* Course */}
                                <tr>
                                    <td className="font-weight-bold">Course</td>
                                    <td>{enrollData?.course}</td>
                                </tr>
                                {/* Parent Name */}
                                <tr>
                                    <td className="font-weight-bold">Parent Name</td>
                                    <td>{enrollData?.parentName}</td>
                                </tr>
                                {/* Phone */}
                                <tr>
                                    <td className="font-weight-bold">Phone</td>
                                    <td>{enrollData?.phone}</td>
                                </tr>
                                {/* Relation */}
                                <tr>
                                    <td className="font-weight-bold">Relation</td>
                                    <td>{enrollData?.relation}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Modal Footer */}
                    <div className="modal-footer d-flex justify-content-end">
                        <button
                            id="close-modal-button-footer"
                            className="btn btn-primary"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div >
        </>
    );
};

export default UsersModal;
