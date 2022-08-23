import styled from "@emotion/styled";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  border-bottom: 1px solid gray;
`;

const LinkWrap = styled.div`
  margin-left: 20px;
  font-size: larger;
  font-weight: 700;

  a {
    color: black;
    text-decoration: none !important;
  }
`;

const LogoImg = styled.img`
  height: 20px;
  cursor: pointer;
`;

export const Header: React.FC = () => {
  const headerBox = ["swap", "pool"];

  return (
    <Wrapper>
      <Link href="/">
        <LogoImg src="./vercel.svg" alt="logo" />
      </Link>
      {headerBox.map((item, index) => (
        <LinkWrap key={index}>
          <Link href={`/${item}`}>{item.toUpperCase()}</Link>
        </LinkWrap>
      ))}
    </Wrapper>
  );
};
