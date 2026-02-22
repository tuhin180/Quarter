import React, { useState } from "react";
import { playIcon } from "../lib/iconProvider";

const VideoPlay = ({ src, thumbnail, WhiteColor = "#ffffff" }) => {
  console.log(thumbnail);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div
        className="relative group overflow-hidden cursor-pointer"
        onClick={toggle}
      >
        <img
          src="../../public/thumbnail.png"
          alt=""
          className="w-full h-auto rounded"
        />
        <div className="absolute inset-0  bg-black/30 group-hover:bg-black/50 rounded-lg transition-all">
          <div className="absolute inset-0 flex items-center justify-center animate-ping">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ backgroundColor: WhiteColor }}
            >
              {playIcon("#FF2A00", 20, 20)}
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop:blur-sm flex items-center justify-center cursor-pointer"
          onClick={toggle}
        >
          <div
            className="w-[90vw] max-w-3xl bg-black rounded-2xl overflow-hidden "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-2">
              <button
                className="text-white cursor-pointer hover:text-orange-700 rounded-full bg-white/20 px-3 py-1 hover:bg-white "
                onClick={toggle}
              >
                X close
              </button>
            </div>
            <video
              src={src}
              autoPlay
              controls
              className="w-full h-auto"
            ></video>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPlay;
