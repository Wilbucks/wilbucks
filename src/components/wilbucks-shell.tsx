import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/wilbucks-logo.png.asset.json";
import { linkedin, simonLinkedin } from "@/lib/wilbucks-content";

const navigation = [
  { label: "Home", to: "/" }, { label: "About", to: "/about" },
  { label: "Expertise", to: "/expertise" }, { label: "Our directors", to: "/directors" },
  { label: "Insights & Media", to: "/press-coverage" }, { label: "Contact", to: "/contact" },
] as const;

export function WilbucksShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: state => state.location.pathname });
  useEffect(() => {
    setOpen(false);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll("[data-reveal]").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);
  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <header className="site-header">
      <div className="page-container header-inner">
        <Link to="/" className="brand" aria-label="Wilbucks home"><img src={logo.url} width="52" height="50" alt="" /><span>Wilbucks<span className="brand-stop">.</span></span></Link>
        <nav aria-label="Main navigation" className="desktop-nav">{navigation.map(item => <Link key={item.to} to={item.to} className="nav-link" aria-current={pathname === item.to ? "page" : undefined}>{item.label}</Link>)}</nav>
        <Button asChild variant="editorial" className="header-cta"><Link to="/contact">Contact Wilbucks <ArrowUpRight /></Link></Button>
        <Button variant="ghost" size="icon" className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation">{navigation.map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} aria-current={pathname === item.to ? "page" : undefined}>{item.label}<ArrowUpRight size={18} /></Link>)}</nav>}
    </header>
    <main id="main-content" tabIndex={-1}>{children}</main>
    <footer className="site-footer"><div className="page-container footer-top"><Link to="/" className="brand"><img src={logo.url} width="42" height="40" alt="" /><span>Wilbucks.</span></Link><p>Independent sales & marketing consultancy.</p><div className="footer-links"><Link to="/about">About Wilbucks</Link><Link to="/directors">Our directors</Link><a href={linkedin} target="_blank" rel="noopener noreferrer">Marie on LinkedIn <ArrowUpRight size={14} /></a><a href={simonLinkedin} target="_blank" rel="noopener noreferrer">Simon on LinkedIn <ArrowUpRight size={14} /></a></div></div><div className="page-container footer-bottom"><span>© 2026 Wilbucks</span><a href="#main-content">Back to top ↑</a></div></footer>
  </>;
}

export function ContactBand() {
  return <section className="contact-band" id="subscribe"><div className="page-container contact-inner" data-reveal><div><p className="eyebrow">Contact Wilbucks</p><h2>Have a sales or marketing question?</h2></div><div><Button asChild variant="editorial" size="editorial"><Link to="/contact">Contact Wilbucks <ArrowUpRight /></Link></Button></div></div></section>;
}

export function SectionHeading({ number, label, title, children }: { number: string; label: string; title: string; children?: ReactNode }) {
  return <div className="section-heading" data-reveal><p className="eyebrow"><span>{number} /</span> {label}</p><div><h2>{title}</h2>{children}</div></div>;
}

export function TextLink({ children, to }: { children: ReactNode; to: "/" | "/marie-wilcox" | "/expertise" | "/contact" | "/about" | "/directors" | "/simon-wilcox" | "/press-coverage" }) {
  return <Button asChild variant="link" className="text-link"><Link to={to}>{children} <ArrowRight /></Link></Button>;
}