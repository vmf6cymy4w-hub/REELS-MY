import {Video} from '@remotion/media';
import {AbsoluteFill, Composition, staticFile, useVideoConfig} from 'remotion';

type ReelProps = {
  videoFile: string;
  trimStartSeconds: number;
  volume: number;
};

export const Reel = ({videoFile, trimStartSeconds, volume}: ReelProps) => {
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: '#111827'}}>
      {videoFile ? (
        <Video
          src={staticFile(videoFile)}
          trimBefore={Math.round(trimStartSeconds * fps)}
          volume={volume}
          premountFor={fps}
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
      ) : (
        <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', padding: 100, color: '#f9fafb', fontFamily: 'Arial, sans-serif', textAlign: 'center'}}>
          <div style={{fontSize: 80, fontWeight: 700}}>Ваш следующий Reel</div>
          <div style={{fontSize: 40, marginTop: 32, lineHeight: 1.5}}>1080 × 1920 · 30 fps<br />Добавьте исходное видео для начала монтажа</div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};

export const RemotionRoot = () => (
  <Composition
    id="InstagramReel"
    component={Reel}
    width={1080}
    height={1920}
    fps={30}
    durationInFrames={900}
    defaultProps={{videoFile: '', trimStartSeconds: 0, volume: 1}}
  />
);
