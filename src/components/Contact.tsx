import Link from "next/link";

export default function Contact() {
  const links = [
    { label: "Email", href: "mailto:priyanshumahor65@gmail.com", text: "Email Me" },
    { label: "Phone", href: "tel:+918871255601", text: "+91 8871255601" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/priyanshu-mahor/", text: "LinkedIn" }, // Using generic or # for now as full URL wasn't provided, but clickable
    { label: "GitHub", href: "https://github.com/PriyanshuMahor", text: "GitHub" }
  ];

  return (
    <section className="relative z-20 bg-[#070010] py-32 px-8 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
          Let's <span className="text-[#c084fc] italic">Connect</span>.
        </h2>
        <p className="text-gray-400 text-xl font-light mb-20 max-w-2xl mx-auto">
          Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
          {links.map((link, idx) => (
            <div key={idx} className="group relative">
              <span className="block text-sm uppercase tracking-widest text-gray-500 mb-2 font-mono">
                {link.label}
              </span>
              <Link
                href={link.href}
                className="inline-block text-2xl md:text-3xl lg:text-4xl font-light text-white hover:text-[#c084fc] transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-[#c084fc] hover:after:w-full after:transition-all after:duration-500 truncate max-w-full"
              >
                {link.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
