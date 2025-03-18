import RouterButton from '@/components/RouterButton';

export const metadata = {
  description: 'About page description',
  title: 'About Page',
};

export default function About() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <p>This is the about page content.</p>
      <RouterButton />
    </div>
  );
}
