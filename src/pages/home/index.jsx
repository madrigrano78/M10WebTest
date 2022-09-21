import * as S from "./styles";

export function Home() {
  return (
    <>
      <S.Container>
        <S.Content>
          <S.LogoHome>
            <S.ImgDivNotebook>
              <img width={414} height={413} src="/assets/notebook.png" alt="" />
            </S.ImgDivNotebook>
          </S.LogoHome>
          <S.Painel>
            <S.H1>
              Bem Vindo ao<S.Span> painel</S.Span>
            </S.H1>
          </S.Painel>
        </S.Content>
      </S.Container>
    </>
  );
}
