/** @format */

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const linkStyle = {
    marginRight: 15,
};

const Header = () => {
    return (
        <Wrapper>
            <Link href='/' passHref>
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href='/board/1' passHref>
                <a style={linkStyle}>board</a>
            </Link>
            <Link href='/calender' passHref>
                <a style={linkStyle}>calender</a>
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 0.5rem;
    height: 2.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export default Header;
