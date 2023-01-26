function dateUser(date) {
  return new Date().toDateString(date);
}

function Avatar(props) {
  return (
    <img
      alt={props.user.name}
      src={props.user.avatar}
      className="userInfoAvatar"
    />
  );
}

function UserInfo(props) {
  return (
    <div className="userInfo">
      <Avatar user={props.users} />
      <div className="userName">{props.users.name}</div>
    </div>
  );
}
const users = {
  name: "Trung",
  age: 24,
  address: "Hà Nội",
  content: "adasdasd",
  date: "28-12-1999",
};

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo users={users} />
      <div className="userContent">{users.content}</div>
      <div className="userDate">{dateUser(users.date)}</div>
    </div>
  );
}

export default Comment;
