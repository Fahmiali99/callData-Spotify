import React from "react";

const List = ({
  index,
  id,
  title,
  artists,
  album,
  duration,
  image,
  buttonSelect,
  textSelect,
}: any) => {
  const setSelect = () => {
    buttonSelect();
  };

  return (
    <tr key={id}>
      <div className="border p-3">
        <div className="d-flex align-items-center  ">
          <div className="h-100">
            <img className="image-artis" src={image} alt="" />
          </div>
          <div className="px-3 ">
            <div className="">
              <div>
                <h5 className="text-light fw-bold">{title}</h5>
              </div>
              <div>
                <p>{artists}</p>
              </div>
              <div>
                <p>{album}</p>
              </div>
              <div>
                {textSelect ? (
                  <button
                    className="btnSelect btn btn-warning"
                    onClick={setSelect}
                  >
                    Selected
                  </button>
                ) : (
                  <button
                    className="btnSelect  btn btn-success"
                    onClick={setSelect}
                  >
                    Select
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </tr>
  );
};

export default List;
