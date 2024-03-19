import React, { useState, useEffect } from 'react';
import Dashboard from '../components/UI/dashboard';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../assets/users.css'
function Users() {
    const [campaigns, setCampaigns] = useState([]);
    const [editCampaign, setEditCampaign] = useState(null);
    const [showEditPopup, setShowEditPopup] = useState(false);

    // Sample data for demonstration
    useEffect(() => {
        // Simulate fetching data from an API
        const fetchData = async () => {
            try {
                // Here you would fetch the data from your API
                // For now, I'll just use sample data
                const sampleData = [
                    {
                        id: 1,
                        username: 'Sanjay Dhandapani',
                        email: 'sanjay@gmail.com',
                        phno: '1234567890'
                    },
                    {
                        id: 2,
                        username: 'Sankar C',
                        email: 'sankar@example.com',
                        phno: '2143657578'
                    },
                    {
                        id: 3,
                        username: 'Sharan S',
                        email: 'sharan@yahoo.com',
                        phno: '9876456799'
                    },
                    {
                        id: 4,
                        username: 'Karthik V',
                        email: 'karthi12@gmail.com',
                        phno: '9830726836'
                    },
                    {
                        id: 5,
                        username: ' Vignesh R',
                        email: 'vicky@gmail.com',
                        phno: '9624837890'
                    },
                    {
                        id: 6,
                        username: 'Harish K',
                        email: 'harish2003@gmail.com',
                        phno: '1234567890'
                    },
                ];
                setCampaigns(sampleData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    const handleEditClick = (campaign) => {
        setEditCampaign(campaign);
        setShowEditPopup(true);
    };

    // Function to handle delete button click
    const handleDeleteClick = (id) => {
        // Filter out the campaign with the provided id
        setCampaigns(campaigns.filter(campaign => campaign.id !== id));
    };

    // Function to handle save changes in edit popup
    const handleSaveChanges = (editedData) => {
        // Update the campaigns state with the edited data
        setCampaigns(campaigns.map(campaign => campaign.id === editedData.id ? editedData : campaign));
        // Hide the edit popup
        setShowEditPopup(false);
    };

    return (
        <>
            <div>
                <Dashboard />
            </div>
            <div>
                <div className="main-content">
                    <header>
                        <h1 style={{ color: 'white' }}>Our Users!</h1>
                    </header>
                    <div className="campaign-panel">
                        <h2 className="campaign-heading">User Management</h2>
                        <table className="campaign-table">
                            <thead>
                                <tr>
                                    <th className="campaign-table-header">USERNAME</th>
                                    <th className="campaign-table-header">EMAIL</th>
                                    <th className="campaign-table-header">PH NO</th>
                                    <th className="campaign-table-header">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {campaigns && campaigns.map((campaign) => (
                                    <tr key={campaign.id}>
                                        <td>{campaign.username}</td>
                                        <td>{campaign.email}</td>
                                        <td>{campaign.phno}</td>
                                        <td>
                                            {/* Edit button with FaEdit icon */}
                                            <button className="campaign-action-button" onClick={() => handleEditClick(campaign)}>
                                                <FaEdit className="edit-icon" />
                                            </button>
                                            &nbsp;
                                            {/* Delete button with FaTrash icon */}
                                            <button className="campaign-action-button" onClick={() => handleDeleteClick(campaign.id)}>
                                                <FaTrash className="delete-icon" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Edit popup */}
            {showEditPopup && (
                <EditPopup
                    campaign={editCampaign}
                    onSaveChanges={handleSaveChanges}
                    onClose={() => setShowEditPopup(false)}
                />
            )}
        </>
    );
}

// Edit popup component
const EditPopup = ({ campaign, onSaveChanges, onClose }) => {
    const [editedCampaign, setEditedCampaign] = useState(campaign);

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedCampaign({ ...editedCampaign, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveChanges(editedCampaign);
    };

    return (
        <div className="edit-popup">
            <div className="edit-popup-content">
                <h2>Edit Campaign</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Business Name:
                        <input type="text" name="username" value={editedCampaign.username} onChange={handleInputChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={editedCampaign.email} onChange={handleInputChange} />
                    </label>
                    <label>
                        Phone Number:
                        <input type="text" name="phno" value={editedCampaign.phno} onChange={handleInputChange} />
                    </label>
                    <button type="submit">Save Changes</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
};
export default Users;
