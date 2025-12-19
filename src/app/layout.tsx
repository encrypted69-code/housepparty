import React from 'react';
import './styles/tailwind.css';

export const metadata = {
  title: 'Moonlight Fiesta',
  description: 'Exclusive event experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
