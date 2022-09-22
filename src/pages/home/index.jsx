import * as S from "./styles";
import notebookLogo from "../../assets/image6.png";
import { InputEmail } from "../../components/Input";
import { PasswordView } from "../../components/PasswordView";

export function Home() {
  return (
    <>
      <S.Container>
        <S.Content>
          <S.LogoHome>
            <S.ImgDivNotebook>
              <img width={414} height={413} src={notebookLogo} alt="" />
            </S.ImgDivNotebook>
          </S.LogoHome>
          <S.Painel>
            <S.H1>
              Bem Vindo ao<S.Span> painel</S.Span>
            </S.H1>
            <S.InputDiv>
              <InputEmail
                placeholder="Digite seu e-mail"
                type="email"
                name="email"
              />
              <PasswordView />
            </S.InputDiv>
          </S.Painel>
        </S.Content>
      </S.Container>
    </>
  );
}
