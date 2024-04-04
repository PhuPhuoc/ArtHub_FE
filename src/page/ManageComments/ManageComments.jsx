import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {message, Table} from 'antd';
import './ManageComments.css';

const ManageComments = () => {

    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [comments, setComments] = useState([]);

    // TABLE ATTRIBUTES
    const columns = [
        {
            title: "Name",
            dataIndex: "userId",
            key: "userId",
            render: (text) => <p>{text}</p>,
        },
        {
            title: "Comment",
            dataIndex: "text",
            key: "text",
            render: (text) => <p>{text}</p>
        },
        {
            title: "Date Time",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Action",
            render: (record) => (
                <button className='button' key={record._id} onClick={() => handleDeleteComment(record._id)}>Delete</button>
            ),
        },
    ];

    // REGION FETCHS
    const fetchUser = (userId) => {
        axios
            .get(`http://localhost:5000/api/users/${userId}`)
            .then((res) => {
                setUser(res.data.user);
            })
            .catch((e) => {
                console.log(`ERROR FETCH USER: ${e}`);
            })
    };

    const fetchComments = (userId) => {
        axios
            .get(`http://localhost:5000/api/users/${userId}/comments`)
            .then((res) => {
                setComments(res.data.comments);
            })
            .catch((e) => {
                console.log(`ERROR FETCH COMMENTS: ${e}`);
            });
    };

    const handleDeleteComment = (commentId) => {
        axios
            .delete(`http://localhost:5000/api/comment/${commentId}`)
            .then(() => {
                fetchComments(userId);
                message.success('Comment deleted successfully');
            })
            .catch((e) => {
                console.log(`ERROR DELETE COMMENT: ${e}`);
            })
    };

    // REGION USEEFFECT
    useEffect(() => {
        fetchUser(userId);
        fetchComments(userId);
    }, [userId]);

    return (
        <div>
            <div className='topbar'>
                {user && <p style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>Manage comments</p>}
            </div>

            <div className='comments'>
                <Table
                    columns={columns}
                    dataSource={comments}
                    rowKey='_id'
                    key='_id'
                />
            </div>
        </div>
    );

};

export default ManageComments;
