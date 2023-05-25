import React from 'react'

export default function SkillContainer(props) {
    const className = [props.className]
    if (props.small) className.push('text-xs');

    className.push('px-4 rounded-full border border-black w-fit')
  return (
    <>
    <div className={className.join(' ')}>
        {props.children}
    </div>
    </>
  )
}
