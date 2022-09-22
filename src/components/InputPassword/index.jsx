import * as S from "./styles";

export function InputPassword({ type, name, placeholder }) {
  return (
    <S.Container>
      <S.InputField type={type} name={name} placeholder={placeholder} />
    </S.Container>
  );
}
