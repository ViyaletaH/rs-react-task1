const Footer = () => {
  const handleClick = (): void => {
    window.open('https://rs.school/react/', '_blank');
  };

  return (
    <div className="footer">
      <img
        src="https://rs.school/images/rs_school_js.svg"
        alt="course logo"
        height="50px"
        width="70px"
        onClick={handleClick}
        className="course"
      />
      <div className="autor-year">
        <a href="https://github.com/ViyaletaH">github </a>
        2023
      </div>
    </div>
  );
};

export default Footer;
