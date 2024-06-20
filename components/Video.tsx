import React from 'react';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => (
  <video
    className="box-border flex object-cover relative flex-col shrink-0 mt-5 rounded min-h-[20px] min-w-[20px] size-full"
    autoPlay
    muted
    playsInline
    loop
  >
    <source type="video/mp4" src={src} />
  </video>
);

const Video: React.FC = () => {
  return (
    <main className="box-border flex relative flex-col shrink-0 mt-5 w-full min-h-[20px] min-w-[20px]">
      <section className="relative">
        <VideoPlayer src="https://cdn.builder.io/o/assets%2Fb040c704458a4dd5882fc7a298a10b02%2F2547c896d3db43c28755b6c6785b713a%2Fcompressed?apiKey=b040c704458a4dd5882fc7a298a10b02&token=2547c896d3db43c28755b6c6785b713a&alt=media&optimized=true" />
        <div className="pt-72 w-full text-xs pointer-events-none" />
      </section>
    </main>
  );
};

export default Video;