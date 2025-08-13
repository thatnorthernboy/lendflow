export default function Footer() {
  return (
    <footer className="py-10 bg-deepblue text-white">
      <div className="container-max grid sm:grid-cols-3 gap-6">
        <div>
          <div className="text-xl font-bold">Help a Business</div>
          <p className="text-sm opacity-90 mt-2">Safe, local, and simple.</p>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <ul className="text-sm mt-2 space-y-1 opacity-90">
            <li>Email: majid@helpabusiness.ma</li>
            <li>WhatsApp: +212 xxx xxx xxx</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Legal</div>
          <ul className="text-sm mt-2 space-y-1 opacity-90">
            <li><a href="#" className="underline">Privacy</a></li>
            <li><a href="#" className="underline">Terms</a></li>
            <li><a href="#" className="underline">Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="container-max mt-6 text-xs opacity-60">© {new Date().getFullYear()} Help a Business</div>
    </footer>
  );
}
