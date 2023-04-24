import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (<>
    <footer className="py-4">

    </footer>
        <footer className="py-4">
        <div className="container-xxl">
            <div className="row">
                <div className="col-4">
                </div>
                <div className="col-3 text-white mb-4">
                <h4 className="text-white">Quick Links</h4>
                
                <div className="footer-link d-flex flex-column">
                    <a className="text-white mb-1 py-1" >Home</a>
                    <a className="text-white mb-1 py-1" >Products</a>
                    <a className="text-white mb-1 py-1" >About</a>
                    <a className="text-white mb-1 py-1" >Contact</a>
                    <a className="text-white mb-1 py-1" >Frequenly Asked Question</a>
                    <a className="text-white mb-1 py-1" >Privacy Policy</a>
                    <a className="text-white mb-1 py-1" >Terms & Condition</a>
                </div>
                </div>
                <div className="col-3 text-white mb-4">
                <h4 className="text-white">Contact Us</h4>
                <div className="footer-link d-flex flex-column">
                    <a className="text-white mb-1 py-1" >Need Help or Have a Question?</a>
                    <p>Phone: 999999999</p>
                    <p>Email: info@tarun.com</p>
                    <div className="social-icons">
                        <a className="text-white" href="https://instagram.com/bespokecollectives?igshid=YmMyMTA2M2Y="><img className=" icon-size" src="/instagram-svgrepo-com.svg" alt="social icons" /></a>
                        <a className="text-white" href="https://instagram.com/bespokecollectives?igshid=YmMyMTA2M2Y="><img className=" icon-size" src="/facebook-svgrepo-com.svg" alt="social icons" /></a>
                        <a className="text-white" href="https://instagram.com/bespokecollectives?igshid=YmMyMTA2M2Y="><img className=" icon-size" src="/youtube-svgrepo-com.svg" alt="social icons" /></a>
                        <a className="text-white" href="https://instagram.com/bespokecollectives?igshid=YmMyMTA2M2Y="><img className=" icon-size" src="/linkedin-svgrepo-com.svg" alt="social icons" /></a>
                    </div>
                </div>
                </div>
                <div className="col-2 text-white mb-4">
                <h4 className="text-white">Get Direction</h4>
                <div className="footer-link d-flex flex-column">                    
                    <p>Address Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                </div>
            </div>
        </div>
        </footer>
        <footer className="py-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12 mb-0 text-white">
                        <p className="text-center">&copy; {new Date().getFullYear()} TarunScape</p>
                    </div>
                </div>
            </div>
        </footer>
        </>);
}
