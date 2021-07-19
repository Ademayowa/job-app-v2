import { Container, InputGroup, FormControl } from 'react-bootstrap';
import { MdLocationOn } from 'react-icons/md';
import { SearchIcon, LocationIcon } from './SearchStyles';

export default function Search() {
  return (
    <Container>
      <InputGroup className='mt-5 mb-3'>
        <SearchIcon />

        <FormControl placeholder='   Filter by title, companies, experties' />
        <LocationIcon />
        <FormControl placeholder='   Filter by location' />
        <FormControl />
      </InputGroup>
    </Container>
  );
}
