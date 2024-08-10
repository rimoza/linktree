import Image from "next/image";

interface ProfileProps {
  name: string;
  avatar: string;
  title: string;
  bio: string;
}

const Profile = ({ name, avatar, title, bio }: ProfileProps) => {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <Image
          src={avatar}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-full border-4 border-white shadow-lg"
        />
      </div>
      <h1 className="text-3xl font-bold mb-2 text-white">{name}</h1>
      <h2 className="text-xl text-gray-200 mb-4">{title}</h2>
      <p className="text-gray-200 text-sm mb-6 max-w-xs mx-auto">{bio}</p>
    </div>
  );
};

export default Profile;
