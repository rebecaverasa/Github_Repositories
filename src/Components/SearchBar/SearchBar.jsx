/* eslint-disable react/prop-types */
import { Form, FormControl } from 'react-bootstrap';

const SearchBar = ({ handleSearch }) => {
    return (
        <Form>
            <FormControl type='text' placeholder='Search' onChange={(e) => handleSearch(e.target.value)} />
        </Form>
    );
};

export default SearchBar;