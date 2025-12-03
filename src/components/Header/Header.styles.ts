import styled from "styled-components";

export const HeaderWrapper = styled.header`
    width: 100%;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;


export const LogoPlaceholder = styled.div`
    width: 40px;
    height: 40px;
    background: #e5e5e5;
    border-radius: 50%;
`;


export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 16px;
`;


export const NavLink = styled.a`
    color: #555;
    text-decoration: none;
    font-size: 14px;


    &:hover {
    color: #000;
    }
`;