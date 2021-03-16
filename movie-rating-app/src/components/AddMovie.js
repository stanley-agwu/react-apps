import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMovie } from '../store/actions/movieActions'
import { nanoid } from '@reduxjs/toolkit'

const AddMovie = () => {
    const [movie, setMovie] = useState({
        title: "",
        director: "",
        genre: "",
        rating: ""
    })
    const dispatch = useDispatch()

    const handleChange = (e) =>{
        setMovie({
            ...movie,
            [e.target.id]: e.target.value
        })   
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(addMovie({ title: movie.title,
                            director: movie.director,
                            genre: movie.genre,
                            rating: movie.rating,
                            id: nanoid() 
                })
        )
        setMovie({
            title: "",
            director: "",
            genre: "",
            rating: ""
        }) 
    }
    return (
        <div className="add-movie">
            <h3>Add New Movie</h3>
            <form onSubmit = {handleSubmit}>
                <input required type="text" id="title" placeholder="Movie Title" 
                    value = {movie.title} onChange = {handleChange}/>
                <input required type="text" id="director" placeholder="Director" 
                    value = {movie.director} onChange = {handleChange}/>
                <input required type="text" id="genre" placeholder="Genre" 
                    value = {movie.genre} onChange = {handleChange}/>
                <input required type="number" id="rating" placeholder="Rating(1 - 10)" 
                value = {movie.rating} onChange = {handleChange} min='1' max='10' />
                <button>Submit</button>
            </form>
        </div>
    )
            
}
export default AddMovie