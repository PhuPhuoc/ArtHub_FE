const Comment = ({ user, text }) => (
    <div style={{ marginBottom: "10px" }}>
      <span style={{ fontWeight: "bold" }}>{user}:</span> {text}
    </div>
 );

 export default Comment;
  