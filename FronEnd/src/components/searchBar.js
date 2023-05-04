import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function SearchBar({ searchTerm, setSearchTerm }) {
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div><InputGroup className="mb-3">
    <Form.Control
      placeholder="SearchProduct"
      aria-label="SearchProduct"
      aria-describedby="basic-addon2"
      
      />
    
  </InputGroup></div>
  )
}

export default SearchBar