import * as HeroIcons from '@heroicons/react/24/outline';
import * as HeroIconsSolid from '@heroicons/react/24/solid';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
  solid?: boolean;
}

export default function AppIcon({ name, className = '', size = 24, solid = false }: IconProps) {
  const IconSet = solid ? HeroIconsSolid : HeroIcons;
  const IconComponent = IconSet[name as keyof typeof IconSet] as any;

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} width={size} height={size} />;
}