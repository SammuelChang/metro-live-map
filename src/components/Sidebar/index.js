import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: calc(100vh - 120px);
  background: ${({ theme }) => theme.background};
  ${'' /* min-width: 300px; */}
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border: 0.5px solid gray;

  & > * {
    color: ${({ theme }) => theme.color};
  }
  ${
  '' /* @media (max-width: 780px) {
    min-width: 100vw;
  } */
}
`;

// const StyleLink = styled(Link)`
//   text-decoration: none;
//   color: #000;
// `;

// const SideNav = styled.div`
//   background: #ebebe6;
//   height: 100%;
//   width: 30px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   align-items: center;
//   padding: 0 5px;
//   overflow: hidden;
//   border-right: 1px solid black;
// `;

// const Feature = styled.div`
//   border-radius: 5px;
//   text-align: center;
//   font-weight: 500;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const SideContent = styled.div`
//   width: 100%;
//   height: 100%;
// `;

export default function Sidebar({ children }) {
  return (
    <Wrapper>
      {/* <SideNav>
        <StyleLink to="/live/route">
          <Feature>路線查詢</Feature>
        </StyleLink>
        <StyleLink to="/live/city">
          <Feature>全城動態</Feature>
        </StyleLink>
        <StyleLink to="/live/nearbyPath">
          <Feature>最遠路徑</Feature>
        </StyleLink>
      </SideNav>
      <SideContent> */}
      {children}
      {/* </SideContent> */}
    </Wrapper>
  );
}

Sidebar.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.oneOfType([PropTypes.object]),
};
