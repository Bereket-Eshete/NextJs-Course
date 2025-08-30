import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div>
      User page
      <ul>
        <li>
          <Link href="/dashboard/user/1">user1</Link>
        </li>
        <li>
          <Link href="/dashboard/user/2">user2</Link>
        </li>
        <li>
          <Link href="/dashboard/user/3">user3</Link>
        </li>
        <li>
          <Link href="/dashboard/user/4">user4</Link>
        </li>
        <li>
          <Link href="/dashboard/user/5">user5</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
