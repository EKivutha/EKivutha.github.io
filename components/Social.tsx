import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedinIn, } from 'react-icons/fa'

interface SocialProps {
    containerStyles: string;
    iconStyles: string;
}
const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/EKivutha"
    },
    {
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/ezra-kivutha-6bab5b18a/"
    },
]
const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link
                        key={index}
                        href={item.path}
                        className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social
