/**
 * @file components/qr-card-container.jsx
 */

import { useState, useEffect } from "react";
import QrCard from "./qr-card";
import QrFormCard from "./qr-form-card";
import Styles from "./qr-card-container.module.css";

export default function QrCardContainer({ formCardShown, onCardAdded }) {
  const [userCards, setUserCards] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userCardString = localStorage.getItem("-fm-user-cards");
      if (userCardString) {
        setUserCards(JSON.parse(userCardString));
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("-fm-user-cards", JSON.stringify(userCards));
  }, [userCards]);

  const onFormCardSubmit = (qr) => {
    setUserCards((cards) => [...cards, qr]);
    onCardAdded();
  };

  const onUserCardDeleted = (index) => {
    const cards = userCards.slice();
    cards.splice(index, 1);
    setUserCards(cards);
  };

  return (
    <div className={Styles.qrCardContainer}>
      <QrCard defaultCode={true} />
      {userCards.map((card, index) => (
        <QrCard
          key={index}
          index={index}
          defaultCode={false}
          title={card.title}
          description={card.description}
          code={card.code}
          onDelete={onUserCardDeleted}
        />
      ))}
      {formCardShown === true && <QrFormCard onSubmit={onFormCardSubmit} />}
    </div>
  );
}
