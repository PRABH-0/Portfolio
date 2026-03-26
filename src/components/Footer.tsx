export default function Footer() {
  return (
    <footer className="w-full py-8 text-center text-xs tracking-wider text-muted border-t border-[#222] mt-24">
      <div className="max-w-5xl mx-auto px-8 flex justify-center items-center">
        <p>&copy; {new Date().getFullYear()} Prabhjot Singh. All rights reserved.</p>
      </div>
    </footer>
  );
}
