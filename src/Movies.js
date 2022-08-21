import React, { useState } from "react";
import { Data } from "./Data";
import "./CSS/Movies.css";
import Pagination from "./Pagination";

function Movies(props) {
  console.log("App working");

  const [newArray, setNewArray] = React.useState(Data);
  const [order, setOrder] = React.useState("ASC");
  const [query, setQuery] = React.useState("");
  const [pageNumber, setPageNumber] = useState(1);

  let totalPages = Math.ceil(newArray.length / 3);

  const startIndex = 3 * (pageNumber - 1);
  const endIndex = startIndex + 2;

  function handlePagination(pageNumber) {
    setPageNumber(pageNumber);
  }
  //   let finalContent = props.Movies.filter((value, index) => {
  //     if(
  //         index >= props.selectedPage * 4 - 4 &&
  //         index <= props.selectedPage * 4 - 1
  //     ){
  //         return true;
  //     } else {
  //         return false;
  //     }
  //   });

  //   let buttonArray = [];

  //   for(let i=0; i < numberOfButtons; i++){
  //     buttonArray = [...buttonArray, i + 1];
  //   }

  //   const handlePagination = (pageNumber) => {
  //     props.setSelectedPage(pageNumber);
  //   };

  const handleclick = (deleted_id) => {
    // return (
    //   <div>
    //     {alert("Are you sure you want to delete?")}

    //   </div>
    // );
    const temparray = newArray.filter((value) => {
      if (value.id === deleted_id) {
        return false;
      }
      return true;
    });

    setNewArray(temparray);
  };

  const handleAdd = (deleted_id) => {
    alert("Click 'OK' to Add.");
  };

  const handleEdit = (deleted_id) => {
    alert("Click 'OK' to Edit.");
  };

  React.useEffect(() => {
    if (props.newGenre === "All Movies") {
      setNewArray(Data);
      return;
    }
    const sideArray = Data.filter((value, index) => {
      console.log(value);
      if (value.genre === props.newGenre) {
        console.log(value.genre);
        return true;
      } else {
        console.log(value.genre);

        console.log(value.genre, " ", props.newGenre);
        return false;
      }
    });

    setNewArray(sideArray);
    console.log(sideArray);
  }, [props.newGenre]);
  //---------------------------------------------------SORTING TITLE

  const sortingTitle = (value) => {
    if (order === "ASC") {
      const sorted = [...Data].sort((a, b) =>
        a[value].toLowerCase() > b[value].toLowerCase() ? 1 : -1
      );
      setNewArray(sorted);
      setOrder("DEC");
    }

    if (order === "DEC") {
      const sorted = [...Data].sort((a, b) =>
        a[value].toLowerCase() < b[value].toLowerCase() ? 1 : -1
      );
      setNewArray(sorted);
      setOrder("ASC");
    }
  };

  return (
    <div>
      <div className="search">
        <button type="button" data-toggle="modal" onClick={handleAdd}>
          Add New
        </button>
        <input
          style={{ marginLeft: "35px" }}
          placeholder="Enter Post Title"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <div className="movie-table">
        <p className="array-length">
          Showing {newArray.length} movies in the Table
        </p>

        <div className="table-head">
          <table className="head-table">
            <thead>
              <tr>
                <th
                  style={{ cursor: "pointer" }}
                  onClick={() => sortingTitle("title")}
                >
                  TITLE
                </th>
                <th>GENRE</th>
                <th>STOCK</th>
                {/* onClick={() => sortingRate(value.rate)} */}
                <th>RATE</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      {newArray
        .filter((value, index) => {
          if (index >= startIndex && index <= endIndex) {
            if (query === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(query.toLowerCase())
            ) {
              return value;
            }
          }
        })
        .map((value) => {
          return (
            <div className="box">
              <table className="content-table">
                <tbody>
                  <tr key={value.id}>
                    <td>{value.title}</td>
                    <td>{value.genre}</td>
                    <td>{value.stock}</td>
                    <td>{value.rate}</td>

                    {/* ---------------------------------------------- */}

                    <div>
                      <div className="del-button">
                        <button
                          type="button"
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          Delete
                        </button>
                        <button
                          type="button"
                          data-toggle="modal"
                          onClick={handleEdit}
                        >
                          Edit
                        </button>
                      </div>

                      <div class="modal fade" id="myModal" role="dialog">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h4 class="modal-title">Please Confirm</h4>
                            </div>
                            <div class="modal-body">
                              <p>Are you sure you want to delete?</p>
                            </div>
                            <div class="modal-footer">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                ></input>
                                <label
                                  class="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  Remember me
                                </label>
                                <button
                                  onClick={() => handleclick(value.id)}
                                  type="button"
                                  class="btn btn-default"
                                  data-dismiss="modal"
                                >
                                  Confirm
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </tr>
                </tbody>
              </table>

              <Pagination
                totalPages={totalPages}
                handlePagination={handlePagination}
              />
            </div>
          );
        })}
    </div>
  );
}

export default Movies;
