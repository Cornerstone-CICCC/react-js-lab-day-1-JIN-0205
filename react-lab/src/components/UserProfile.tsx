import { User } from "../App";

interface Props {
  view: User;
}
const UserProfile = ({ view }: Props) => {
  return (
    <div>
      <h2>user profile</h2>
      {view.fullname && (
        <div>
          <div>
            id: <span>{view.id}</span> fullname: <span>{view.fullname}</span>
          </div>
          <div>
            age: <span>{view.age}</span> education:{" "}
            <span>{view.education}</span> gender:
            <span>{view.gender}</span>
          </div>

          <div>
            skill:{" "}
            <span>
              {view.skill.map((s) => (
                <span key={s}>{s} </span>
              ))}
            </span>
          </div>
          <div>
            bio: <span>{view.bio}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
