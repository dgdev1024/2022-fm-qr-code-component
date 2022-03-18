/**
 * @file components/qr-form-card.jsx
 */

import { useState } from "react";
import Qr from "qrcode";
import sanitizeHtml from "sanitize-html";
import Styles from "./qr-form-card.module.css";

export default function QrFormCard({ onSubmit = (qr) => {} } = {}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const onFormSubmit = async (ev) => {
    ev.preventDefault();
    onSubmit({
      title: sanitizeHtml(title),
      description: sanitizeHtml(description),
      code: await Qr.toDataURL(content),
    });
  };

  return (
    <form className={Styles.qrFormCard} onSubmit={onFormSubmit}>
      <h2>Add New QR Code</h2>
      <div className={Styles.qrFormCardElement}>
        <input
          className={Styles.qrFormCardText}
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          required
        />
        <label className={Styles.qrFormCardLabel} htmlFor="title">
          Title
        </label>
      </div>
      <div className={Styles.qrFormCardElement}>
        <textarea
          className={`${Styles.qrFormCardText} ${Styles.qrFormCardTextarea}`}
          id="description"
          name="description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
          required
        ></textarea>
        <label className={Styles.qrFormCardLabel} htmlFor="description">
          Description
        </label>
      </div>
      <div className={Styles.qrFormCardElement}>
        <textarea
          className={`${Styles.qrFormCardText} ${Styles.qrFormCardTextarea}`}
          id="content"
          name="content"
          value={content}
          onChange={(ev) => setContent(ev.target.value)}
          required
        ></textarea>
        <label className={Styles.qrFormCardLabel} htmlFor="content">
          Content
        </label>
      </div>
      <button className={Styles.qrFormCardSubmit} type="submit">
        Add QR Code
      </button>
    </form>
  );
}
