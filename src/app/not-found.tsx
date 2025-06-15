import { HomeButton } from "./components/homeButton";

export default function NotFound() {
  return (
    <div className="fade-animation flex flex-col items-center justify-center gap-7 h-screen pb-20 text-red-800 font-bold">
      <h1>Page not found</h1>
      <HomeButton />
    </div>
  );
}
