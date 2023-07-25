import "./MainPage.css";
// import { NavLink } from 'react-router-dom';
// import PetsList from '../PetsList/PetsList';
import { useSelector } from "react-redux";
import CalendarIcon from "../assets/icons/calendar.png";
import FriendsIcon from "../assets/icons/friends.png";
import LocationsIcon from "../assets/icons/locations.png";

function LeftFeed() {
  const user = useSelector((state) => state.user);
  const pets = useSelector((state) => state.pets);
  const userPets = pets.filter((pet) => pet.user_id === user.id);

  function ProfileCard() {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <img
              src={user.picture_url}
              alt=""
              className="rounded-circle"
              width="150"
              height="150"
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />

            {user && (
              <div className="h5">
                {user.first_name} {user.last_name}
              </div>
            )}
            <div className="h6 text-muted">Username : @</div>
            <div className="h7">Profile Page | Edit Profile</div>
          </div>
        </div>

        <div className="card">
          <h5>
            <a href="/pets" className="card-subtitle">
              My Pets
            </a>
          </h5>
          <div className="card-body row row-cols-3">
            <br />

            {userPets.map((pets, index) => {
              return (
                <>
                  <div
                    className="card align-items-center"
                    style={{ width: "6rem", border: "none" }}
                  >
                    <img
                      className="rounded-circle card-img-top"
                      src={pets.pet_picture_url}
                      alt=""
                      width="50"
                      height="90"
                      key={pets.id}
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
            <li className="list-group-item">
              <a href="/events">
                <img
                  className="left-main-icon"
                  src={CalendarIcon}
                  width="35px"
                  alt="calendar"
                />
                My Events
              </a>
            </li>
            <li className="list-group-item">
              <a href="/friends">
                <img
                  className="left-main-icon"
                  src={FriendsIcon}
                  width="35px"
                  alt="friends icon"
                />
                Friends
              </a>
            </li>
            <li className="list-group-item">
              <a href="/locations">
                <img
                  className="left-main-icon"
                  src={LocationsIcon}
                  width="35px"
                  alt="Location icon"
                />
                Locations
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      <ProfileCard />
      <MyLinksCard />
    </>
  );
}

export default LeftFeed;
