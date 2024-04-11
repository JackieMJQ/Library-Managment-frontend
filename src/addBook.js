import React, { useEffect, useRef } from "react";
import './form.css'

const AddBooks = () => {
    let isbnRef = useRef();
    let titleRef = useRef();
    let editionNumberRef = useRef();
    let copyrightRef = useRef();
    let authorIdRef = useRef();

    useEffect(() => {
        async function getProfileInfo() {
            // Fetch profile info
        }
        getProfileInfo();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const newBook = {
            isbn: isbnRef.current.value,
            title: titleRef.current.value,
            edition_number: parseInt(editionNumberRef.current.value),
            copyright: parseInt(copyrightRef.current.value),
            author_id: parseInt(authorIdRef.current.value)
        };

        // Send new book data to server
        // Construct the query string
        const queryString = Object.keys(newBook)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(newBook[key])}`)
        .join('&');

        try {
            const response = await fetch(`api/v1/books?${queryString}`, {
                method: "POST"
            });
            
            if (response.ok) {
                // Book successfully added
                isbnRef.current.value = "";
                titleRef.current.value = "";
                editionNumberRef.current.value = "";
                copyrightRef.current.value = "";
                authorIdRef.current.value = "";
                alert('Book added successfully')
                console.log("Book added successfully");
            } else {
                // There was an error adding the book
                console.error("Failed to add book:", response.statusText);
            }
        } catch (error) {
            console.error("Error adding book:", error);
        }


        
    };

    return (
        <div className="form">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    ISBN:
                    <input
                        type="text"
                        ref={isbnRef}
                    />
                </label>
                <br />
                <label>
                    Title:
                    <input
                        type="text"
                        ref={titleRef}
                    />
                </label>
                <br />
                <label>
                    Edition Number:
                    <input
                        type="text"
                        ref={editionNumberRef}
                    />
                </label>
                <br />
                <label>
                    Copyright:
                    <input
                        type="text"
                        ref={copyrightRef}
                    />
                </label>
                <br />
                <label>
                    Author ID:
                    <input
                        type="text"
                        ref={authorIdRef}
                    />
                </label>
                <br />
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBooks;
