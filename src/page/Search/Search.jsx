import axios from 'axios';
import { useState, useEffect } from "react";
import React from 'react';
import { useParams } from 'react-router-dom';
import ArtworkCard from "../../components/ArtWorkCard.jsx";
import {Row} from "antd";

const Search = () => {
    const [artworks, setArtworks] = useState([]);
    const { item } = useParams();

    useEffect(() => {
        const fetchSearch = async () => {
            try {
                const results = await axios.get(`http://localhost:5000/search/${item}`);
                setArtworks(results.data.artworks);
                console.log(results.data.artworks);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearch();
    }, [item]);

    return (
        <Row gutter={[16, 16]}>
            <div>
                <p style={{ padding: 15 }}>Here are the results for {item}</p>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {artworks.map((artwork, index) => (
                    <ArtworkCard key={index} artworkData={artwork} />
                    ))}
                </div>
            </div>
        </Row>
    );
};

export default Search;
