import React from "react";
import { useAppSelector } from "../../redux/hooks";

const Profile = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <React.Fragment>
      <div className="h-full rounded-xl bg-slate-100">
        <div className="flex h-full items-center justify-center gap-8 rounded-full bg-white p-4">
          <div>
            <img src={user?.image} className="w-64 rounded-full" alt="avatar" />
          </div>
          <div className="flex flex-col rounded-3xl bg-slate-200 px-2 py-8 md:px-8">
            <h3 className="mb-2 text-3xl font-semibold">My Profile</h3>
            <div className="text-md flex gap-4 font-semibold">
              <div className="flex flex-col gap-1">
                <span>First Name </span>
                <span>Last Name </span>
                <span>Username </span>
                <span>Email </span>
              </div>
              <div className=" flex flex-col gap-1">
                <p> : {user?.firstName}</p>
                <p> : {user?.lastName}</p>
                <p> : {user?.username}</p>
                <p> : {user?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
