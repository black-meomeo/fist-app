function PostItem({ img, title, description, public2, even }) {
  return (
    <div>
      <img src={img} alt={title}></img>
      <h2 onClick={() => even('alo')}> {title} </h2>
      <p>{description}</p>
      <p> {public2} </p>
    </div>
  );
}

export default PostItem;
