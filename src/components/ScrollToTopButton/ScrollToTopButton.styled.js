import styled from "styled-components";

export const StyleedScrollButton = styled.button`
  position: fixed;
  bottom: 16px;
  right: 16px;
  padding: 8px 10px;
  font-size: 16px;
  border-radius: 100%;
  background-color: #f8f9fa; /* Серый цвет */
  color: #333; /* Цвет текста */
  border: none;
  cursor: pointer;
  outline: none;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: opacity 0.4s ease, transform 0.3s ease; /* Плавные переходы для opacity и transform */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); /* Легкая тень */

  /* Показываем кнопку только если прокрутка больше 100px */
  transform: translateY(
    ${(props) => (props.visible ? "0" : "100px")}
  ); /* Скрываем кнопку с помощью translateY */

  /* Стили для стрелки (используем символ стрелки вместо текста) */

  /* При наведении меняем цвет фона кнопки */
  &:hover {
    background-color: #dcdcdc; /* Темно-серый цвет при наведении */
  }
`;
