const Footer = () => {
  return (
    <footer className="fixed bottom-0 bg-white w-full py-4 text-sm, font-bold, text-black">
      <div className="w-11/12 mx-auto">
        <h3 className="mb-4">blogg.</h3>
        <hr
          style={{
            color: "#000000",
            backgroundColor: "#000000",
            height: 0.5,
            borderColor: "#000000",
          }}
        />
        <p className="text-xs mt-4 mb-4">© 2025 blogg. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
