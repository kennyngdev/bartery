import { useState, useRef } from "react";
import { addPost } from "../utils";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import MailChecker from "mailchecker";

function UserInput({ posts, setPosts, currentLocation }) {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const nameEl = useRef(null);
  const emailEl = useRef(null);
  const giveEl = useRef(null);
  const wantEl = useRef(null);
  const imageEl = useRef(null);

  async function submitPost() {
    if (
      !MailChecker.isValid(emailEl.current.value) ||
      !nameEl.current.value ||
      !giveEl.current.value ||
      !wantEl.current.value
    ) {
      window.alert("Input error. Please check your input!");
      return;
    }
    if (currentLocation !== null) {
      addPost({
        lat: currentLocation.lat,
        lng: currentLocation.lng,
        name: nameEl.current.value,
        email: emailEl.current.value,
        give: giveEl.current.value,
        want: wantEl.current.value,
        photo: file,
      });
    } else {
      addPost({
        name: nameEl.current.value,
        email: emailEl.current.value,
        give: giveEl.current.value,
        want: wantEl.current.value,
        photo: file,
      });
    }
    let newPost = {
      name: nameEl.current.value,
      email: emailEl.current.value,
      give: giveEl.current.value,
      want: wantEl.current.value,
      photo: file,
    };

    await setPosts([ ...posts, newPost]);
    setShow(false);
  }

  return (
    <>
      <Button size="sm"  variant="primary" onClick={handleShow}>
        Create Your Post!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Prepend></InputGroup.Prepend>
            <FormControl
              placeholder="Your Name"
              aria-label="Username"
              aria-describedby="basic-addon1"
              ref={nameEl}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend></InputGroup.Prepend>
            <FormControl
              placeholder="Email"
              aria-label="Useremail"
              aria-describedby="basic-addon1"
              ref={emailEl}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Offering</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="clothes, electircal appliances..."
              aria-label="give"
              aria-describedby="basic-addon1"
              ref={giveEl}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">In return for</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="anything you want!"
              aria-label="want"
              aria-describedby="basic-addon1"
              ref={wantEl}
            />
          </InputGroup>
          <Form.Group>
            <Form.File
              ref={imageEl}
              onChange={(e) => {
                setFile(e.target.files[0]);
              }} //set file object into state
              id="exampleFormControlFile1"
              label="Upload Photo of your good:"
              accept="image/png, image/jpeg, image/gif"
              webkitdirectory
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitPost}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserInput;
