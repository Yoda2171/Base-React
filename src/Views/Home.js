import React from 'react'

function Home() {
    return (
        <>
            <div className="row">
                <div className="container col-4">
                    <iframe src="https://open.spotify.com/embed/playlist/37i9dQZEVXbMDoHDwVN2tF" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>

                <div className="container col-4">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="http://placehold.it/300x180" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="http://placehold.it/300x180" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="http://placehold.it/300x180" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
