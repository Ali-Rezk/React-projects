import React, { useState } from "react";
import formateDate from "../lib/formateDate";
import { Link, useLocation } from "react-router-dom";
import Comments from "./Comments";
import CreateComment from "./CreateComment";

export default function PostItem({ post }) {
  const location = useLocation().pathname.startsWith("/posts");

  const [isOpen, setIsOpen] = useState(location);

  const {
    body,
    image,
    _id,
    user: { name, photo },
    createdAt,
  } = post;

  return (
    <div className="max-w-2xl mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center py-3">
        <img src={photo} className="size-20" />
        <div>
          <p>{name}</p>
          <span className="text-gray-500 text-sm">
            {formateDate(createdAt)}
          </span>
        </div>
      </div>

      <Link to={`/posts/${_id}`}>
        <img className="w-full" src={image} alt />
      </Link>

      <div className="p-5">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {body}
        </p>
        <div className="flex justify-between fa-xl border-t border-b py-4">
          <i className="fa-solid fa-thumbs-up"></i>
          <i
            onClick={() => setIsOpen(!isOpen)}
            className="fa-solid fa-comment cursor-pointer"
          ></i>
          <i className="fa-solid fa-share"></i>
        </div>
      </div>
      {isOpen && (
        <>
          <CreateComment id={_id}></CreateComment>
          <Comments id={_id}></Comments>
        </>
      )}
    </div>
  );
}
