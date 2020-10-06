import React, { createContext, useState } from 'react';
import {bookReducer} from "../reducers/bookReducer"
import { v4 as uuid } from 'uuid';


export const BookContext = createContext();

const BookContextProvider = (props) =>{
    const [books, setBooks] = useState([
        {title: 'Things Fall Apart', author: 'Chinua Achebe', id: 1 },
        {title: 'The Joys of Motherhood', author: 'Buchi Emecheta', id: 2 },
        {title: 'The Drummer Boy', author: 'Cyprian Ekwensi', id: 3 },
        {title: "Death and the King's Horsemen", author: 'Wole Soyinka', id: 4 },
        {title: 'Half of a Yellow Sun', author: 'Chimamanda Adiche', id: 5 }
    ]);
    const addBook=(title, author)=>{
        setBooks([...books, {title, author, id: uuid()}]);
    }
    const removeBook=(id)=>{
        setBooks(books.filter(book => book.id !==id ));
    }
    
    return <BookContext.Provider value={{books, addBook, removeBook}}>
        {props.children}
    </BookContext.Provider>
}

export default BookContextProvider;


