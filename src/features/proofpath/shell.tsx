import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Compass, Globe2, Menu, X, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProof } from "./context";
import { disclaimer } from "./model";
export const nav = [
  ["/", "Home", "Bogga Hore"],
  ["/profile", "Build My Profile", "Dhis Astaantayda"],
  ["/skills", "Discover My Skills", "Ogow Xirfadahayga"],
  ["/assessments", "Practical Assessments", "Qiimaynta Waxqabadka"],
  ["/passport", "My Evidence Passport", "Baasaboorka Caddayntayda"],
  ["/opportunities", "Opportunities", "Fursadaha"],
  ["/employers", "Employer Portal", "Bogga Loo-shaqeeyaha"],
  ["/about", "About ProofPath", "Ku Saabsan ProofPath"],
] as const;
export function Shell({ children }: { children: React.ReactNode }) {
  const { t, lang, setLang, storageError } = useProof();
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand">
            <span className="brand-icon">
              <Compass size={27} />
            </span>
            Proof<span className="text-primary">Path</span>
          </Link>
          <nav className="desktop-nav" aria-label={t("Main navigation", "Hagaha ugu weyn")}>
            {nav.slice(0, 6).map(([to, en, so]) => (
              <Link key={to} to={to} className={path === to ? "nav-link active" : "nav-link"}>
                {t(en, so)}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <label className="language-control">
              <Globe2 size={15} />
              <select
                aria-label="Language / Luqad"
                value={lang}
                onChange={(e) => setLang(e.target.value === "so" ? "so" : "en")}
              >
                <option value="en">English</option>
                <option value="so">Af-Soomaali</option>
              </select>
            </label>
            <Button variant="outline" asChild className="employer-header">
              <Link to="/employers">
                {t("For employers", "Loo-shaqeeyayaasha")}
                <ArrowUpRight />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="mobile-menu"
              aria-label={t("Open navigation", "Fur hagaha")}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {open && (
          <nav className="mobile-nav">
            {nav.map(([to, en, so]) => (
              <Link key={to} to={to} onClick={() => setOpen(false)}>
                {t(en, so)}
              </Link>
            ))}
          </nav>
        )}
      </header>
      {storageError && (
        <div className="storage-warning" role="alert">
          {t(
            "Browser storage is unavailable. Your progress may not survive a refresh.",
            "Kaydka biraawsarka lama heli karo. Xogtaadu way lumi kartaa marka bogga dib loo furo.",
          )}
        </div>
      )}
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="footer-top">
          <Link className="brand" to="/">
            <Compass size={25} />
            ProofPath
          </Link>
          <span>
            {t("Your skills deserve to be seen.", "Xirfadahaagu waxay mudan yihiin in la arko.")}
          </span>
          <Link to="/about">{t("About ProofPath", "Ku Saabsan ProofPath")}</Link>
          <Link to="/employers">
            {t("Employer & mentor portal", "Bogga loo-shaqeeyaha iyo hagaha")}
          </Link>
        </div>
        <p>{t(disclaimer)}</p>
        <div className="footer-bottom">
          <span>
            <ShieldCheck size={14} />
            {t("Your information stays in this browser", "Xogtaadu waxay ku jirtaa biraawsarkan")}
          </span>
          <span>
            <MapPin size={14} />
            {t("Starting in Dadaab, Kenya", "Ka bilaabmaya Dadaab, Kenya")}
          </span>
        </div>
      </footer>
    </>
  );
}
