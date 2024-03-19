import { useEffect, useState } from "react";
import Option from "../option/Option";

const PriceOptions = () => {
    const [options, setOptions] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setOptions(data.membership_options
                ))
    },[])
    console.log(options)
    return (
        <div className="max-w-7xl mx-auto">
            <h1>Price options : {options.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                options.map((option, idx) => <Option option = {option} key={idx}></Option>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;