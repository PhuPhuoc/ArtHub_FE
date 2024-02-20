import React from 'react';
import './OurHub.css'; // Importation du fichier CSS pour les styles

const OurHub = () => {
    return (
        <div className="our-hub-container"> {/* Ajouter une classe pour styliser le conteneur */}
            {/* Barre de recherche avec options de tags */}
            <div className="search-bar">
                <input type="text" placeholder="Rechercher..." />
                <select>
                    <option value="">Tous</option>
                    <option value="tag1">Tag1</option>
                    <option value="tag2">Tag2</option>
                    {/* Ajouter d'autres options de tags au besoin */}
                </select>
                <button>Rechercher</button>
            </div>
            {/* Emplacements pour les images défilables */}
            <div className="image-container">
                <img src="image1.jpg" alt="Image 1" />
                <img src="image2.jpg" alt="Image 2" />
                <img src="image3.jpg" alt="Image 3" />
                <img src="image4.jpg" alt="Image 4" />
                {/* Ajouter plus d'images au besoin */}
            </div>
        </div>
    );
};

export default OurHub;
