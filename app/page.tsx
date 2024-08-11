import Profile from "./components/Profile";
import LinkButton from "./components/LinkButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-lg glass-effect rounded-3xl p-8 shadow-xl animate-fade-in">
        <Profile
          name="Ridwan Mohamed"
          avatar="/avatar.jpg"
          title="Full Stack Developer"
          bio="Passionate Full Stack developer with 3 years of experience in creating beautiful, responsive, and user-friendly web applications. My mission is to build digital experiences that not only look great but also solve real-world problems."
        />
        <div className="space-y-4 animate-slide-up">
          <LinkButton
            href="https://rimoza.vercel.app"
            text="My Website"
            icon="website"
          />
          <LinkButton
            href="https://github.com/rimoza"
            text="GitHub"
            icon="github"
          />
          <LinkButton
            href="https://www.linkedin.com/in/rimoza/"
            text="LinkedIn"
            icon="linkedin"
          />
          <LinkButton
            href="https://twitter.com/rimoza_10"
            text="Twitter"
            icon="twitter"
          />
          <LinkButton
            href="https://instagram.com/rimoza.io"
            text="Instagram"
            icon="instagram"
          />
        </div>
      </div>
    </main>
  );
}
