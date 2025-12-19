import type { Metadata } from 'next';
import MainExperienceInteractive from './components/MainExperienceInteractive';

export const metadata: Metadata = {
  title: 'Main Experience - Moonlight Fiesta',
  description: 'Discover Kolkata\'s most exclusive private disco experience. Premium nightlife with curated crowd, live DJ, unlimited food & drinks, and luxury amenities. Book your entry pass now.',
};

export default function MainExperiencePage() {
  return <MainExperienceInteractive />;
}