import "../styles/globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "StreamClone",
  description: "Local Movie Streaming UI"
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="max-w-6xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
