import { ChangeEvent, FormEvent, useState } from "react";
import { User } from "../App";

interface Props {
  formData: Omit<User, "id">;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleReset: () => void;
  handleSubmit: (e: FormEvent) => void;
  editingId: number;
}
const UserForm = ({
  formData,
  handleChange,
  handleReset,
  handleSubmit,
  editingId,
}: Props) => {
  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          placeholder="Enter Fullname"
          value={formData.fullname}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
        />

        <select
          name="education"
          value={formData.education}
          onChange={handleChange}
        >
          <option value="Grade school">Grade school</option>
          <option value="High school">High school</option>
          <option value="College">College</option>
        </select>

        <div>
          <input
            id="male"
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>
          <input
            id="female"
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          <label htmlFor="female">female</label>
          <input
            id="other"
            type="radio"
            name="gender"
            value="other"
            checked={formData.gender === "other"}
            onChange={handleChange}
          />
          <label htmlFor="other">Other</label>
        </div>

        <label htmlFor="Typescript">Typescript</label>
        <input
          id="Typescript"
          type="checkbox"
          name="skill"
          value="Typescript"
          checked={formData.skill.includes("Typescript")}
          onChange={handleChange}
        />
        <label htmlFor="React">React</label>
        <input
          id="React"
          type="checkbox"
          name="skill"
          value="React"
          checked={formData.skill.includes("React")}
          onChange={handleChange}
        />
        <label htmlFor="Node">Node</label>
        <input
          id="Node"
          type="checkbox"
          name="skill"
          value="Node"
          checked={formData.skill.includes("Node")}
          onChange={handleChange}
        />

        <textarea
          name="bio"
          placeholder="Let me know about you"
          value={formData.bio}
          onChange={handleChange}
        />
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
        <button type="submit">{editingId ? "Save Changes" : "Add User"}</button>
      </form>
    </div>
  );
};

export default UserForm;
