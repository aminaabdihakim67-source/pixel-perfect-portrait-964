import { useState, type ComponentProps } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronRight,
  FileBadge,
  FileText,
  GraduationCap,
  Lightbulb,
  MapPin,
  Pencil,
  Plus,
  Printer,
  ShieldCheck,
  Sparkles,
  BriefcaseBusiness,
  Monitor,
  Languages,
  HeartHandshake,
  X,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/proofpath-community.png.asset.json";
import { useProof } from "./context";
import {
  assessments,
  completion,
  discover,
  fields,
  scoreAssessment,
  disclaimer,
  type Pair,
  type Profile,
  type Data,
  type Result,
} from "./model";
function LocalizedForm({ children, ...props }: ComponentProps<"form">) {
  const { t } = useProof();
  const [invalid, setInvalid] = useState(false);
  return (
    <form
      {...props}
      onInvalidCapture={(event) => {
        event.preventDefault();
        setInvalid(true);
      }}
      onInputCapture={() => setInvalid(false)}
    >
      {invalid && (
        <p className="validation-message" role="alert">
          {t(
            "Please complete the required fields and check that your values are valid.",
            "Fadlan buuxi meelaha loo baahan yahay oo hubi in xogtaadu sax tahay.",
          )}
        </p>
      )}
      {children}
    </form>
  );
}
const icons = [Monitor, GraduationCap, Languages, Monitor];
function Title({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="page-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {body && <p>{body}</p>}
    </div>
  );
}
export function HomePage() {
  const { t, data } = useProof();
  const progress = completion(data.profile);
  return (
    <>
      <section className="hero">
        <img
          src={hero.url}
          alt={t(
            "Illustration of Somali professionals working together at a learning centre",
            "Sawir matalaya xirfadlayaal Soomaaliyeed oo wada shaqaynaya xarun waxbarasho",
          )}
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="hero-eyebrow">
            <span className="status-dot" />
            {t("POTENTIAL HAS NO BORDERS", "KARTIDU XUDUUD MA LEH")}
          </span>
          <h1>
            {t("Your skills deserve", "Xirfadahaagu waxay")}
            <br />
            {t("to be ", "mudan yihiin ")}
            <em>{t("seen.", "in la arko.")}</em>
          </h1>
          <p>
            {t(
              "Your experience has value, even when your certificates are missing or difficult to recognise. ProofPath helps skilled refugees organise their experience, demonstrate their abilities and present their skills with confidence.",
              "Waayo-aragnimadaadu qiimo ayay leedahay, xataa marka shahaadooyinkaagu maqan yihiin ama ay adag tahay in la aqoonsado. ProofPath waxay qaxootiga xirfadda leh ka caawisaa inay habeeyaan khibraddooda, muujiyaan awooddooda, oo si kalsooni leh u soo bandhigaan xirfadahooda.",
            )}
          </p>
          <div className="hero-buttons">
            <Button asChild size="lg">
              <Link to="/profile">
                {t("Build My Skills Passport", "Dhis Baasaboorka Xirfadahayga")}
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/employers">
                {t("Explore as an Employer", "U Eeg Loo-shaqeeye ahaan")}
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <div className="hero-note">
            <ShieldCheck size={15} />
            {t(
              "No certificates required. Your experience is enough to begin.",
              "Shahaado looma baahna. Khibraddaadu waa bilow ku filan.",
            )}
          </div>
        </div>
        <div className="photo-caption">
          <MapPin size={14} />
          {t("Built with Dadaab in mind", "Waxaa loo sameeyay bulshada Dadaab")}
          <span>{t("Illustrative image", "Sawir tusaale ah")}</span>
        </div>
      </section>
      <div className="trust-strip">
        <span>
          <MapPin />
          {t("Dadaab · Ifo · Dagahaley", "Dadaab · Ifo · Dagahaley")}
        </span>
        <span>
          <ShieldCheck />
          {t("Private by design", "Asturnaanta ayaa saldhig ah")}
        </span>
        <span>
          <Languages />
          {t("English & Af-Soomaali", "English iyo Af-Soomaali")}
        </span>
        <span>
          <FileBadge />
          {t("Evidence, not just a CV", "Caddayn, ma aha CV keliya")}
        </span>
      </div>
      <section className="section journey-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t("YOUR NEXT CHAPTER", "CUTUBKAAGA XIGA")}</span>
            <h2>{t("Turn your experience into possibility.", "Khibraddaada u beddel fursado.")}</h2>
          </div>
          <p>
            {t(
              "A clearer picture of what you know. A stronger way to show it.",
              "Sawir cad oo aqoontaada ah. Hab ka wanaagsan oo aad ku muujiso.",
            )}
          </p>
        </div>
        <div className="journey-grid">
          {[
            [
              Pencil,
              "01",
              "Tell your story",
              "Sheeg sheekadaada",
              "Bring together your work, education and experience. No certificate needed.",
              "Isku soo ururi shaqada, waxbarashada iyo khibraddaada. Shahaado looma baahna.",
              "/profile",
            ],
            [
              Lightbulb,
              "02",
              "Make your skills visible",
              "Muuji xirfadahaaga",
              "Discover transferable skills and demonstrate them through practical tasks.",
              "Ogow xirfadaha la adeegsan karo oo ku muuji hawlo waxqabad.",
              "/skills",
            ],
            [
              FileBadge,
              "03",
              "Open your next door",
              "Fur albaabkaaga xiga",
              "Create an Evidence Passport to share with employers and mentors.",
              "Samee Baasaboorka Caddaynta oo aad la wadaagto loo-shaqeeyayaasha iyo hagayaasha.",
              "/passport",
            ],
          ].map(([Icon, num, en, so, desc, sodesc, to]) => {
            const I = Icon as typeof Pencil;
            return (
              <Link
                className="journey-card"
                to={to as "/profile" | "/skills" | "/passport"}
                key={String(num)}
              >
                <div className="step-top">
                  <span className="step-icon">
                    <I size={23} />
                  </span>
                  <span className="step-number">{String(num)}</span>
                </div>
                <h3>{t(String(en), String(so))}</h3>
                <p>{t(String(desc), String(sodesc))}</p>
                <ArrowRight className="card-arrow" size={19} />
              </Link>
            );
          })}
        </div>
      </section>
      <section className="dashboard-band">
        <div className="section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">{t("YOUR PROOFPATH", "PROOFPATH-KAAGA")}</span>
              <h2>
                {t(
                  data.profile.name
                    ? `Welcome back, ${data.profile.name}.`
                    : "Every path starts with a first step.",
                  data.profile.name
                    ? `Soo dhawoow, ${data.profile.name}.`
                    : "Waddo kastaa waxay ka bilaabataa tallaabada koowaad.",
                )}
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/profile">
                {t(
                  progress ? "Continue your profile" : "Start your profile",
                  progress ? "Sii wad astaantaada" : "Bilow astaantaada",
                )}
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="dashboard-grid">
            <div>
              <span>{t("Profile completion", "Dhammaystirka astaanta")}</span>
              <strong>{progress}%</strong>
              <progress max={100} value={progress} />
            </div>
            <div>
              <span>{t("Skills identified", "Xirfadaha la ogaaday")}</span>
              <strong>{data.suggested.length}</strong>
              <Link to="/skills">
                {t("Discover your skills", "Ogow xirfadahaaga")}
                <ChevronRight size={14} />
              </Link>
            </div>
            <div>
              <span>{t("Assessments completed", "Qiimaynta la dhammeeyay")}</span>
              <strong>
                {new Set(data.results.map((r) => r.category)).size}
                <small>/ 4</small>
              </strong>
              <Link to="/assessments">
                {t("Demonstrate your ability", "Muuji awooddaada")}
                <ChevronRight size={14} />
              </Link>
            </div>
            <div>
              <span>{t("Evidence Passport", "Baasaboorka Caddaynta")}</span>
              <strong className="passport-status">
                {t(
                  data.generated ? "Ready to share" : "Your next milestone",
                  data.generated ? "Diyaar u ah wadaagis" : "Yoolkaaga xiga",
                )}
              </strong>
              <Link to="/passport">
                {t("View your passport", "Eeg baasaboorkaaga")}
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section mission-section">
        <div>
          <span className="eyebrow">
            {t("ABILITY SHOULD NOT GO UNSEEN", "KARTIDU MA AHA INAY QARSOONAATO")}
          </span>
          <h2>
            {t(
              "A missing certificate shouldn’t mean a missing future.",
              "Shahaado maqan ma aha inay mustaqbalka kaa hor istaagto.",
            )}
          </h2>
        </div>
        <div>
          <p>
            {t(
              "When experience goes unrecognised, valuable talent is left on the sidelines. This is often called brain waste. We’re starting with skilled refugees in Dadaab, Ifo and Dagahaley, helping them put their abilities into a clear, practical record.",
              "Marka khibradda la aqoonsan waayo, karti qiimo leh ayaa la dayacaa. Tan waxaa badanaa loo yaqaan khasaaraha aqoonta. Waxaan ka bilaabaynaa qaxootiga xirfadda leh ee Dadaab, Ifo iyo Dagahaley, annagoo ka caawinayna diiwaan cad oo waxqabad leh.",
            )}
          </p>
          <Button asChild variant="link">
            <Link to="/about">
              {t("Meet ProofPath", "Baro ProofPath")}
              <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
const labels: Record<keyof Profile, Pair> = {
  name: ["Preferred name", "Magaca aad doorbidayso"],
  contact: ["Contact details (optional)", "Xogta xiriirka (ikhtiyaari)"],
  location: ["Location", "Goobta"],
  language: ["Preferred language", "Luqadda aad doorbidayso"],
  field: ["Professional field", "Qaybta xirfadda"],
  education: ["Education and training", "Waxbarashada iyo tababarka"],
  experience: ["Previous work experience", "Khibraddii shaqo ee hore"],
  years: ["Years of experience", "Sannadaha khibradda"],
  languages: ["Languages spoken", "Luqadaha aad ku hadasho"],
  skills: ["Self-reported skills", "Xirfadaha aad sheegatay"],
  portfolio: ["Portfolio links (optional)", "Xiriiriyeyaasha shaqooyinkaaga (ikhtiyaari)"],
};
export function ProfilePage() {
  const { t, data, update } = useProof();
  const [saved, setSaved] = useState(false);
  const p = data.profile;
  const change = (key: keyof Profile, value: string) => {
    update({ profile: { ...p, [key]: value } });
    setSaved(false);
  };
  return (
    <div className="section page-section">
      <Title
        eyebrow={t("STEP 01 · YOUR STORY", "TALLAABADA 01 · SHEEKADAADA")}
        title={t("Build your professional profile.", "Dhis astaantaada xirfadeed.")}
        body={t(
          "Your experience counts. Certificates are never required.",
          "Khibraddaadu way qiimo leedahay. Shahaadooyin lagama rabo.",
        )}
      />
      <div className="form-layout">
        <LocalizedForm
          onSubmit={(e) => {
            e.preventDefault();
            setSaved(true);
          }}
          className="profile-form"
        >
          <div className="form-grid">
            {(Object.keys(labels) as (keyof Profile)[]).map((key) => (
              <label
                className={
                  ["education", "experience", "skills", "portfolio"].includes(key)
                    ? "full-width"
                    : ""
                }
                key={key}
              >
                <span>
                  {t(labels[key])}
                  {["name", "field"].includes(key) && " *"}
                </span>
                {key === "location" ? (
                  <select value={p[key]} onChange={(e) => change(key, e.target.value)}>
                    {["Dadaab", "Ifo", "Dagahaley", "Other"].map((x) => (
                      <option key={x} value={x}>
                        {x === "Other" ? t("Other", "Meel kale") : x}
                      </option>
                    ))}
                  </select>
                ) : key === "language" ? (
                  <select value={p[key]} onChange={(e) => change(key, e.target.value)}>
                    <option value="en">English</option>
                    <option value="so">Af-Soomaali</option>
                  </select>
                ) : key === "field" ? (
                  <select required value={p[key]} onChange={(e) => change(key, e.target.value)}>
                    <option value="">{t("Select your field", "Dooro qaybtaada")}</option>
                    {fields.map((f, i) => (
                      <option value={String(i)} key={f[0]}>
                        {t(f)}
                      </option>
                    ))}
                    <option value="other">{t("Other", "Kale")}</option>
                  </select>
                ) : ["education", "experience", "skills"].includes(key) ? (
                  <textarea rows={3} value={p[key]} onChange={(e) => change(key, e.target.value)} />
                ) : (
                  <input
                    required={key === "name"}
                    min={0}
                    max={80}
                    type={key === "years" ? "number" : "text"}
                    value={p[key]}
                    onChange={(e) => change(key, e.target.value)}
                  />
                )}
              </label>
            ))}
          </div>
          <div className="form-actions">
            <Button type="submit" size="lg">
              <Check size={17} />
              {t("Save profile", "Kaydi astaanta")}
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/skills">
                {t("Discover my skills", "Ogow xirfadahayga")}
                <ArrowRight />
              </Link>
            </Button>
          </div>
          {saved && (
            <p className="success-message" role="status">
              {t(
                "Profile saved in this browser. Your next step is skills discovery.",
                "Astaanta waxaa lagu kaydiyay biraawsarkan. Tallaabada xigta waa ogaanshaha xirfadaha.",
              )}
            </p>
          )}
        </LocalizedForm>
        <aside className="profile-aside">
          <ShieldCheck size={30} />
          <h3>{t("Your story. Your control.", "Sheekadaada. Xakamayntaada.")}</h3>
          <p>
            {t(
              "Your information stays on this device. We never ask for refugee identification documents.",
              "Xogtaadu waxay ku jirtaa qalabkan. Kuma weydiisanayno waraaqaha aqoonsiga qaxootiga.",
            )}
          </p>
          <div className="completion-label">
            <span>{t("Profile completion", "Dhammaystirka astaanta")}</span>
            <strong>{completion(p)}%</strong>
          </div>
          <progress value={completion(p)} max={100} />
          <p>
            {t(
              "Contact details and work samples are optional.",
              "Xogta xiriirka iyo tusaalooyinka shaqadu waa ikhtiyaari.",
            )}
          </p>
        </aside>
      </div>
    </div>
  );
}
export function SkillsPage() {
  const { t, data, update } = useProof();
  const [suggestions, setSuggestions] = useState<Pair[]>([]);
  const [searched, setSearched] = useState(false);
  const [custom, setCustom] = useState("");
  return (
    <div className="section page-section narrow">
      <Title
        eyebrow={t("STEP 02 · DISCOVER", "TALLAABADA 02 · OGOW")}
        title={t("You know more than you think.", "Waxaad taqaan wax ka badan inta aad moodayso.")}
        body={t(
          "Describe your work in English or Somali. Turn your experience into suggested competencies.",
          "Ku sharax shaqadaada English ama Af-Soomaali. Khibraddaada u beddel xirfado la soo jeediyay.",
        )}
      />
      <LocalizedForm
        onSubmit={(e) => {
          e.preventDefault();
          setSuggestions(discover(data.description || data.profile.experience));
          setSearched(true);
        }}
      >
        <label>
          <span>{t("Tell us about your experience", "Noo sheeg khibraddaada")}</span>
          <textarea
            required
            rows={5}
            value={data.description}
            placeholder={t(
              "I taught secondary school students for five years.",
              "Waxaan ardayda dugsiga sare wax barayay shan sano.",
            )}
            onChange={(e) => update({ description: e.target.value })}
          />
        </label>
        <p className="hint">
          {t(
            "Rule-based demonstration. Suggestions are not independently verified.",
            "Tusaale ku salaysan xeerar. Xirfadaha la soo jeediyay si madax-bannaan looma xaqiijin.",
          )}
        </p>
        <Button size="lg" type="submit">
          <Sparkles />
          {t("Find suggested competencies", "Soo hel xirfadaha la soo jeediyay")}
        </Button>
      </LocalizedForm>
      {searched && (
        <section className="results-section">
          <h2>{t("Suggested competencies", "Xirfadaha la soo jeediyay")}</h2>
          {suggestions.length === 0 && (
            <p role="status">
              {t(
                "No new suggestions. Try describing teaching, office work, translation, IT, retail or healthcare, or add your own skill below.",
                "Talo cusub lama helin. Sharax waxbarid, shaqo xafiis, tarjumaad, IT, ganacsi ama caafimaad, ama ku dar xirfad hoos.",
              )}
            </p>
          )}
          <div className="suggestion-list">
            {suggestions.map((skill, i) => (
              <div className="suggestion-row" key={i}>
                <input
                  aria-label={t(
                    "Edit suggested competency",
                    "Wax ka beddel xirfadda la soo jeediyay",
                  )}
                  value={t(skill)}
                  onChange={(e) =>
                    setSuggestions((old) =>
                      old.map((s, j) => (j === i ? [e.target.value, e.target.value] : s)),
                    )
                  }
                />
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={t("Remove suggestion", "Ka saar talada")}
                  onClick={() => setSuggestions((old) => old.filter((_, j) => j !== i))}
                >
                  <X />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    if (!skill[0].trim()) return;
                    update({
                      suggested: [...data.suggested.filter((s) => s[0] !== skill[0]), skill],
                    });
                    setSuggestions((old) => old.filter((_, j) => j !== i));
                  }}
                >
                  <Check />
                  {t("Accept", "Aqbal")}
                </Button>
              </div>
            ))}
          </div>
        </section>
      )}
      <section className="results-section">
        <h2>{t("Your accepted competencies", "Xirfadaha aad aqbashay")}</h2>
        <div className="skill-chips">
          {data.suggested.map((s, i) => (
            <span key={i}>
              {t(s)}
              <Button
                variant="ghost"
                size="icon"
                aria-label={t("Remove skill", "Ka saar xirfadda")}
                onClick={() => update({ suggested: data.suggested.filter((_, j) => j !== i) })}
              >
                <X size={13} />
              </Button>
            </span>
          ))}
        </div>
        <LocalizedForm
          className="inline-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (custom.trim()) {
              update({ suggested: [...data.suggested, [custom.trim(), custom.trim()]] });
              setCustom("");
            }
          }}
        >
          <input
            aria-label={t("Add a competency", "Ku dar xirfad")}
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            placeholder={t("Add or edit a competency", "Ku dar ama wax ka beddel xirfad")}
          />
          <Button variant="outline">
            <Plus />
            {t("Add", "Ku dar")}
          </Button>
        </LocalizedForm>
        <Button asChild size="lg">
          <Link to="/assessments">
            {t("Try a practical assessment", "Tijaabi qiimayn waxqabad")}
            <ArrowRight />
          </Link>
        </Button>
      </section>
    </div>
  );
}
export function AssessmentPage() {
  const { t, data, update } = useProof();
  const [category, setCategory] = useState<number | null>(null);
  const [answers, setAnswers] = useState<string[]>(["", "", ""]);
  const [result, setResult] = useState<Result | null>(null);
  const a = category === null ? undefined : assessments[category];
  return (
    <div className="section page-section">
      <Title
        eyebrow={t("STEP 03 · DEMONSTRATE", "TALLAABADA 03 · MUUJI")}
        title={t("Let your ability do the talking.", "Awooddaadu ha kuu hadasho.")}
        body={t(
          "Practical tasks. Clear rubrics. Useful feedback. These prototype assessments are not accredited examinations or certifications.",
          "Hawlo waxqabad. Shuruudo cad. Jawaab-celin waxtar leh. Qiimayntan tijaabada ahi ma aha imtixaan la aqoonsan yahay ama shahaado.",
        )}
      />
      <div className="assessment-tabs">
        {fields.map((f, i) => {
          const Icon = icons[i] ?? Monitor;
          return (
            <Button
              variant={category === i ? "default" : "outline"}
              key={f[0]}
              onClick={() => {
                setCategory(i);
                setAnswers(["", "", ""]);
                setResult(null);
              }}
            >
              <Icon />
              {t(f)}
              {data.results.some((r) => r.category === i) && <CheckCircle2 />}
            </Button>
          );
        })}
      </div>
      {a && category !== null ? (
        <div className="assessment-body">
          <h2>{t(fields[category] ?? fields[0] ?? ["Assessment", "Qiimayn"])}</h2>
          <p>{t(a.intro)}</p>
          {result ? (
            <>
              <div className="score-box">
                <CheckCircle2 size={34} />
                <div>
                  <span>{t("Prototype assessment result", "Natiijada qiimaynta tijaabada")}</span>
                  <strong>
                    {result.score}% <small>({result.points.reduce((x, y) => x + y, 0)} / 6)</small>
                  </strong>
                </div>
              </div>
              {a.questions.map((q, i) => (
                <div className="feedback-item" key={i}>
                  <h3>
                    {i + 1}. {t(q)}
                  </h3>
                  <p>{result.answers[i]}</p>
                  <strong>{result.points[i]} / 2</strong>
                  <p>
                    {t(
                      (result.points[i] ?? 0) === 2
                        ? "Strength: your answer includes both expected elements."
                        : "Improve: include the missing rubric elements below.",
                      (result.points[i] ?? 0) === 2
                        ? "Awood: jawaabtaadu waxay leedahay labada qodob ee la rabay."
                        : "Hagaaji: ku dar qodobbada shuruudaha ee maqan.",
                    )}
                  </p>
                  <p className="hint">{t(a.rubric[i] ?? ["", ""])}</p>
                </div>
              ))}
              <div className="form-actions">
                <Button
                  variant="outline"
                  onClick={() => {
                    setResult(null);
                    setAnswers(["", "", ""]);
                  }}
                >
                  <RotateCcw />
                  {t("Retry assessment", "Dib u tijaabi qiimaynta")}
                </Button>
                <Button asChild>
                  <Link to="/passport">
                    {t("View Evidence Passport", "Eeg Baasaboorka Caddaynta")}
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </>
          ) : (
            <LocalizedForm
              onSubmit={(e) => {
                e.preventDefault();
                const points = scoreAssessment(category, answers);
                const r = {
                  category,
                  answers: [...answers],
                  points,
                  score: Math.round((points.reduce((x, y) => x + y, 0) / 6) * 100),
                  date: new Date().toISOString(),
                };
                update({ results: [...data.results, r] });
                setResult(r);
              }}
            >
              {a.questions.map((q, i) => (
                <label className="question-field" key={i}>
                  <span>
                    {i + 1}. {t(q)}
                  </span>
                  <textarea
                    required
                    rows={3}
                    value={answers[i] ?? ""}
                    onChange={(e) =>
                      setAnswers((old) => old.map((v, j) => (j === i ? e.target.value : v)))
                    }
                  />
                  <small>
                    {t("Scoring rubric:", "Shuruudaha dhibcaha:")} {t(a.rubric[i] ?? ["", ""])}
                  </small>
                </label>
              ))}
              <p className="hint">
                {t(
                  "Scoring matches the words listed in each rubric. It cannot judge overall quality, accuracy or professional competence. Results show practice, not verification.",
                  "Dhibcuhu waxay ku salaysan yihiin erayada ku qoran shuruudaha. Ma qiimayn karaan tayada guud, saxnaanta ama kartida xirfadeed. Natiijooyinku waxay muujinayaan tababar, ma aha xaqiijin.",
                )}
              </p>
              <Button type="submit" size="lg">
                {t("Submit assessment", "Gudbi qiimaynta")}
                <ArrowRight />
              </Button>
            </LocalizedForm>
          )}
        </div>
      ) : (
        <div className="empty-state">
          <GraduationCap size={44} />
          <h2>{t("Choose a field to begin.", "Dooro qayb aad ka bilowdo.")}</h2>
        </div>
      )}
      {data.results.length > 0 && (
        <section className="results-section">
          <h2>{t("Your assessment history", "Taariikhda qiimayntaada")}</h2>
          {data.results
            .slice()
            .reverse()
            .map((r, i) => (
              <div className="history-row" key={i}>
                <span>{t(fields[r.category] ?? ["Assessment", "Qiimayn"])}</span>
                <span>{new Date(r.date).toLocaleDateString()}</span>
                <strong>{r.score}%</strong>
              </div>
            ))}
        </section>
      )}
    </div>
  );
}
export function PassportContent({ value, demo = false }: { value: Data; demo?: boolean }) {
  const { t } = useProof();
  const p = value.profile;
  return (
    <article className="passport-document">
      <div className="passport-top">
        <div className="brand">
          <FileBadge />
          ProofPath
        </div>
        <span className="badge">
          {t(
            demo ? "DEMONSTRATION PROFILE" : "PERSONAL EVIDENCE RECORD",
            demo ? "ASTAAN TUSAALE AH" : "DIIWAANKA CADDAYNTA QOFKA",
          )}
        </span>
      </div>
      <span className="eyebrow">{t("EVIDENCE PASSPORT", "BAASABOORKA CADDAYNTA")}</span>
      <h1>{p.name}</h1>
      <p className="passport-profession">
        {t(fields[Number(p.field)] ?? ["Other professional field", "Qayb xirfadeed kale"])} ·{" "}
        {p.location === "Other" ? t("Other", "Meel kale") : p.location}
      </p>
      <div className="passport-section">
        <h2>{t("01 · Self-reported experience", "01 · Khibradda qofku sheegtay")}</h2>
        <div className="passport-info">
          {(
            [
              "education",
              "experience",
              "years",
              "languages",
              "skills",
              "contact",
              "portfolio",
            ] as const
          )
            .filter((k) => p[k])
            .map((k) => (
              <div key={k}>
                <h3>{t(labels[k])}</h3>
                <p>{p[k]}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="passport-section">
        <h2>{t("02 · Suggested competencies", "02 · Xirfadaha la soo jeediyay")}</h2>
        <p className="hint">
          {t(
            "Accepted suggestions; not independently verified.",
            "Talooyin la aqbalay; si madax-bannaan looma xaqiijin.",
          )}
        </p>
        <div className="skill-chips">
          {value.suggested.map((s, i) => (
            <span key={i}>{t(s)}</span>
          ))}
        </div>
        {value.suggested.length === 0 && (
          <p>{t("No competencies added yet.", "Weli xirfado laguma darin.")}</p>
        )}
      </div>
      <div className="passport-section">
        <h2>
          {t(
            "03 · Demonstrated in prototype assessments",
            "03 · Lagu muujiyay qiimaynta tijaabada",
          )}
        </h2>
        {value.results.length === 0 ? (
          <p>
            {t("No practical assessments completed yet.", "Weli qiimayn waxqabad lama dhammeeyay.")}
          </p>
        ) : (
          value.results.map((r, i) => (
            <div className="passport-result" key={i}>
              <h3>
                {t(fields[r.category] ?? ["Assessment", "Qiimayn"])} <span>{r.score}%</span>
              </h3>
              <p>
                {t("Completed", "La dhammaystiray")}: {new Date(r.date).toLocaleDateString()}
              </p>
              {r.points.map((point, j) => (
                <p key={j}>
                  {t("Task", "Hawl")} {j + 1}: {point}/2 —{" "}
                  {t(
                    point === 2
                      ? "Both rubric elements demonstrated."
                      : "Practice the missing rubric elements.",
                    point === 2
                      ? "Labada qodob ee shuruudaha waa la muujiyay."
                      : "Ku tababar qodobbada shuruudaha ee maqan.",
                  )}{" "}
                  {t(assessments[r.category]?.rubric[j] ?? ["", ""])}
                </p>
              ))}
            </div>
          ))
        )}
      </div>
      <div className="passport-disclaimer">
        <p>{t(disclaimer)}</p>
        <p>
          {t("Date generated", "Taariikhda la sameeyay")}:{" "}
          {value.generated
            ? new Date(value.generated).toLocaleDateString()
            : t("Not generated yet", "Weli lama samayn")}
        </p>
      </div>
    </article>
  );
}
export function PassportPage() {
  const { t, data, update } = useProof();
  return (
    <div className="section page-section">
      <div className="print-hide">
        <Title
          eyebrow={t("YOUR EXPERIENCE, IN ONE PLACE", "KHIBRADDAADA, HAL MEEL")}
          title={t("My Evidence Passport", "Baasaboorka Caddayntayda")}
          body={t(
            "A clear record of your experience, competencies and practical demonstrations.",
            "Diiwaan cad oo khibraddaada, xirfadahaaga iyo waxqabadkaaga ah.",
          )}
        />
        <div className="form-actions">
          <Button
            disabled={!data.profile.name.trim()}
            onClick={() => update({ generated: new Date().toISOString() })}
          >
            <FileBadge />
            {t("Generate passport", "Samee baasaboorka")}
          </Button>
          <Button variant="outline" disabled={!data.generated} onClick={() => window.print()}>
            <Printer />
            {t("Print / Save as PDF", "Daabac / Kaydi PDF")}
          </Button>
        </div>
      </div>
      {data.profile.name ? (
        <PassportContent value={data} />
      ) : (
        <div className="empty-state">
          <FileBadge size={44} />
          <h2>{t("Your story comes first.", "Sheekadaadu ayaa ugu horraysa.")}</h2>
          <Button asChild>
            <Link to="/profile">
              {t("Build my profile", "Dhis astaantayda")}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
const candidates: Data[] = [
  {
    profile: {
      name: "Amina Hassan",
      contact: "",
      location: "Ifo",
      language: "so",
      field: "1",
      education: "",
      experience: "",
      years: "5",
      languages: "English, Af-Soomaali",
      skills: "",
      portfolio: "",
    },
    suggested: [
      ["Lesson planning", "Qorshaynta casharrada"],
      ["Classroom management", "Maamulka fasalka"],
    ],
    results: [
      { category: 1, answers: [], score: 83, points: [2, 2, 1], date: "2026-11-20T00:00:00Z" },
    ],
    description: "",
    generated: "2026-11-20T00:00:00Z",
  },
  {
    profile: {
      name: "Abdirahman Yusuf",
      contact: "",
      location: "Dadaab",
      language: "so",
      field: "0",
      education: "",
      experience: "",
      years: "3",
      languages: "English, Af-Soomaali",
      skills: "",
      portfolio: "",
    },
    suggested: [
      ["Record keeping", "Diiwaan haynta"],
      ["Data organisation", "Habeynta xogta"],
    ],
    results: [
      { category: 0, answers: [], score: 100, points: [2, 2, 2], date: "2026-11-20T00:00:00Z" },
    ],
    description: "",
    generated: "2026-11-20T00:00:00Z",
  },
  {
    profile: {
      name: "Fadumo Ali",
      contact: "",
      location: "Dagahaley",
      language: "so",
      field: "2",
      education: "",
      experience: "",
      years: "4",
      languages: "English, Af-Soomaali",
      skills: "",
      portfolio: "",
    },
    suggested: [
      ["Translation", "Tarjumaadda"],
      ["Cross-cultural communication", "Isgaarsiinta dhaqamada kala duwan"],
    ],
    results: [
      { category: 2, answers: [], score: 83, points: [2, 1, 2], date: "2026-11-20T00:00:00Z" },
    ],
    description: "",
    generated: "2026-11-20T00:00:00Z",
  },
];
export function EmployerPage() {
  const { t } = useProof();
  const [field, setField] = useState("");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Data | null>(null);
  const [interest, setInterest] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <div className="section page-section">
      <Title
        eyebrow={t("EMPLOYERS & MENTORS", "LOO-SHAQEEYAYAASHA IYO HAGAYAASHA")}
        title={t("Look beyond the certificate.", "Ka eeg wax ka baxsan shahaadada.")}
        body={t(
          "Browse illustrative candidate profiles and explore their skills evidence. All profiles and interactions below are demonstrations.",
          "Eeg astaamaha musharraxiinta tusaalaha ah iyo caddaynta xirfadahooda. Dhammaan astaamaha iyo falalka hoose waa bandhig tijaabo ah.",
        )}
      />
      <div className="filters">
        <label>
          <span>{t("Search skills", "Raadi xirfado")}</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("e.g. lesson planning", "tusaale, qorshaynta casharrada")}
          />
        </label>
        <label>
          <span>{t("Professional field", "Qaybta xirfadda")}</span>
          <select value={field} onChange={(e) => setField(e.target.value)}>
            <option value="">{t("All fields", "Dhammaan qaybaha")}</option>
            {fields.map((f, i) => (
              <option value={i} key={f[0]}>
                {t(f)}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="candidate-grid">
        {candidates
          .filter(
            (c) =>
              (!field || c.profile.field === field) &&
              c.suggested.some((s) => s.join(" ").toLowerCase().includes(search.toLowerCase())),
          )
          .map((c) => (
            <article className="candidate-card" key={c.profile.name}>
              <span className="badge">{t("DEMONSTRATION", "TUSAALE")}</span>
              <div className="avatar">
                {c.profile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h2>{c.profile.name}</h2>
              <p>{t(fields[Number(c.profile.field)] ?? ["", ""])}</p>
              <p className="hint">
                <MapPin size={14} />
                {c.profile.location} · {c.profile.years}{" "}
                {t("years of experience", "sano oo khibrad ah")}
              </p>
              <div className="skill-chips">
                {c.suggested.map((s) => (
                  <span key={s[0]}>{t(s)}</span>
                ))}
              </div>
              <p>
                <CheckCircle2 size={15} /> {t("Prototype assessment", "Qiimayn tijaabo ah")}:{" "}
                {c.results[0]?.score}%
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelected(c);
                  setSent(false);
                  setInterest("");
                }}
              >
                {t("View Evidence Passport", "Eeg Baasaboorka Caddaynta")}
                <ArrowUpRight />
              </Button>
            </article>
          ))}
      </div>
      {candidates.filter(
        (c) =>
          (!field || c.profile.field === field) &&
          c.suggested.some((s) => s.join(" ").toLowerCase().includes(search.toLowerCase())),
      ).length === 0 && (
        <p role="status">
          {t(
            "No demonstration profiles match these filters.",
            "Astaamo tusaale ah oo ku habboon shaandhayntan lama helin.",
          )}
        </p>
      )}
      {selected && (
        <DialogPrimitive.Root
          open
          onOpenChange={(open) => {
            if (!open) setSelected(null);
          }}
        >
          <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="modal-overlay" />
            <DialogPrimitive.Content
              className="passport-modal passport-dialog"
              aria-describedby={undefined}
            >
              <DialogPrimitive.Title className="sr-only">
                {t("Demonstration passport", "Baasaboor tusaale ah")}
              </DialogPrimitive.Title>
              <Button
                autoFocus
                className="modal-close"
                variant="outline"
                size="icon"
                aria-label={t("Close passport", "Xir baasaboorka")}
                onClick={() => setSelected(null)}
              >
                <X />
              </Button>
              <PassportContent
                demo
                value={{
                  ...selected,
                  profile: {
                    ...selected.profile,
                    education: t("Illustrative training record", "Diiwaan tababar tusaale ah"),
                    experience: t(
                      "Illustrative experience provided for demonstration only.",
                      "Khibrad tusaale ah oo loogu talagalay bandhig keliya.",
                    ),
                  },
                }}
              />
              <LocalizedForm
                className="interest-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <label>
                  <span>
                    {t("Demonstration expression of interest", "Muujinta xiisaha ee tijaabada")}
                  </span>
                  <select required value={interest} onChange={(e) => setInterest(e.target.value)}>
                    <option value="">{t("Choose a conversation", "Dooro wada hadal")}</option>
                    <option value="mentor">
                      {t("Mentorship conversation", "Wada hadal hagid")}
                    </option>
                    <option value="interview">
                      {t("Interview conversation", "Wada hadal waraysi")}
                    </option>
                  </select>
                </label>
                <Button type="submit">
                  <HeartHandshake />
                  {t("Express interest (demo)", "Muuji xiisaha (tusaale)")}
                </Button>
                {sent && (
                  <p role="status" className="success-message">
                    {t(
                      "Demonstration recorded on screen only. No candidate was contacted and no message was sent.",
                      "Tijaabada shaashadda oo keliya ayaa la diiwaangeliyay. Musharrax lala xiriiray ma jiro, fariinna lama dirin.",
                    )}
                  </p>
                )}
              </LocalizedForm>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
      )}
    </div>
  );
}
export function OpportunitiesPage() {
  const { t } = useProof();
  const [active, setActive] = useState<number | null>(null);
  const categories: { label: Pair; body: Pair; icon: typeof BriefcaseBusiness; steps: Pair }[] = [
    {
      label: ["Employment", "Shaqo"],
      body: [
        "Explore roles where practical evidence can support a conversation.",
        "Eeg shaqooyinka caddaynta waxqabadku taageeri karto wada hadal.",
      ],
      icon: BriefcaseBusiness,
      steps: [
        "Prepare your passport, identify a relevant organisation, and check role requirements and work authorisation independently.",
        "Diyaari baasaboorkaaga, raadi urur ku habboon, oo si madax-bannaan u hubi shuruudaha shaqada iyo oggolaanshaha shaqo.",
      ],
    },
    {
      label: ["Internships", "Shaqo-barasho"],
      body: [
        "Build local experience through supervised practice.",
        "Ku dhis khibrad deegaanka ah tababar la hagayo.",
      ],
      icon: GraduationCap,
      steps: [
        "Look for supervised learning, clarify duration and conditions, and confirm eligibility with the provider.",
        "Raadi waxbarasho la hagayo, caddee muddada iyo shuruudaha, oo bixiyaha kala hubi u-qalmitaanka.",
      ],
    },
    {
      label: ["Fellowships", "Barnaamijyada aqoon-kororsiga"],
      body: [
        "Develop your expertise in a structured programme.",
        "Ku horumari aqoontaada barnaamij habaysan.",
      ],
      icon: Sparkles,
      steps: [
        "Review programme requirements and prepare examples of your work before applying.",
        "Dib u eeg shuruudaha barnaamijka oo diyaari tusaalooyin shaqadaada ka hor codsiga.",
      ],
    },
    {
      label: ["Mentorship", "Hagid"],
      body: [
        "Connect your experience with professional guidance.",
        "Ku xiro khibraddaada hagid xirfadeed.",
      ],
      icon: HeartHandshake,
      steps: [
        "Identify your learning goal and prepare questions for a potential mentor. The employer portal illustrates this conversation.",
        "Ogow yoolka waxbarashadaada oo diyaari su’aalaha hagaha. Bogga loo-shaqeeyaha ayaa tusaale u ah wada hadalka.",
      ],
    },
    {
      label: ["Remote work", "Shaqo fog"],
      body: [
        "Consider digital roles that match your abilities.",
        "Tixgeli shaqooyinka dijitaalka ah ee kartidaada ku habboon.",
      ],
      icon: Monitor,
      steps: [
        "Assess your internet access and equipment, check platform rules, and independently verify payment and eligibility requirements.",
        "Qiimee internetka iyo qalabkaaga, hubi xeerarka madasha, oo xaqiiji shuruudaha lacag-bixinta iyo u-qalmitaanka.",
      ],
    },
    {
      label: ["Professional training", "Tababar xirfadeed"],
      body: [
        "Strengthen a skill or take your next learning step.",
        "Xooji xirfad ama qaad tallaabadaada waxbarasho ee xigta.",
      ],
      icon: FileText,
      steps: [
        "Choose a skill to develop, compare training quality and cost, and check whether any certificate is recognised.",
        "Dooro xirfad aad horumariso, isbarbardhig tayada iyo kharashka tababarka, oo hubi aqoonsiga shahaadada.",
      ],
    },
  ];
  return (
    <div className="section page-section">
      <Title
        eyebrow={t("POSSIBLE NEXT STEPS", "TALLAABOOYINKA XIGA EE SUURTAGALKA AH")}
        title={t("More than one path forward.", "Waxaa jira waddooyin badan oo horumar ah.")}
        body={t(
          "Illustrative pathways, not live vacancies or verified opportunities. ProofPath does not promise employment.",
          "Waddooyin tusaale ah, ma aha shaqooyin bannaan ama fursado la xaqiijiyay. ProofPath ma ballanqaaddo shaqo.",
        )}
      />
      <div className="opportunity-grid">
        {categories.map((c, i) => (
          <article key={i} className="opportunity-card">
            <c.icon size={27} />
            <h2>{t(c.label)}</h2>
            <p>{t(c.body)}</p>
            <Button variant="link" onClick={() => setActive(active === i ? null : i)}>
              {t(
                active === i ? "Close pathway" : "Explore pathway",
                active === i ? "Xir waddada" : "Eeg waddada",
              )}
              <ArrowRight />
            </Button>
            {active === i && <p className="pathway-detail">{t(c.steps)}</p>}
          </article>
        ))}
      </div>
    </div>
  );
}
export function AboutPage() {
  const { t } = useProof();
  return (
    <div className="section page-section narrow">
      <Title
        eyebrow={t("ABOUT PROOFPATH", "KU SAABSAN PROOFPATH")}
        title={t("Recognition starts with visibility.", "Aqoonsigu wuxuu ka bilaabmaa muuqashada.")}
        body={t("Your skills deserve to be seen.", "Xirfadahaagu waxay mudan yihiin in la arko.")}
      />
      <section className="about-block">
        <h2>
          {t("Built for skilled refugees in Dadaab", "Loo dhisay qaxootiga xirfadda leh ee Dadaab")}
        </h2>
        <p>
          {t(
            "ProofPath helps displaced professionals in Dadaab, Ifo and Dagahaley, Garissa County, Kenya organise their experience and demonstrate practical skills when certificates are missing or unfamiliar. It is not simply a CV builder or a job board: it combines experience-to-skills translation, practical tasks and a structured Evidence Passport.",
            "ProofPath waxay xirfadlayaasha barakacay ee Dadaab, Ifo iyo Dagahaley, Garissa, Kenya ka caawisaa habeynta khibradda iyo muujinta xirfadaha marka shahaadooyinka maqan yihiin ama aan la aqoon. Ma aha CV dhise ama bog shaqo keliya: waxay isku dartaa khibradda oo xirfado loo beddelo, hawlo waxqabad iyo Baasaboorka Caddaynta.",
          )}
        </p>
      </section>
      <section className="about-block">
        <h2>{t("ILO hackathon alignment", "Waafaqsanaanta hackathon-ka ILO")}</h2>
        <h3>
          {t(
            "Track 1 · Credential Recognition and Skills Validation",
            "Qaybta 1 · Aqoonsiga shahaadooyinka iyo qiimaynta xirfadaha",
          )}
        </h3>
        <p>
          {t(
            "Structured experience and practical demonstrations can complement formal credential recognition; they do not replace it.",
            "Khibrad habaysan iyo waxqabad la muujiyay waxay taageeri karaan aqoonsiga shahaadooyinka; ma beddelaan.",
          )}
        </p>
        <h3>
          {t(
            "Track 3 · Local Experience and Professional Networks",
            "Qaybta 3 · Khibradda deegaanka iyo xiriirrada xirfadeed",
          )}
        </h3>
        <p>
          {t(
            "Demonstration passports give potential employers and mentors a structured way to explore skills and express interest in a professional conversation.",
            "Baasaboorrada tusaalaha ahi waxay loo-shaqeeyayaasha iyo hagayaasha siinayaan hab habaysan oo ay xirfadaha ku eegaan kuna muujiyaan xiisaha wada hadal xirfadeed.",
          )}
        </p>
        <h3>
          {t(
            "Track 2 · Legal, Regulatory and Financial Access",
            "Qaybta 2 · Helitaanka sharci, nidaam iyo maaliyad",
          )}
        </h3>
        <p>
          {t(
            "A possible future development area only. This prototype provides no work permits, legal authorisation, banking access or payment services.",
            "Waa meel horumar mustaqbal oo suurtagal ah keliya. Tijaabadani ma bixiso ruqsad shaqo, oggolaansho sharci, adeeg bangi ama adeeg lacag-bixin.",
          )}
        </p>
      </section>
      <section className="about-block">
        <h2>
          {t("Connected to the Sustainable Development Goals", "Ku xiran Yoolalka Horumarka Waara")}
        </h2>
        <div className="sdg-grid">
          {[
            ["4", "Quality Education", "Waxbarasho Tayo leh"],
            ["8", "Decent Work and Economic Growth", "Shaqo Sharaf leh iyo Koboc Dhaqaale"],
            ["10", "Reduced Inequalities", "Yaraynta Sinnaan la’aanta"],
            ["17", "Partnerships for the Goals", "Iskaashi Yoolalka"],
          ].map(([num, en, so]) => (
            <div key={num}>
              <strong>{num}</strong>
              <span>{t(en ?? "", so ?? "")}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
