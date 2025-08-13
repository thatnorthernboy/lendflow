import './globals.css';

export const metadata = {
  title: 'Help a Business',
  description: '0% community micro-loans in Morocco',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Keep this minimal; the locale layout wraps <html> and provides i18n.
  return children;
}
