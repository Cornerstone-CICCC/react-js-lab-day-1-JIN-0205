import { FormEvent, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";

export interface User {
  id: number;
  fullname: string;
  age: number;
  education: string;
  gender: string;
  skill: string[];
  bio: string;
}
const App = () => {
  /* Your states here */
  const initialUser: User = {
    id: 0,
    fullname: "",
    age: 0,
    education: "",
    gender: "",
    skill: [],
    bio: "",
  };
  const initialFormData: Omit<User, "id"> = {
    fullname: "",
    age: 0,
    education: "Grade school",
    gender: "male",
    skill: [],
    bio: "",
  };
  const [users, setUsers] = useState<User[]>([]);

  const [formData, setFormData] = useState<Omit<User, "id">>(initialFormData);

  const [editingId, setEditingId] = useState<number>(0);

  const [view, setView] = useState<User>(initialUser);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prevState) => {
        const updatedSkill = checked
          ? [...prevState.skill, value]
          : prevState.skill.filter((item) => item !== value); // チェックが外されれば削除

        return {
          ...prevState,
          skill: updatedSkill,
        };
      });
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (editingId) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === editingId ? { ...user, ...formData } : user
        )
      );
      setEditingId(0);
    } else {
      setUsers((prev) => [...prev, { id: prev.length + 1, ...formData }]);
    }

    setFormData(initialFormData);
  };

  const handleView = (id: number) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      setView(user);
    }
  };

  const handleEdit = (id: number) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      setFormData({
        fullname: user.fullname,
        age: user.age,
        education: user.education,
        gender: user.gender,
        skill: user.skill,
        bio: user.bio,
      });
      setEditingId(user.id);
    }
  };

  const handleDelete = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  /* Your handlers here */

  return (
    <>
      <UserForm
        formData={formData}
        handleChange={handleChange}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
        editingId={editingId}
      />
      <UserList
        users={users}
        handleView={handleView}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <UserProfile view={view} />
    </>
  );
};

export default App;
