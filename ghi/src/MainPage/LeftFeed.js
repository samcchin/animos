import "./MainPage.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LocationsIcon from "../assets/icons/locations.png";

function LeftFeed() {
  const user = useSelector((state) => state.user);
  const pets = useSelector((state) => state.pets);
  const userPets = pets.filter((pet) => pet.user_id === user.id);

  function ProfileCard() {
    return (
      <>
        <div className="card home-profile-card">
          <div className="card-body">
            <img
              src={user.picture_url}
              alt=""
              className="rounded-circle profile-card-image"
              width="150"
              height="150"
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />

            {user && (
              <div className="h4 profile-card-first-last-name" key={user.id}>
                {user.first_name} {user.last_name}
              </div>
            )}

            <div className="h7 home-profile-card-links">
              <Link to={`/profile/${user.email}`}>My Profile</Link>
            </div>
          </div>
        </div>
        <br />
        <div className="card home-pets-card">
          <h5 className="my-pets-title">
            <Link to="/pets" className="card-my-pets-title">
              My Pets
            </Link>
          </h5>
          <div className="card-body row row-cols-3">
            <br />
            {userPets.map((pets) => {
              return (
                <>
                  <div
                    key={pets.id}
                    className="card align-items-center"
                    style={{ width: "fit", border: "none" }}
                  >
                    <img
                      className="rounded-circle "
                      src={pets.pet_picture_url}
                      alt=""
                      width="50"
                      height="50"
                      key={pets.id}
                      style={{ objectFit: "cover" }}
                    />
                    <p className="card-text">{pets.pet_name}</p>
                  </div>
                </>
              );
            })}

            <br />
          </div>
        </div>
      </>
    );
  }

  function MyLinksCard() {
    return (
      <div className="card">
        <div className="card-body">
          <ul className="list-group events-friends list-group-flush">
            <li className="list-group-item" key="location">
              <Link to="/locations">
                <img
                  className="left-main-icon"
                  src={LocationsIcon}
                  width="35px"
                  alt="Location icon"
                />
                Locations
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      <ProfileCard />
      <br />
      <MyLinksCard />
    </>
  );
}

export default LeftFeed;
