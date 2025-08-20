import type { FC } from "react";
import type { User } from "../interfaces/reqres.response";

interface Props {
  user: User;
}

export const UserRow: FC<Props> = ({ user }) => {
  return (
    <tr>
      <td>
        <img
          src={user.avatar}
          alt="User Avatar"
          className="rounded-full w-14 p-2"
        />
      </td>
      <td>
        {user.first_name} {user.last_name}
      </td>
      <td>{user.email}</td>
    </tr>
  );
};
