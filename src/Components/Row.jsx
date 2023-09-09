import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'

const Row = ({title, fetchURL}) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    },[fetchURL])

  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group'>
        <div id={'slider'}
            className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {movies.map((item, id) => (
                <Movie key={id} item={item}/>
            ))}
        </div>
    </div>
    </>
  )
}

export default Row

/*const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }*/

/*<MdChevronLeft
            onClick={slideLeft}
            className='bg-white left-2 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' 
            size={40}/>
<MdChevronRight
            onClick={slideRight}
            className='bg-white right-2 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' 
            size={40}/>*/