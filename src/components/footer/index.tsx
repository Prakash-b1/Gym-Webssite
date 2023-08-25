import Logo from "@/assets/Logo.png";


const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16 mt-20 text-left">
      <div className="mx-auto w-5/6 justify-center gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, nam dolor nostrum magnam saepe magni voluptatum nobis
            labore temporibus assumenda
          </p>
          <p>
          © Evogym All Rights Reserved.
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Random</p>
          <p className="my-5">Keywords</p>
          <p>Here we completed</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Dakshaybishnoi@gmail.com</p>
          <p className="my-5">7027061505</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
