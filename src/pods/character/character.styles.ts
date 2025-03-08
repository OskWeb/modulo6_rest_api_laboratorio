import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const characterCardContent = css`
  display: flex;
  gap: 50px;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const cardImage = css`
  width: 150px;
  height: 150px;
  @media (max-width: 600px) {
    width: 200px;
    height: 200px;
  }
`;
export const link = css`
  text-decoration: none;
  background-color: #d7d802;
  color: white;
  padding: 10px;
  border-radius: 5px;
  width: min-content;
`;

export const characterDetailContainer = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
