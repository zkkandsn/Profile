export default function Footer() {
  return (
    <>
      <div>
        <div className="d-flex iconsLogo mt-5 justify-content-around m-auto">
          <a
            target="_blank"
            rel="noreferrer"
            href="http://www.facebook.com/z1kkan"
          >
            <img src="http://localhost:3000/pictures/facebook.svg" alt="" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://www.instagram.com/zkkan"
          >
            <img src="http://localhost:3000/pictures/instagram.svg" alt="" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://www.twitter.com/z1kkan"
          >
            <img src="http://localhost:3000/pictures/twitter.svg" alt="" />
          </a>
        </div>
        <div className="created">Created By @Miigaa</div>
      </div>
    </>
  );
}
