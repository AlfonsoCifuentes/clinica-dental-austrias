import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700', '800'],
});

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '700'],
});

export const metadata = {
  title: 'Clinica Dental Austrias | Odontologia de precision en Palacio, Madrid',
  description:
    'Clinica Dental Austrias ofrece implantes, ortodoncia, estetica dental y rehabilitacion oral en Madrid centro con diagnostico digital y seguimiento claro.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>{children}</body>
    </html>
  );
}
