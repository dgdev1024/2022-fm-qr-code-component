/**
 * @file pages/index.jsx
 */

import { useState } from "react";
import QrCardContainer from "../components/qr-card-container";
import AddButton from "../components/add-button";

export default function Index() {
  const [formCardShown, setFormCardShown] = useState(false);

  return (
    <>
      <QrCardContainer
        formCardShown={formCardShown}
        onCardAdded={() => setFormCardShown(false)}
      />
      <AddButton
        toggled={formCardShown}
        onClick={(toggled) => setFormCardShown(toggled)}
      />
    </>
  );
}
