type VIDEO_HOST = 'youtube' | 'vimeo';

interface IVideo {
  videoHost: VIDEO_HOST;
  id: string;
}

const Video: React.FC<IVideo> = ({ videoHost, id }) => {
  const host_url: string =
    videoHost === 'youtube'
      ? `https://www.youtube.com/embed`
      : `https://player.vimeo.com/video`;
  return (
    <div className='aspect-w-16 aspect-h-9'>
      <iframe
        src={`${host_url}/${id}`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      />
    </div>
  );
};

export default Video;
