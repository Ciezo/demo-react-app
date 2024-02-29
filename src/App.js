import CustomNavbar from "./components/Navbar";
import WelcomeCard from "./components/WelcomeCard";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <CustomNavbar />
      <div className="container-sm mx-auto pt-5">
        <WelcomeCard />
        <Cards
          header={"Unleash Your Creativity"}
          body={
            "With Inkdown, the power to customize your content is in your hands. Emphasize your thoughts with bold and italics, create organized lists with numbering, and add links to your texts for a seamless experience. Editing your content is a breeze!"
          }
          isRowReverse={false}
        />

        <Cards
          header={"Always Remembered"}
          body={
            "Inkdown values your work and ensures that your notes are persistently saved, ready to be accessed whenever you need them. Say goodbye to losing your ideas and hello to a reliable companion that keeps track of your thoughts."
          }
          isRowReverse={true}
        />

        <Cards
          header={"Lightning-Fast Data Retrieval"}
          body={
            "Powered by React.js cutting-edge lightweight and dynamic capabilities, Inkdown fetches your notes in the blink of an eye. Say goodbye to waiting and hello to instant access!"
          }
          isRowReverse={false}
        />

        <Cards
          header={"Seamless 24/7 Access"}
          body={
            "Inkdown deploys a remote database pipeline, guaranteeing 24/7 access for all users. Your notes are always within reach, no matter where you are."
          }
          isRowReverse={true}
        />

        <Cards
          header={"Scale with Ease"}
          body={
            "Our source code is designed with scalability in mind, using Classes and Controllers to collect events and user data. Inkdown grows with you, accommodating your needs as they evolve."
          }
          isRowReverse={true}
        />

        <Cards
          header={"Your Space, Your Way"}
          body={
            "We believe in user-centric design, and that's why Inkdown ensures that each user has access to their own respective pages. Enjoy a seamless and personalized experience every time."
          }
          isRowReverse={false}
        />

        <Cards
          header={"Elegance and Intuition"}
          body={
            "Inkdown's user interface is elegantly simple yet remarkably intuitive and dynamic. We understand the value of aesthetics, making your note-taking experience a pleasure."
          }
          isRowReverse={true}
        />

        <Cards
          header={"A Symphony of Functionality"}
          body={
            "Inkdown offers a comprehensive CRUD system, operating on a PHP local API. This wrapper ensures flawless logic and data handling, giving you complete control over your content."
          }
          isRowReverse={false}
        />

        <Cards
          header={"Archive and Restore"}
          body={
            "Never fear losing your valuable notes again! Inkdown implements cutting-edge techniques for archiving and restoring. Safeguard your work and easily restore it whenever needed."
          }
          isRowReverse={true}
        />

        <Cards
          header={"Save, Edit, Remove, and Restore Notes"}
          body={
            "Inkdown has ways to create, edit, and delete personalized notes whilst maintaining the ability to archive and restore them. With Inkdown, the power to customize your content is in your hands. Emphasize your thoughts with bold and italics, create organized lists with numbering, and add links to your texts for a seamless experience. Editing your content is a breeze!  "
          }
          isRowReverse={false}
        />

        <Cards
          header={"The future of note taking"}
          body={
            "Embrace the future of note-taking with Inkdown, where speed, creativity, and reliability converge to give you the ultimate writing experience. Say hello to a world of seamless personalization and innovation today!"
          }
          isRowReverse={true}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
