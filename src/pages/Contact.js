import { useState, useRef } from "react";
import styles from "../styles/contact.module.scss";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const error = () => {
    toast.error("Error occured! Try Again");
  };
  const success = () => {
    toast.error("Successfully sent");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      error();
    } else {
      success();

      emailjs
        .sendForm(
          "service_6bw9gsn",
          "template_g8p5duc",
          form.current,
          "pAq1mF5iHoUZu2sgO"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className={styles.contact}>
      <div className={styles.contactContent}>
        <h1>
          Contact <span>Me</span>
        </h1>
        <h3>Get In Touch</h3>

        <form ref={form} onSubmit={handleSubmit}>
          <div className={styles.contactForm}>
            <div className={styles.formSection}>
              <input
                type="text"
                name="user_name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <span>Name</span>
            </div>
            <div className={styles.formSection}>
              <input
                type="email"
                name="user_email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <span>Email Address</span>
            </div>
            <div className={styles.formSection}>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <span>Message</span>
            </div>

            <button className="button">
              <a
                href="https://github.com/f3hint0la"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect
              </a>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
