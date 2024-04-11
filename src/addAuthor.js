import React, { useRef } from "react";
import './form.css';

const AddAuthor = () => {
    let firstNameRef = useRef();
    let lastNameRef = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const newAuthor = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value
        };

        // Construct the query string
        const queryString = Object.keys(newAuthor)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(newAuthor[key])}`)
            .join('&');

        try {
            // Make the fetch request to add the new author
            const response = await fetch(`api/v1/authors?${queryString}`, {
                method: "POST"
            });
            
            if (response.ok) {
                // Author successfully added
                console.log("Author added successfully");
                // Optionally, you can display a success message to the user

                // Clear input fields after success
                firstNameRef.current.value = "";
                lastNameRef.current.value = "";

                alert('Author added successfully')
            } else {
                // There was an error adding the author
                console.error("Failed to add author:", response.statusText);
            }
        } catch (error) {
            console.error("Error adding author:", error);
        }
    };

    return (
        <div className="form">
            <h2>Add an Author</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        ref={firstNameRef}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        ref={lastNameRef}
                    />
                </label>
                <button type="submit">Add Author</button>
            </form>
        </div>
    );
};

export default AddAuthor;
