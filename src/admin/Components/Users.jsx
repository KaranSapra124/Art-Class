import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaEye } from 'react-icons/fa';
import UsersModal from '../Modals/UsersModal';
import { FaTrash } from 'react-icons/fa6';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [enrollData, setEnrollMentData] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_Backend_url}/admin/get-users`);
                toast.success(data?.message);
                setUsers(data?.data);
            } catch (error) {
                toast.error('Failed to fetch users');
            }
        };
        fetchUsers();
    }, []);

    const handleShowModal = (userData) => {
        setEnrollMentData(userData.enrollmentData);
        setIsShow(true); // This triggers the modal to show with updated data
    };
    const handleDelete = async (id) => {
        const { data } = await axios.get(`${import.meta.env.VITE_Backend_url}/admin/delete-users/${id}`);
        toast.success(data?.message);
        setUsers(data?.data)

    };

    return (
        <>
            {isShow && <UsersModal key={enrollData?.course || 'no-course'} data={enrollData} setModal={setIsShow} />}

            <div className="container mt-4">
                <h2 className="h3 mb-4 text-dark">User List</h2>

                {users?.length > 0 ? (
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped table-hover">
                            <thead className="table-light">
                                <tr>
                                    <th className="text-center">#</th>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Plan</th>
                                    <th>Enrollment Data</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user._id}>
                                        <td className="text-center">{index + 1}</td>
                                        <td>{user.fullName}</td>
                                        <td>{user.userEmail}</td>
                                        <td>{user.enrollmentData?.course || 'Not assigned'}</td>
                                        <td>
                                            <FaEye
                                                onClick={() => handleShowModal(user)}
                                                className="cursor-pointer text-primary"
                                            />
                                        </td>
                                        <td>{new Date(user.createdAt).toLocaleString()}</td>
                                        <td>{new Date(user.updatedAt).toLocaleString()}</td>
                                        <td><FaTrash className='text-danger' onClick={() => handleDelete(user?._id)} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="alert alert-info">No users found</div>
                )}
            </div>
        </>
    );
};

export default Users;
