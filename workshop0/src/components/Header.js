function Header() {
  return (
    <header>
      <video src="./video.mp4" loop autoPlay muted></video>
      <h1>LiveWire-Tenkasi</h1>
      <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
          Register Here!
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
          Enroll Now!
        </button>
  </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
