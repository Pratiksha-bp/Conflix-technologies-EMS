import { date } from "yup";

function Metainfo() {
  let usertime = new Date();
  return (
    <>
      <div style={{ textAlign: "center", height: "680px" }}>
        <h4>Current Time and date is :{usertime.toString()}</h4>
        <h4>Thank you for visiting my website!</h4>
        <h3>This website was developed by: Pratiksha Baburao Patil.</h3>

        <p>
          Pratiksha Patil's Java Full Stack User Management System is a
          comprehensive and robust application designed to streamline user
          management processes with efficiency and security at its core.
          Developed with meticulous attention to detail and leveraging the
          latest technologies, this app offers a seamless user experience from
          registration to authentication and beyond. At its heart, the system
          employs Java as the primary programming language for its back-end,
          ensuring stability, scalability, and performance. The back-end is
          powered by frameworks like Spring Boot, providing a solid foundation
          for building RESTful APIs and handling complex business logic with
          ease. On the front-end, Pratiksha has utilized modern JavaScript
          frameworks like React.js or Angular.js to create a dynamic and
          intuitive user interface. This allows for smooth navigation, real-time
          updates, and responsive design across various devices and screen
          sizes. The user management functionalities encompass everything from
          user registration and login to profile management and administrative
          controls. Through secure authentication mechanisms such as JWT (JSON
          Web Tokens) or OAuth, users can access their accounts with confidence,
          while administrators have granular control over permissions and roles.
          Furthermore, the system incorporates robust data storage and
          management using technologies like MySQL or MongoDB, ensuring data
          integrity and reliability. With features like data encryption and
          regular backups, Pratiksha has prioritized data security to safeguard
          sensitive user information. In addition to its core functionalities,
          the app may include advanced features such as email verification,
          two-factor authentication, and user analytics for deeper insights into
          user behavior and engagement. Pratiksha's dedication to quality
          assurance is evident through thorough testing methodologies, including
          unit tests, integration tests, and end-to-end testing, to guarantee a
          bug-free and seamless user experience. Overall, Pratiksha Patil's Java
          Full Stack User Management System stands as a testament to her
          expertise in software development and her commitment to delivering
          high-quality solutions tailored to modern user management needs."
        </p>
      </div>
    </>
  );
}

export default Metainfo;
