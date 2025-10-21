import Image from "next/image";

export default function Home() {
  return (
    <div className="loader-container">
      <Image
        src="/next.svg"
        alt="Portfolio logo"
        width={120}
        height={120}
        className="loader-logo"
        priority
      />
      <div className="spinner"></div>
      <h1 className="message">Portfolio is under construction...</h1>
      <p className="subtext">Currently trying Next.js :P</p>
    </div>
  );
}
