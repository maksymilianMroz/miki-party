import React from "react";
import styled from "styled-components";
import "./App.css";
import StyledText from "./StyledText";
import PhotoGrid from "./PhotoGrid";
import PhotoCard from "./PhotoCard";
import PhotoGallery from "./PhotoGallery";
import bacziMain from "./assets/mainBaczi/baczi7.jpg";

import { photos } from "./data/photos";

// Przykładowe dane zdjęć z pozycjonowaniem, rozmiarami, rotacją, rozmyciem i z-indexem
const mainPhoto = {
  url: bacziMain,
  title: "Witajcie w moim żyćku <3",
  description: "",
  size: "enormous",
  rotation: 0,
  extraBlur: 0,
  zIndex: 2,
};

const BackgroundContainer = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  overflow: hidden;
  height: 1200px;
  width: 100%;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
  z-index: 12;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.h1`
  max-width: 1200px;
  margin: 20px 0 0;
  font-size: 5.2em;
  line-height: 0.9;
  letter-spacing: -6px;
  text-shadow: 4px 1px 39px #ffffff;
`;

const Par = styled.p`
  font-size: 2.2em;
  line-height: 0.9;
  letter-spacing: -2px;
  text-shadow: 4px 1px 39px #ffffff;
  font-family: monospace;
  font-weight: 700;
`;

const Info = styled.p`
  font-size: 2.2em;
  margin: 150px 0;
  font-weight: 700;
  font-family: monospace;
  text-shadow: 4px 1px 39px #ffffff;
`;

function App() {
  return (
    <>
      <BackgroundContainer>
        <PhotoGrid photos={photos} />
        <Content>
          <PhotoCard photo={mainPhoto} style={{}} />
          <Header>
            Cześć! Niedługo urodziny pewnej <StyledText>Bączyny!</StyledText>
          </Header>
        </Content>
      </BackgroundContainer>

      <Info>
        Więc byłoby miło gościć <strong>Cię</strong> na tej imprezie!
        <br />
        <br />
        Zapraszamy na urodzinowy piknik! <br /> 8 czerwca godzina 15:00: ogród w
        kamienicy przy ul. Karmelickiej 27, KRAKÓW
        <br />
        <br /> Najbardziej ucieszy nas Wasza obecność, ale jeśli chcesz kupić
        coś Mikiemu, a nie masz pomysłu to polecamy zajrzeć tutaj!{" "}
        <a
          href="https://volowishlist.com/list/public/51d51d2a-e849-4901-a7c5-c647e68c64b4"
          target="_blank"
        >
          KLIK
        </a>
      </Info>
      <PhotoGallery />
    </>
  );
}

export default App;
