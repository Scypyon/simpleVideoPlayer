import styled from "styled-components";

export const RangeCnt = styled.input`
  height: 15px;
  width: 962.5px;
  margin-top: 10px;
  margin-left: 18.75px;
`;

export const PositionOfVideo = styled.div`
  width: 3px;
  height: 50px;
  background-color: red;
  position: absolute;
  top: ${({ length }) => 555 + length * 52.5}px;
  left: ${({ currentTime, duration }) => (currentTime / duration) * 96.25}%;
  margin-left: 18.75px;
  margin-right: 18.75px;
`;
