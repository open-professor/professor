import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Container = styled.header`
  padding: 0 40px;
  width: 100%;
  background: #6971e0;
  background: linear-gradient(90deg, #6971e0 12%, #5157ad 98%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  color: white;
  font-weight: bold;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SelectBoardButton = styled.div.attrs({
  tabIndex: 0,
  role: "button",
})`
  cursor: pointer;
  transition: all 200ms;

  &:hover {
    text-decoration: underline;
  }
`;
export default function Header({ setShowSelect }) {
  const showSelect =
    typeof window !== "undefined" && window.location.pathname !== "/create";
  return (
    <Container>
      <div>
        {showSelect && (
          <SelectBoardButton onClick={() => setShowSelect((prev) => !prev)}>
            馃幉 讘讞讬专转 诇讜讞
          </SelectBoardButton>
        )}
      </div>

      <Link href="/">
        <a>馃 驻专讜驻住讜专</a>
      </Link>

      <Link href="/create">
        <a>馃摑 讬爪讬专转 诇讜讞</a>
      </Link>
    </Container>
  );
}
