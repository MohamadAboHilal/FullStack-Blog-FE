const DeletePost = () => {
  handleDelete = () => {
    console.log("delete clicked");
  };
  return (
    <form onSubmit={handleDelete}>
      <h2>Delete</h2>
      <p>Are you sure?</p>
      <button type="submit">Delete</button>
      <button type="submit">Cancel</button>
    </form>
  );
};

export default DeletePost;
