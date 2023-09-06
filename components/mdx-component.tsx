import { useMDXComponent } from 'next-contentlayer/hooks';
import NextImage, { ImageProps } from 'next/image';
import Video from './video';

interface MdxProps {
  code: string;
}

const components = {
  Image: (props: ImageProps) => <NextImage {...props} />,
  Video,
};

const Mdx: React.FC<MdxProps> = ({ code }) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};

export default Mdx;
