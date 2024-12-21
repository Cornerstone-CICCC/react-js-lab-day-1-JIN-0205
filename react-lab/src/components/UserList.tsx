import { User } from "../App";

interface Props {
  users: User[];

  handleView: (id: number) => void;
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
}
const UserList = ({ users, handleView, handleEdit, handleDelete }: Props) => {
  return (
    <div>
      <h2>user list</h2>
      <table>
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }}>ID</th>
            <th style={{ border: "1px solid black" }}>Fullname</th>
            <th style={{ border: "1px solid black" }}>VIEW</th>
            <th style={{ border: "1px solid black" }}>EDIT</th>
            <th style={{ border: "1px solid black" }}>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th style={{ border: "1px solid black" }}>{user.id}</th>
              <td style={{ border: "1px solid black" }}>{user.fullname}</td>
              <td style={{ border: "1px solid black" }}>
                <button onClick={() => handleView(user.id)}>VIEW</button>
              </td>
              <td style={{ border: "1px solid black" }}>
                <button onClick={() => handleEdit(user.id)}>Edit</button>
              </td>
              <td style={{ border: "1px solid black" }}>
                <button onClick={() => handleDelete(user.id)}>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
