function Footer({ tripsCount }) {
  return (
    <>
      <footer className="stats">
        <p>You have {tripsCount} items on your list and you already items</p>
      </footer>
    </>
  );
}

export default Footer;
