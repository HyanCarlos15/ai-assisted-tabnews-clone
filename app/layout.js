import "./globals.css";

export const metadata = {
  title: "Página Inicial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
