import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUsers } from "../../features/user/userSlice";

function UserContainer() {
  const { isLoading, error, data } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncUsers());
  }, [dispatch]);
  return (
    <div>
      <h2>user list</h2>
      <div>
        {isLoading ? (
          <p>loading</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          data.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })
        )}
      </div>
    </div>
  );
}

export default UserContainer;
