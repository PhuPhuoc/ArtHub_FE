const Comment = ({ user, text, date }) => (
    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: "10px", alignItems: 'center' }}>
      <span style={{ fontWeight: "bold", marginRight: 5, alignItems: 'center' }}>{user}: </span> {text}
        <p style={{ marginLeft: 10, fontSize: 10, alignItems: 'center', marginTop: 3, color: 'grey' }}>{date}</p>
    </div>
 );

 export default Comment;
  