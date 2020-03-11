import React, { useState, useEffect, useContext } from "react";
import { IdContext } from "../contexts/IdContext";
import Property from "./Property";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddProperty from "./AddProperty";

const HomePage = () => {
  const { id, setId } = useContext(IdContext);
  const [editCard, setEditCard] = useState(null);
  const [listings, setListings] = useState([]);
  const [message, setMessage] = useState("");

  const getUsers = () => {
    axiosWithAuth()
      .get(`/host/${id}/properties`)
      .then(res => {
        console.log("initial get", res);
        setListings(res.data.user_properties || []);
        setMessage(res.data.message);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const setValuesToListings = (newValue, id) => {
    console.log("svtl", id, newValue);
    setEditCard(null);
    setMessage("");
    if (id) {
      setListings(
        listings.map(item => {
          return item.id === id ? newValue : item;
        })
      );
    } else {
      setListings([...listings, newValue]);
    }
    return newValue;
  };

  return (
    <div className="listingPage">
      <div className="form-wrapper">
        <div className="form-square">
          {editCard ? <h1> Edit a Property</h1> : <h1> Add A Property</h1>}
          <AddProperty
            hostId={id}
            setValuesToListings={setValuesToListings}
            editCard={editCard}
          />
        </div>
      </div>
      <div className="grid-wrapper">
        <div className="grid">
          {message ? (
            <h1>{message}</h1>
          ) : listings.length ? (
            listings.map(item => (
              <Property
                key={item.id}
                hostId={id}
                item={item}
                setListings={setListings}
                listings={listings}
                setEditCard={setEditCard}
                editCard={editCard}
              />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
};
export default HomePage;