/**
 * @file components/qr-card.jsx
 */

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Styles from "./qr-card.module.css";

export default function QrCard({
  index,
  defaultCode,
  code,
  title,
  description,
  onDelete = (index) => {},
} = {}) {
  return (
    <div
      className={`${Styles.qrCard} ${
        defaultCode === false && Styles.qrUserCard
      }`}
    >
      {defaultCode === false && (
        <>
          <button
            className={Styles.qrCardDeleteButton}
            onClick={onDelete}
            aria-label="Delete QR Code"
            title="Delete QR Code"
          >
            <Fa icon={faTrash} />
          </button>
        </>
      )}
      <div className={Styles.qrCodeImageContainer}>
        {defaultCode === true ? (
          <img src="/images/image-qr-code.png" alt="Frontend Mentor QR Code" />
        ) : (
          <img src={code} alt={title} />
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
