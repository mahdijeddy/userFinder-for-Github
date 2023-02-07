function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className='footer h-28 p-10 bg-lime-300 text-lime-content footer-center'>
      <div>
        
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
