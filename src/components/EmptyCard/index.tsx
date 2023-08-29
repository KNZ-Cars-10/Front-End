import {
  StyledEmptyCard,
  StyledCardDiv,
  StyledCardBar1,
  StyledCardBar2,
  StyledCardText1,
  StyledCardText2,
  StyledCardText3,
  StyledCardDivBars,
  StyledCardDivBarsBot1,
  StyledCardBarBot1,
  StyledCardBarBot2,
  StyledCardBarBot3,
  StyledCardDivBarsBot2,
  StyledCardBarBot4,
} from "./style";

export const EmptyCardUser = () => {
  return (
    <StyledEmptyCard>
      <StyledCardDiv>
        <StyledCardDivBars>
          <StyledCardBar1 />
          <StyledCardBar2 />
          <StyledCardText1>Este usuário não possui anúncios</StyledCardText1>

          <StyledCardText2>
            Conte com a Motors shop para vender o seu veiculo, anuncie conosco!
          </StyledCardText2>
          <StyledCardText3>
            Anuncie e venda seu carro pelo melhor preço do mercado!
          </StyledCardText3>
        </StyledCardDivBars>
        <StyledCardDivBarsBot1>
          <StyledCardBarBot1 />
          <StyledCardBarBot2 />
          <StyledCardBarBot3 />
        </StyledCardDivBarsBot1>
        <StyledCardDivBarsBot2>
          <StyledCardBarBot4 />
        </StyledCardDivBarsBot2>
      </StyledCardDiv>
    </StyledEmptyCard>
  );
};

export const EmptyCardProfile = () => {
  return (
    <StyledEmptyCard>
      <StyledCardDiv>
        <StyledCardDivBars>
          <StyledCardBar1 />
          <StyledCardBar2 />
          <StyledCardText1>Você ainda não possui anúncios</StyledCardText1>
          <StyledCardText2>
            Conte com a Motors shop para vender o seu veiculo, anuncie conosco!
          </StyledCardText2>
          <StyledCardText3>
            Anuncie e venda seu carro pelo melhor preço do mercado!
          </StyledCardText3>
        </StyledCardDivBars>
        <StyledCardDivBarsBot1>
          <StyledCardBarBot1 />
          <StyledCardBarBot2 />
          <StyledCardBarBot3 />
        </StyledCardDivBarsBot1>
        <StyledCardDivBarsBot2>
          <StyledCardBarBot4 />
        </StyledCardDivBarsBot2>
      </StyledCardDiv>
    </StyledEmptyCard>
  );
};
