import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/wilbucks-logo.png.asset.json";
import { email, linkedin, simonLinkedin, companyLinkedIn, companyDetails } from "@/lib/wilbucks-content";

const navigation = [
  { label: "Home", to: "/" }, { label: "About Us", to: "/about" }, { label: "Marie Wilcox", to: "/marie-wilcox" }, { label: "Simon Wilcox", to: "/simon-wilcox" },
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
        <Button asChild variant="editorial" className="header-cta"><a href={email}>Contact Wilbucks <ArrowUpRight /></a></Button>
        <Button variant="ghost" size="icon" className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation">{navigation.map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} aria-current={pathname === item.to ? "page" : undefined}>{item.label}<ArrowUpRight size={18} /></Link>)}</nav>}
    </header>
    <main id="main-content" tabIndex={-1}>{children}</main>
    <footer className="site-footer"><div className="page-container footer-top"><Link to="/" className="brand"><img src={logo.url} width="42" height="40" alt="" /><span>Wilbucks.</span></Link><div className="footer-links"><Link to="/marie-wilcox">Marie Wilcox</Link><Link to="/simon-wilcox">Simon Wilcox</Link><a href={email}>Email Wilbucks</a><a href={companyLinkedIn} target="_blank" rel="noopener noreferrer">Wilbucks on LinkedIn <ArrowUpRight size={14} /></a><a href={linkedin} target="_blank" rel="noopener noreferrer">Marie on LinkedIn <ArrowUpRight size={14} /></a><a href={simonLinkedin} target="_blank" rel="noopener noreferrer">Simon on LinkedIn <ArrowUpRight size={14} /></a></div></div>
    <div className="page-container footer-details"><div><p className="footer-legal">{companyDetails.copyright}</p><p className="footer-legal">{companyDetails.legalName}</p><p className="footer-legal"><a href={companyDetails.website}>{companyDetails.websiteLabel}</a></p><p className="footer-legal">{companyDetails.registrationNumber}</p><p className="footer-legal">{companyDetails.vatNumber}</p></div><div><p className="footer-heading">Contact Information</p><p className="footer-legal">Email: <a href={email}>{companyDetails.email}</a></p></div><div><p className="footer-heading">Our Office Location</p>{companyDetails.office.map(line => <p key={line} className="footer-legal">{line}</p>)}</div></div>
    <div className="page-container footer-bottom"><span>© 2026 Wilbucks Ltd</span><a href="#main-content">Back to top ↑</a></div></footer>

  </>;
}

export function ContactBand({ actionLabel = "Contact Wilbucks" }: { actionLabel?: string }) {
  return <section className="contact-band" id="subscribe"><div className="page-container contact-inner" data-reveal><div><p className="eyebrow">Contact Wilbucks</p><h2>Have a sales or marketing question?</h2></div><div><Button asChild variant="editorial" size="editorial"><a href={email}>{actionLabel} <ArrowUpRight /></a></Button></div></div></section>;
}

export function SectionHeading({ number, label, title, children }: { number?: string; label: string; title: string; children?: ReactNode }) {
  return <div className="section-heading" data-reveal><p className="eyebrow">{number && <span>{number} /</span>} {label}</p><div><h2>{title}</h2>{children}</div></div>;
}

export function TextLink({ children, to }: { children: ReactNode; to: "/" | "/marie-wilcox" | "/simon-wilcox" }) {
  return <Button asChild variant="link" className="text-link"><Link to={to}>{children} <ArrowRight /></Link></Button>;
}