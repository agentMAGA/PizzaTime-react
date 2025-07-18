import React from "react";

function Header(props) {


  return (
    <header>
    <div className="headerLeft">
      <img src="/img/logo.svg"></img>
      <div className="headerLeftText">
        <h1>Pizza Time</h1>
        <p>Самая вкусная пицца в Чечне</p>
      </div>
    </div>

    <div className="headerRight">
      <nav style={{ cursor: 'pointer' }} onClick={props.onClickCard}>

        <ul>
          <li>

            <span>500₽</span>
          </li>

          <li>
            <img src="/img/korzina.svg"></img>
            <span>3</span>
          </li>
        </ul>

      </nav>
    </div>
  </header>
  );
}

export default Header;