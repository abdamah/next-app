"use client";

import { useRouter } from "next/navigation";

const NewUsersPage = () => {
  const router = useRouter();
  return (
    <div>
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        Create
      </button>
    </div>
  );
};

export default NewUsersPage;
