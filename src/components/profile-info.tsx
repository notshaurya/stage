export default function ProfileInfo({ profileImg, username }: { profileImg: string; username: string }) {
    return (
        <div className="fixed left-3 top-3 flex gap-2 items-center">
            <img src={profileImg} alt="profile picture" width={10} height={10} className="object-cover size-10 rounded-full overflow-hidden z-10" />
            <p className="font-semibold">{username}</p>
        </div>
    );
}
