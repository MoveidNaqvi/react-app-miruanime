function Footer() {

  const footerYear = new Date().getFullYear()
  return (
    <div className="bg-[#393e46] text-white text-center text-xl p-3 w-full">
      <footer>Copyright &copy; {footerYear} All rights reserved</footer>
    </div>
  );
}

export default Footer