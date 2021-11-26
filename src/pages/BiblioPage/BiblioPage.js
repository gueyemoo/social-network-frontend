import React from 'react'

import SectionGrid from '../../components/SectionGrid/SectionGrid'

const BiblioPage = () => {
    return (
        <>
            <div className="biblio-nav">
                <h2 style={{ color: "#0000FF" }}>Aperçu</h2>
                <h2>Favoris</h2>
                <h2>Playlist</h2>
                <h2>Albums</h2>
                <h2>Amis</h2>
                <h2>Historique</h2>
            </div>

            <div className="biblio-main">
                <SectionGrid titre="Ecouté récemment" />
                <SectionGrid titre="Favoris" />
                <SectionGrid titre="Playlist" />
                <SectionGrid titre="Albums" />
                <SectionGrid titre="Amis" />
                <SectionGrid titre="Historique" />
            </div>
        </>
    )
}

export default BiblioPage
