export const metadata = {
  title: "Ego Store",
  description: "Ego Store catalog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
