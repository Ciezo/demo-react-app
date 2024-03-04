import React from "react";

function DataCollectionCard() {
  return (
    <>
      <div className="p-4 p-md-5 border rounded-3 mb-5">
        <h2 className="display-5">How Inkdown uses and collects data</h2>
        <hr />

        <p>
          At Inkdown, we value your privacy and are committed to being
          transparent about how we collect and handle your data. Here we explain
          how various data collection points and their relevance in our system.
          Please read this information carefully to understand how your data is
          processed and used when you use Inkdown.
        </p>

        <h4>
          <b>1. User Account Information</b>
        </h4>

        <p>
          When you sign up for an account on Inkdown, we collect the following
          data:
        </p>

        <ol>
          <li>First Name</li>
          <li>Last Name</li>
          <li>Birthday</li>
          <li>Username</li>
          <li>Password</li>
        </ol>

        <p>
          This data is essential for providing you access to your account and
          ensuring a personalized experience within Inkdown. Your username and
          password are encrypted for enhanced security.
        </p>

        <h4>
          <b>2. Note Creation and Management</b>
        </h4>

        <p>
          Inkdown allows you to create and manage text-based notes. When you
          create a note, the following data is collected:
        </p>

        <ol>
          <li>Author: The user who created the note.</li>
          <li>Title: The title of the note.</li>
          <li>Body: The content of the note.</li>
          <li>Date Posted: The date when the note was created.</li>
        </ol>

        <p>
          This data is used to organize and display your notes within the
          Inkdown service, making it easier for you to access and manage your
          content.
        </p>

        <h4>
          <b>3. Trash Bin Functionality</b>
        </h4>

        <p>
          Inkdown provides a "Trash" feature that temporarily stores deleted
          notes. When a note is moved to the "Trash," we collect the following
          data:
        </p>

        <p>
          The "Trash" feature allows you to restore deleted notes or permanently
          delete them from your account.
        </p>

        <h4>
          <b>Data Relevance and Security</b>
        </h4>

        <p>
          The data we collect through Inkdown is directly relevant to providing
          you with a seamless text-editing experience and account management. We
          do not share your data with third parties without your consent, except
          as outlined in our Privacy Policy.
        </p>
        <p>
          Ensuring the security of your data is a top priority for us. We have
          implemented robust security measures to protect your information from
          unauthorized access, alteration, or disclosure. Your passwords are
          encrypted to further enhance data protection.
        </p>
        <p>
          If you have any questions or concerns about how we collect and handle
          your data, please refer to our Privacy Policy or contact us at{" "}
          <a href="mailto:cloydvansecuya@gmail.com">
            <b>cloydvansecuya@gmail.com</b>
          </a>
          .
        </p>

        <div className="px-4 mx-0 mb-5">
          <h5>Thank you for choosing Inkdown for your text-editing needs!</h5>
          <h6>&copy; 2024 Cloyd Van Secuya. All rights reserved.</h6>
          <a href="https://www.linkedin.com/in/cloydvansecuya/">LinkedIn</a>
        </div>
      </div>
    </>
  );
}

export default DataCollectionCard;
