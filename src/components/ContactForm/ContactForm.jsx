import React from "react";
import styles from "./index.module.css";


const buildMailtoLink = (name, email, message) => {
  const subject = "Prime Stays Properties Inquiry";
  const body = `
Hello Prime Stays Properties Management Team,

${message}

Thank you,
${name}
`;

const mailtoLink = `mailto:contact@primestaysproperties.co.uk?subject=${encodeURIComponent(
  subject
)}&body=${encodeURIComponent(body)}`;

return mailtoLink;

}

export default function ContactForm() {

  const OnSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const message = event.target.message.value;

    const mailtoLink = buildMailtoLink(name, message);

    window.location.href = mailtoLink;
  };

  return (
    <section className={styles["contact-form-container"]}>
      <form className={styles["contact-form"]} onSubmit={OnSubmit}>
        <fieldset>
          <legend>Inquire Today!</legend>
          <div className={styles["input-section"]}>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              required
            />
            <label htmlFor="name">Name *</label>
          </div>
          <div className={styles["input-section"]}>
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              required
            ></textarea>
            <label htmlFor="message">Message *</label>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </section>
  );
}

ContactForm.defaultProps = {
  _tag: "form",
};