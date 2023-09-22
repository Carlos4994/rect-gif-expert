import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const {data,loading}= useFetchGifs( category );
    // useEffect(() => {
    //     getGifs( category ).then( setImages );
    // }, [ category ]);



    return (
        <>
            <h3> {category} </h3>
            { loading? <p>Loding</p> : null }
            <div className='card-grid'>


                {
                    data.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} />
                    ))
                }

            </div>
        </>
    )
}
