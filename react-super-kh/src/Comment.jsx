const formatDate = (date) => {
  return new Date(date).toTimeString();
};

const Avatar = (props) => {
  return (
    <img
      src={props.author.avatarUrl}
      alt={props.author.name}
      className="avatar"
    />
  );
};

const UserInfo = (props) => {
  return (
    <div className="userInfo">
      <Avatar author={props.author} />
      <div className="userInfo-name">{props.author.name}</div>
    </div>
  );
};

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo author={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
export default Comment;
