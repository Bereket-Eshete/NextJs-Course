import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return <h1 className="text-2xl p-4">User Profile {params.id}</h1>;
};

export default page;
