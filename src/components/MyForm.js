import React, { useState } from "react";


function MyForm({id, handleform, formData}) {

    const handleChange = (event) => {
        const item = event.target.value;
        handleform(item);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:4000/stores/${id}`)
        .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON response
          })
        .then(data=>{
            console.log(data)
            const updatedItems = [...data.items, formData];
            console.log(updatedItems)
            fetch(`http://localhost:4000/stores/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify({...data, items: updatedItems}) 
            })
            
            .catch(error => {
                console.error('There was a problem with the POST request:', error);
              });
            handleform("");

        })   
    };


    return (
        <form onSubmit={handleSubmit}>
        <label>
            Item:
            <input
            type="text"
            value={formData}
            onChange={handleChange}
            />
        </label>
        <button type="submit">Submit</button>
        </form>
    );
    
}


export default MyForm;