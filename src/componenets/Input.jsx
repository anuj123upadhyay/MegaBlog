import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
},ref){
    const id = useId()
    return (
        <div className='w-full '>
            {label && 
            <label htmlFor={id} className="w-full ">
            <p className="text-[0.875rem] text-richblack-600 mb-1 leading-[1.375rem] flex flex-1">
              {label}
              <sup className="text-pink-400">*</sup>
            </p>
            </label>
            }
            <input 
            type={type}
            className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref = {ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input
