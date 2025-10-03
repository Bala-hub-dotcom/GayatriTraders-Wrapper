export const metadata = {
  title: "Gayatri Traders",
  description: "Wrapper for Streamlit app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
