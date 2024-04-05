import React, { useEffect, useState } from "react";
import UserHomeNavbar from "../components/UserHomeNavbar";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Card from "react-bootstrap/Card";
import { extract_auth_state } from "../utils/ExtractAuthState";
import { extract_auth } from "../utils/ExtractAuth";
import useFetch from "../api/useFetch";

function MyAccountPage() {
  const [userDetails, setUserDetails] = useState([]);
  const user = extract_auth_state("_auth_state");
  const token = extract_auth();
  const { data, isPending, error } = useFetch(`/user/id/${user.user_id_pk}`, token);
  const [isError, setError] = useState(false);

  useEffect(() => {
    try {
      if (data) {
        const userId = data.id;
        const firstname = data.firstname;
        const lastname = data.lastname;
        const username = data.username;
        const email = data.email;
        const role = data.role;

        const userObject = {
          userId,
          firstname,
          lastname,
          username,
          email,
          role,
        };

        setUserDetails(userObject);
      }
    } catch (error) {
      console.log("Something went wrong with fetching UserDetails");
      setError(true);
      console.error(error);
    }
  }, [data]);

  return (
    <>
      <UserHomeNavbar />

      {/* Main user content goes here */}
      <Container fluid className="px-auto my-5">
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>

          <Col lg={5} className="mx-auto my-2">
            <Container className="justify-content-center">
              <h5 className="pt-3">My Account</h5>
              {/* Looading prompt */}
              {isPending && <p className="lead">Loading...</p>}
              {/* Error prompts */}
              {isError && <p className="lead">Can't load UserDetails</p>}
              {isError && <p className="lead">{error}</p>}

              {/* Render `UserDetails` here */}
              {!isPending && (
                <Card>
                  <Card.Body>
                    <Card.Title>
                      {userDetails.firstname + " " + userDetails.lastname}
                    </Card.Title>
                    <Card.Text>
                      Email: {userDetails.email} <br/>
                      Username: {userDetails.username} <br/>
                      Role: {userDetails.role} <br/>
                    </Card.Text>
                  </Card.Body>
                </Card>
              )}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyAccountPage;
