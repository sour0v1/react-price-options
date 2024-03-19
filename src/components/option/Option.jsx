
import { TiTickOutline } from "react-icons/ti";
import PropTypes from 'prop-types';

const Option = ({ option }) => {
    const { billing_cycle, features, name, price } = option;
    // console.log(option)
    return (
        <div className='bg-gray-300 p-6 space-y-3 text-center flex flex-col rounded'>
            <h1 className='text-xl'>{name}</h1>

            {
                features.map((feature, idx) => <p className='flex items-center grow' key={idx} ><TiTickOutline />{feature}</p>)
            }
            <div className='flex items-center gap-2 justify-center'>
                
                <p className='text-xl font-bold'>${price}</p>
                <sub>{billing_cycle}</sub>
            </div>
            <button className='bg-black text-white px-4 py-2 rounded w-full'>Buy</button>
        </div>
    );
};
Option.propTypes = {
    option : PropTypes.object
}
export default Option;