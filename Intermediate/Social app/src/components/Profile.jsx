import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../apis/profile.api";

export default function Profile() {
  const { id } = useParams();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["profile", id],
    queryFn: () => getUserProfile(id),
  });

  if (isError) return <h2>{error.message}</h2>;

  if (isLoading) return <Loading></Loading>;

  console.log(data);

  return <div>Profile</div>;
}
