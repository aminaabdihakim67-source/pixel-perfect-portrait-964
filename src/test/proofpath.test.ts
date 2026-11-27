import { describe, expect, it } from "vitest";
import { discover, scoreAssessment, completion, blankProfile } from "@/features/proofpath/model";
describe("ProofPath competency discovery", () => {
  it("suggests all six competencies from the supplied teaching example", () => {
    expect(discover("I taught secondary school students for five years.").map((s) => s[0])).toEqual(
      [
        "Lesson planning",
        "Classroom management",
        "Communication",
        "Assessment and evaluation",
        "Record keeping",
        "Leadership",
      ],
    );
  });
  it("recognises Somali teaching experience", () => {
    expect(
      discover("Waxaan ardayda dugsiga sare wax barayay shan sano.").map((s) => s[0]),
    ).toContain("Lesson planning");
  });
  it("does not invent competencies for an unrecognised experience", () => {
    expect(discover("Unrecognised experience")).toEqual([]);
  });
});
describe("Transparent prototype scoring", () => {
  it("scores digital administration against all three concrete rubrics", () => {
    expect(
      scoreAssessment(0, [
        "Invalid email and duplicate entry",
        "Amina, Hassan, Yusuf",
        "Dear colleague, please send the report.",
      ]),
    ).toEqual([2, 2, 2]);
  });
  it("scores teaching answers against the published keyword rubric", () => {
    expect(
      scoreAssessment(1, [
        "Introduction, activity and conclusion",
        "Students will demonstrate handwashing",
        "Ask questions and observe a demonstration",
      ]),
    ).toEqual([2, 2, 2]);
  });
  it("scores Somali translation against tomorrow and nine", () => {
    expect(
      scoreAssessment(2, [
        "Kulanku waa berri sagaalka subaxnimo",
        "Berri subax",
        "Fadlan faylka ii soo dir",
      ]),
    ).toEqual([2, 2, 2]);
  });
  it("scores safe IT troubleshooting against the published rubric", () => {
    expect(
      scoreAssessment(3, [
        "Router problem and internet service outage",
        "Test another device and restart router",
        "Open a website and check connection",
      ]),
    ).toEqual([2, 2, 2]);
  });
  it("does not award points to empty answers", () => {
    for (let i = 0; i < 4; i++) expect(scoreAssessment(i, ["", "", ""])).toEqual([0, 0, 0]);
  });
});
describe("Profile completion", () => {
  it("does not require contact information, portfolios or certificates", () => {
    expect(
      completion({
        ...blankProfile,
        name: "Amina",
        field: "1",
        education: "School",
        experience: "Teaching",
        years: "5",
        languages: "Somali",
        skills: "Teaching",
      }),
    ).toBe(100);
  });
});
