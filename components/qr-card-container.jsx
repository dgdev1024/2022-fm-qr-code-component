/**
 * @file components/qr-card-container.jsx
 */

import QrCard from "./qr-card";
import Styles from "./qr-card-container.module.css";

export default function QrCardContainer() {
  return (
    <div className={Styles.qrCardContainer}>
      <QrCard defaultCode={true} />
    </div>
  );
}
