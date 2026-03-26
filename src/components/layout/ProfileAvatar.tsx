import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function ProfileAvatar() {
  return (
    <>
      <Avatar>
        <AvatarImage src={""} alt="ProfilePic" className="grayscale" />
        <AvatarFallback>IS</AvatarFallback>
      </Avatar>
    </>
  );
}
