import React from "react";

const CreatePlaylist = ({ title, description, submit }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="btn btn-primary mt-2 mb-4"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create Playlist
      </button>
      {showModal ? (
        <>
          <div className="">
            <div className="">
              <div className="">
                <div className="">
                  <h3 className="">Create Playlist</h3>
                </div>
                <form onSubmit={submit}>
                  <div className="">
                    <label className="">
                      <span className="px-2">Title</span>
                      <input
                        type="text"
                        name="title"
                        onChange={title}
                        required={true}
                        minLength={10}
                        className="form-control  "
                      />
                    </label>
                    <label className="px-2">
                      <span className="">Description</span>
                      <input
                        type="textarea"
                        name="description"
                        onChange={description}
                        className="form-control"
                      />
                    </label>
                  </div>
                  <div className=" mt-3 d-flex">
                    <div className="">
                      <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </div>
                    <div className="px-2">
                      <button className="btn btn-success" type="submit">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className=""></div>
          <hr></hr>
        </>
      ) : null}
    </>
  );
};

export default CreatePlaylist;
