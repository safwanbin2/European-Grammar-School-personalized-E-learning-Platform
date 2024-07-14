import React, { useContext, useState } from "react";
import UserReview from "../../components/exploreProfile/UserReview";
import { useQuery } from "@tanstack/react-query";
import config from "../../config";
import LoadingScreen from "../../components/LoadingScreen";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";

const MyRating = () => {
  const { user } = useContext(AuthContext);
  const { data: reviews, isLoading } = useQuery({
    queryKey: [user],
    queryFn: async () => {
      const res = await fetch(`${config.base_url}/reviews/${user?.email}`);
      const data = await res.json();
      return data.data;
    },
  });

  if (isLoading) {
    return <LoadingScreen />;
  }
  console.log(reviews);
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-medium">Reviews Recieved:</h2>
      <div className="space-y-10">
        {reviews?.length
          ? reviews.map((review, i) => <UserReview key={i} review={review} />)
          : "No reviews yet."}
      </div>
      {/* <div className="text-center">
        <div className="join">
          <button className="join-item btn">«</button>
          <button className="join-item btn">Page 1</button>
          <button className="join-item btn">»</button>
        </div>
      </div> */}
    </div>
  );
};

export default MyRating;
