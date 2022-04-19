import React from "react";
import { InputGroup, FormControl, Form, Button, Col } from "react-bootstrap";

type Props = {
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AddPlaylist = ({ title, description, submit }: Props) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="p-2">
        <Button
          className=" mt-2 mb-4"
          variant="primary"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Create Playlist
        </Button>
        {showModal ? (
          <>
            <div className="p-0">
              <Col>
                <h3 className="">Create Playlist</h3>
              </Col>
              <Form onSubmit={submit}>
                <Col>
                  <h5>Title</h5>
                  <InputGroup className="mb-3">
                    <FormControl
                      aria-label="Text input with checkbox"
                      onChange={title}
                      required={true}
                      minLength={10}
                      type="text"
                      name="title"
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <h5>Description</h5>
                  <InputGroup>
                    <FormControl
                      aria-label="Text input with radio button"
                      onChange={description}
                      type="textarea"
                      name="description"
                    />
                  </InputGroup>
                </Col>

                <div className=" mt-3 d-flex">
                  <Button
                    variant="danger"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </Button>

                  <div className="px-2">
                    <Button variant="success" type="submit">
                      Save Changes
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
            <hr></hr>
          </>
        ) : null}
      </div>
    </>
  );
};

export default AddPlaylist;
