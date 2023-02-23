import React from "react";
import "./styles.css";

function Animal({ emoji, name, onAdopt, children }) {
  return (
    <section>
      <h2>
        {emoji} {name}
      </h2>
      <p>{children}</p>
      <Button onClick={onAdopt}>
        Adopt <strong>{name}</strong>
      </Button>
    </section>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  function handleAdopt(name) {
    alert(`${name} has been adopted`);
  }
  return (
    <main>
      <h1>Animal Shelter</h1>
      <h2>Please adopt our lovely pets!</h2>
      <Animal
        emoji="🐕"
        name="Lucky"
        onAdopt={() => {
          handleAdopt("Lucky");
        }}
      >
        Very cute dog!
      </Animal>
      <Animal
        emoji="🐈"
        name="Mittens"
        onAdopt={() => {
          handleAdopt("Mittens");
        }}
      >
        <strong>Cute cat!</strong>
        <em>Really lovely!</em>
      </Animal>
      <Animal
        emoji="🐢"
        name="Archibald"
        onAdopt={() => {
          handleAdopt("Archibald");
        }}
      />
      <Animal
        emoji="🐣"
        name="Chick Norris"
        onAdopt={() => {
          handleAdopt("Chick Norris");
        }}
      />
    </main>
  );
}
