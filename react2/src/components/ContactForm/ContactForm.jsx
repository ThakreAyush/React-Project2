import React from "react";
import styles from "./Contact.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";

const ContactForm = () => {
  return (
    <section className="{styles.container}">
      <div className={styles.container1} >
        <div className="styles.contact_form"> 
          <div className={styles.top_btn}>
            <Button
              text=" VIA SUPPORT CHAT"
              icon={<MdMessage fontSize="24px" />}
            />
            <Button text=" VIA  CALL" icon={<MdLocalPhone fontSize="24px" />} />
          </div>

          <Button
            isoutline={true}
            text=" VIA  EMAIL FORM"
            icon={<AiFillMail fontSize="24px" />}
          />

          <form>
            <div className={styles.form_controler}>
              <label htmlFor="name"> Name </label>
              <input type="text" name="name" />
            </div>

            <div className={styles.form_controler}>
              <label htmlFor="email"> E mail </label>
              <input type="email" name="email" />
            </div>

            <div className={styles.form_controler}>
              <label htmlFor="text"> Text </label>
              <textarea name="text" rows="7" />
            </div>

            <div
              style={{
                display: "flex",
              }}
            >
              <Button text="SUBMIT BUTTON" />
            </div>
          </form>
        </div>
        <div className="{styles.contact_image">
          <img src="/images/contact.svg" alt="contact image" />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
