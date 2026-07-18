import profileImg from "../../assets/textures/profileImg.png";

function ProfileImage() {
  return (
    <div className="flex justify-center">
      <div className="relative">

        <div
          className="
            w-[80vw]
            h-[80vw]
            max-w-[340px]
            max-h-[340px]

            sm:w-[380px]
            sm:h-[380px]

            md:w-[420px]
            md:h-[520px]
            md:max-w-none
            md:max-h-none

            rounded-[32px]
            md:rounded-[40px]

            overflow-hidden
            bg-white/5
            backdrop-blur-xl
            border
            border-cyan-400/20
            shadow-[0_0_80px_rgba(34,211,238,.18)]
          "
        >
          <img
            src={profileImg}
            alt="Nishitha"
            className="w-full h-full object-cover object-top"
          />
        </div>

      </div>
    </div>
  );
}

export default ProfileImage;