import styled from 'styled-components';
import { MdSearch, MdLocationOn } from 'react-icons/md';

export const SearchIcon = styled(MdSearch)`
  position: relative;
  left: 24px;
  z-index: 1;
  top: 17px;
  color: #5964e0;
  font-size: 20px;
`;

// Refactor this later (same styles as the one above)
export const LocationIcon = styled(MdLocationOn)`
  position: relative;
  left: 24px;
  z-index: 1;
  top: 17px;
  color: #5964e0;
  font-size: 20px;
`;

export const FormInput = styled.div``;
