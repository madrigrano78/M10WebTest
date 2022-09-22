import * as S from "./styles";
import { InputPassword } from "../InputPassword";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export function PasswordView() {
  const [status, setStatus] = useState("password");

  function onShowPassword() {
    setStatus(!status);
  }

  return (
    <S.ContainerInput>
      <S.ContentInput>
        <InputPassword
          name="password"
          placeholder="Digite sua senha"
          type={status ? "text" : "password"}
        />
        <S.ShowHide onClick={onShowPassword}>
          {status ? <BsEye /> : <BsEyeSlash />}
        </S.ShowHide>
      </S.ContentInput>
    </S.ContainerInput>
  );
}
