import './Footer.css'
function Footer() {

  const footerYear = new Date().getFullYear()
  return (
    <div className="footer">
      <footer>Copyright &copy; {footerYear} All rights reserved</footer>
    </div>
  )
}

export default Footer