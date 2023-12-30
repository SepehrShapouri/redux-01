import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/user/userActions";

function UserContainer() {
  const { isLoading, data, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <div>
      <h1>user List</h1>
      {isLoading ? (
        <p>loading data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserContainer;
