import React from 'react'
import propTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

//do npm install prop-types react-router-dom

// usage <Button type="link" to="/register" className="classname" isDisabled isLoading>Register</Button>

// usage <Button type="button" onClick={handleClick} className="classname" isDisabled isLoading>Register</Button>

// usage <Button type="link" href="https://google.com" target="_blank" className="classname" isDisabled isLoading>Register</Button>

Button.propTypes = {
    type: propTypes.oneOf(['button', 'link']),
    onClick: propTypes.func,
    target: propTypes.string,
    href: propTypes.string,
    className: propTypes.string,
    isDisabled: propTypes.bool,
    isLoading: propTypes.bool,
    to: propTypes.string
}

export default function Button(props) {
    const className = [props.className]
    if (props.isSmall) className.push('px-7 py-2 rounded-full shadow-lg bg-[#50A4FE] text-white hover:bg-blue-500')
    if (props.isKategori) className.push('px-7 py-1 rounded-full')
    if (props.isActive) className.push('bg-[#50A4FE] text-white')
    if (!props.isActive && props.isKategori)className.push('bg-[#EBEBEB]  text-gray-500')

    const navigate = useNavigate()
    
    const onClick = () => {
        if (props.onClick) props.onClick()
    }

    if (props.type === 'link'){
        if (props.href){
            return(
                <a 
                    href={props.href} 
                    className={className.join(' ')}  
                    target={props.target === "_blank" ? "_blank" : undefined} 
                    rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
                    disabled={props.isDisabled || props.isLoading ? true : false}
                >
                    {`${props.children}`}
                </a>
            )
        }
        else {
            return (
                <button 
                    onClick={()=> navigate(props.to)} 
                    className={className.join(' ')}
                    disabled={props.isDisabled || props.isLoading ? true : false}
                >
                    {`${props.children}`}
                </button>
            )
        }
    }
    if (props.type === 'button'){
        return (
            <button 
                className={className.join(" ")} 
                onClick= {onClick} 
                disabled={props.isDisabled || props.isLoading ? true : false}
            >
                {`${props.children}`}
            </button>
        )
    }
}
