import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Table } from 'antd';
import './ManageArtworks.css';

const ManageArtworks = () => {

    const { userId } = useParams();
    const [artworks, setArtworks] = useState([]);

    // TABLE ATTRIBUTES
    const columns = [
        {
            title: "Name",
            dataIndex: "title",
            key: "title",
            render: (text) => <p>{text}</p>,
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
            render: (text) => <p>{text}</p>
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (record) => (
                <img src={record} alt='' style={{ height: 200, width: 'auto' }}/>
            ),
        },
        {
            title: "Action",
            render: (record) => (
                <button className='button' key={record._id} onClick={() => handleDeleteArtwork(record._id)}>Delete</button>
            ),
        },
    ];

    // REGION FETCHS
    const fetchArtworks = (userId) => {
        axios
            .get(`http://localhost:5000/api/users/${userId}/artworks`)
            .then((res) => {
                setArtworks(res.data);
            })
            .catch((e) => {
                console.log(`ERROR FETCH COMMENTS: ${e}`);
            });
    };

    const handleDeleteArtwork = (artworkId) => {
        axios
            .delete(`http://localhost:5000/api/artworks/${artworkId}`)
            .then(() => {
                fetchArtworks(userId);
            })
            .catch((e) => {
                console.log(`ERROR DELETE COMMENT: ${e}`);
            })
    };

    // REGION USEEFFECT
    useEffect(() => {
        fetchArtworks(userId);
    }, [userId]);

    return (
        <div>
            <div className='topbar'>
                <p style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>Manage Artworks</p>
            </div>

            <div className='comments'>
                <Table
                    columns={columns}
                    dataSource={artworks}
                    rowKey='_id'
                    key='_id'
                />
            </div>
        </div>
    );

};

export default ManageArtworks;
