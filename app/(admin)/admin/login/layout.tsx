export const metadata = {
    title: "EET | Admin Login",
    description: "EET | Admin Login",
  };
  
  import "../../../globals.css";
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }