/**
 * @file components/add-button.jsx
 */

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Styles from "./add-button.module.css";

export default function AddButton({ toggled, onClick = (toggled) => {} } = {}) {
  return (
    <button
      className={`${Styles.addButton} ${toggled && Styles.addButtonToggled}`}
      onClick={() => onClick(!toggled)}
      aria-label={
        toggled ? "Dismiss Add New QR Code Window" : `Add New OR Code`
      }
      title={toggled ? "Dismiss Add New QR Code Window" : `Add New QR Code`}
    >
      <Fa icon={faPlus} />
    </button>
  );
}
