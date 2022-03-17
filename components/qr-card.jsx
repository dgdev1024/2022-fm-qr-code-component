/**
 * @file components/qr-card.jsx
 */

import Styles from "./qr-card.module.css";

export default function QrCard({ defaultCode, code, title, description }) {
  return (
    <div
      className={`${Styles.qrCard} ${
        defaultCode === false && Styles.qrUserCard
      }`}
    >
      <div className={Styles.qrCodeImageContainer}>
        {defaultCode === true ? (
          <img src="/images/image-qr-code.png" alt="Frontend Mentor QR Code" />
        ) : (
          "test"
        )}
      </div>
      <h2 className={Styles.qrCardHeading}>
        {defaultCode === true
          ? "Improve your front-end skills by building projects."
          : title}
      </h2>
      <p className={Styles.qrCardText}>
        {defaultCode === true
          ? "Scan the QR code above to visit Frontend Mentor and take your coding skills to the next level!"
          : description}
      </p>
    </div>
  );
}
