import * as S from "./styles";
import notebookLogo from "../../assets/image6.png";
import { InputEmail } from "../../components/Input";
import { PasswordView } from "../../components/PasswordView";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

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
            <S.InformationsDiv>
              <InputEmail
                placeholder="Digite seu e-mail"
                type="email"
                name="email"
              />
              <PasswordView />
              <S.ButtonLogin
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Acessar
              </S.ButtonLogin>
            </S.InformationsDiv>
          </S.Painel>
        </S.Content>
      </S.Container>
    </>
  );
}
