import React from 'react';
import Carousel from 'react-grid-carousel'

const SongCarousel = () => (
    <>
        <Carousel cols={6} rows={1} gap={10} containerClassName="carouselContainer" autoplay={3000} loop={true}>
            {/* 6 */}
            <Carousel.Item>
             <a href="">   
                <img width="100%" src="https://picsum.photos/800/600?random=1" />
                <h3>Beatles</h3>
                <h4>From me to you</h4>
            </a>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=2" />
                <h3>Beatles</h3>
                <h4>From me to you</h4>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=3" />
                <h3>Beatles</h3>
                <h4>From me to you</h4>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=4" />
                <h3>Beatles</h3>
                <h4>From me to you</h4>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=5" />
                <h3>Beatles</h3>
                <h4>From me to you</h4>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=6" />
                <h3>Beatles</h3>
                <h4>From me to you</h4>
            </Carousel.Item>
            {/* /FIN DES 6/ */}

            {/* 6 */}
            <Carousel.Item>
                <a href="">
                    <img width="100%" src="https://picsum.photos/800/600?random=25" />
                    <h3>Beatles</h3>
                    <h4>From me to you</h4>
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=24" />
                <h3>Beatles</h3>
                <h4>From me to you</h4>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=23" />
                <h3>Beatles</h3>
                <h4>From me to you</h4>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=22" />
                <h3>Beatles</h3>
                <h4>From me to you</h4>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=21" />
                <h3>Beatles</h3>
                <h4>From me to you</h4>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=20" />
                <h3>Beatles</h3>
                <h4>From me to you</h4>
            </Carousel.Item>
            {/* /FIN DES 6/ */}

            {/* 6 */}
            <Carousel.Item>
                <a href="">
                    <img width="100%" src="https://picsum.photos/800/600?random=10" />
                    <h3>Beatles</h3>
                    <h4>From me to you</h4>
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=11" />
                <h3>Beatles</h3>
                <h4>From me to you</h4>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=12" />
                <h3>Beatles</h3>
                <h4>From me to you</h4>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=13" />
                <h3>Beatles</h3>
                <h4>From me to you</h4>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=14" />
                <h3>Beatles</h3>
                <h4>From me to you</h4>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=15" />
                <h3>Beatles</h3>
                <h4>From me to you</h4>
            </Carousel.Item>
            {/* /FIN DES 6/ */}
        </Carousel>
    </>
);

export default SongCarousel;