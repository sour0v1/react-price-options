import { useState } from "react";
import Link from "../link/Link";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [open, setOpen] = useState(true);
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/contact", name: "Contact" },
        { id: 4, path: "/products", name: "Products" },
        { id: 5, path: "/services", name: "Services" }
    ];

    return (
        <nav className="bg-slate-200 px-5 py-3">
            <div className="flex md:flex-row justify-between items-center">
                <div className="flex gap-6 items-center">
                    <div onClick={() => setOpen(!open)} className="text-2xl md:hidden" >
                        {
                            open ? <AiOutlineMenu /> : <RxCross1 />
                        }


                    </div>
                    <h1 className="text-2xl font-bold text-gray-600">UI</h1>
                </div>

                <ul className={`md:flex bg-slate-800 md:bg-slate-200 text-white h-full px-9 py-6 md:px-0 md:py-0 space-y-4 md:space-y-0 absolute md:static duration-500 md:duration-0 ${open ? '-left-60 top-16' : 'left-0 top-16'}`}>
                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
                </ul>

                
                    <button className="px-3 py-2 bg-gray-400 rounded-lg text">Button</button>
                
            </div>

        </nav>
    );
};

export default Navbar;