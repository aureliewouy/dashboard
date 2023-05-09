import React from "react";
import styled from "styled-components";

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 84%;
  margin-left: auto;
  top: 0;
  right: 0;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  z-index: 99;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

const SearchInput = styled.input`
  width: 200px;
  height: 30px;
  border: none;
  border-radius: 15px;
  padding: 5px 10px;
  margin-right: 10px;
`;

const NotificationIcon = styled.div`
  font-size: 24px;
  margin-right: 10px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ProfileName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const NavBar = () => {
  return (
    <NavWrapper>
      <SearchWrapper>
        <SearchInput type="text" placeholder="Recherche..." />
      </SearchWrapper>
      <ProfileWrapper>
        <NotificationIcon>
          <i className="fa fa-bell" />
        </NotificationIcon>
        <ProfileImage
          src="https://xsgames.co/randomusers/avatar.php?g=male"
          alt="Profile"
        />
        <ProfileName>John Doe</ProfileName>
      </ProfileWrapper>
    </NavWrapper>
  );
};

export default NavBar;
