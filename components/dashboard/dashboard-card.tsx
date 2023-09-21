import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card';

interface DashboardCardProps {
  title: string;
  desc?: string;
  content: JSX.Element;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  desc,
  content,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-mediumpurple-100'>{title}</CardTitle>
        <CardDescription className='text-white'>{desc}</CardDescription>
      </CardHeader>
      <CardContent className='text-white'>{content}</CardContent>
    </Card>
  );
};

export default DashboardCard;
