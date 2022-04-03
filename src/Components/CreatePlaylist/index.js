import React from "react";

const CreatePlaylist = ({ title, description, submit }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button className="" type="button" onClick={() => setShowModal(true)}>
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
                      <span className="">Title</span>
                      <input
                        type="text"
                        name="title"
                        onChange={title}
                        required={true}
                        minLength={10}
                        className=" "
                      />
                    </label>
                    <label className="">
                      <span className="">Description</span>
                      <input
                        type="textarea"
                        name="description"
                        onChange={description}
                        className=""
                      />
                    </label>
                  </div>
                  <div className="">
                    <button
                      className=""
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button className="" type="submit">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className=""></div>
        </>
      ) : null}
    </>
  );
};

export default CreatePlaylist;
