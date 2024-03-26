function HeaderHref(TooglePopup) {
  return (
    <a
      onClick={TooglePopup}
      href="#user-set-target"
      className="header__user _hover02"
    >
      Ivan Ivanov
    </a>
  );
}

export default HeaderHref;
