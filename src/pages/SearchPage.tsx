import React, { useState } from 'react';
import styled from "styled-components";
import { theme } from "../styles/theme";
import SearchIcon from "../assets/icons/search.svg";
import CloseIcon from "../assets/icons/close.svg";
import Button from "../components/button/ButtonDefault";

const SearchPage = () => {

  return (
    <PageContainer>
      <HeaderFrame>
        <IconWapper>
          <Icon src={CloseIcon} alt="close icon" />
        </IconWapper>
        <TeamSearchWapper>
          선수를 검색해보세요
          <IconWapper>
            <Icon src={SearchIcon} alt="search icon" />
          </IconWapper>
        </TeamSearchWapper>
      </HeaderFrame>
      <PlayerListContent></PlayerListContent>
      <ButtonWapper>
        <Button buttonText="선택 완료" />
      </ButtonWapper>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  padding: 80px 20px 70px 20px;
  border: 1px solid ${theme.colors.primary100};
  box-sizing: border-box;
`;

const HeaderFrame = styled.div`
  width: 100%;
  height: 44px;
  top: 90px;
  left: 16px;
  gap: 8px;
  display: flex;
  align-items: center;
`;

const TeamSearchWapper = styled.div`
  ${theme.typography.body03}
  color: ${theme.colors.dark03};
  min-width: 330px;
  width: 100%;
  height: 44px;
  justify-content: space-between;
  border-radius: ${theme.radius.full};
  padding: 16px;
  background-color: ${theme.colors.light02};
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const IconWapper = styled.div`
  width: 24px;
  height: 24px;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    filter: brightness(0); 
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const ButtonWapper = styled.div`
  width: 362px;
  height: 56px;
`;

const PlayerListContent = styled.div`
  flex-grow: 1;
  margin-top: 24px;
`;

export default SearchPage;
