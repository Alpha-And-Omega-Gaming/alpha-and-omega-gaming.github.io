import Image from "next/image";

import avatarIcon from "../../public/avatar_icon.png";

const ProfileCard = ({ name, bio }) => {
    return (
        <li className="flex flex-row justify-start items-center my-10 bg-white/5 border border-white/20 p-4 rounded-lg">
            <div className="flex flex-col justify-center items-center w-25">
                <Image src={avatarIcon} alt={name} className="rounded-full aspect-square object-cover" />
                <h1 className="text-xl font-bold text-white text-center">{name}</h1>
            </div>
            <p className="ml-8 text-lg text-gray-300 w-full">
                {bio}
            </p>
        </li>
    );
}

export default ProfileCard;