from pathlib import Path

from fpdf import FPDF


class Resume(FPDF):
    def footer(self):
        self.set_y(-12)
        self.set_font("Helvetica", "", 8)
        self.set_text_color(110, 110, 110)
        self.cell(0, 8, "rohithsiliveri.com  |  rohith.career.ai@gmail.com", align="C")


def heading(pdf: Resume, title: str):
    pdf.set_font("Helvetica", "B", 11)
    pdf.set_text_color(20, 20, 20)
    pdf.cell(0, 7, title.upper(), new_x="LMARGIN", new_y="NEXT")
    pdf.set_draw_color(30, 30, 30)
    pdf.set_line_width(0.3)
    y = pdf.get_y()
    pdf.line(pdf.l_margin, y, pdf.w - pdf.r_margin, y)
    pdf.ln(3)


def job(pdf: Resume, role: str, company: str, dates: str):
    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(20, 20, 20)
    pdf.cell(0, 5, f"{role} - {company}", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "I", 9)
    pdf.set_text_color(90, 90, 90)
    pdf.cell(0, 4.5, dates, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(1)


def bullets(pdf: Resume, items: list[str]):
    pdf.set_font("Helvetica", "", 9.5)
    pdf.set_text_color(40, 40, 40)
    for item in items:
        pdf.set_x(pdf.l_margin)
        pdf.multi_cell(0, 4.4, f"  -  {item}")
    pdf.ln(2)


def main():
    out = Path("public/Rohith_Siliveri_Resume.pdf")
    pdf = Resume(format="Letter")
    pdf.set_auto_page_break(auto=True, margin=14)
    pdf.add_page()
    pdf.set_margins(16, 14, 16)

    pdf.set_font("Helvetica", "B", 20)
    pdf.cell(0, 8, "Rohith Siliveri", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 11)
    pdf.set_text_color(70, 70, 70)
    pdf.cell(0, 6, "Applied AI Engineer", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 9)
    pdf.cell(
        0,
        5,
        "rohith.career.ai@gmail.com  |  linkedin.com/in/rohith1411  |  github.com/rsiliveri14  |  rohithsiliveri.com",
        new_x="LMARGIN",
        new_y="NEXT",
    )
    pdf.ln(4)

    heading(pdf, "Summary")
    pdf.set_font("Helvetica", "", 9.5)
    pdf.set_text_color(40, 40, 40)
    pdf.multi_cell(
        0,
        4.5,
        "Applied AI engineer focused on coding-agent evaluation, verifiers that cannot be gamed, "
        "and production machine learning in banking and insurance. Builds SWE-bench, Terminal-Bench, "
        "and Harbor-style tasks; runs blinded agent evals; ships claims, fraud, and document models.",
    )
    pdf.ln(3)

    heading(pdf, "Experience")

    job(pdf, "Applied AI Engineer", "PNC Financial Services", "Jul 2025 - Present  |  USA")
    bullets(
        pdf,
        [
            "Own applied ML for banking -- risk, fraud, documents, and decision support -- with held-out evaluation and audit-ready runs.",
            "Build Harbor and Terminal-Bench-style agent evals: pinned Docker, oracles, and verifiers that fail unless the work is real.",
            "Trace agent failures to the model, the prompt, or the environment so production AI can be measured, not guessed.",
        ],
    )

    job(pdf, "AI Fellow / Reviewer / Specialist", "Handshake AI", "Jan 2026 - Aug 2026  |  Remote  |  Concurrent with PNC")
    bullets(
        pdf,
        [
            "Authored SWE-bench, Terminal-Bench, and Harbor tasks from real merged PRs -- pinned Docker, golden solutions, fail-to-pass tests.",
            "Ran blinded evals of coding agents (Claude Code, OpenCode, Grok CLI) and wrote line-cited pass/fail rationales.",
            "Produced visual bug-fixing and preference-ranking data so labs can train and score agents, not only chat models.",
        ],
    )

    job(pdf, "Expert AI Contributor", "Snorkel AI", "Mar 2026 - Aug 2026  |  Remote  |  Concurrent with PNC")
    bullets(
        pdf,
        [
            "Validated and repaired Harbor packages: hermetic Docker, no leakage, and instruction-test-solution alignment.",
            "Rewrote over-prescriptive prompts into real engineering asks and replaced shallow, gameable verifiers.",
            "Built OSWorld-style computer-use GUI tasks and GPU ML benchmarks in the MLE-bench / RE-bench family.",
        ],
    )

    job(pdf, "Graduate Student Researcher", "Binghamton University", "Jan 2025 - May 2025  |  NY")
    bullets(
        pdf,
        [
            "Faculty research: an end-to-end residential property valuation system, from housing data through a deployed app.",
            "Benchmarked five regressors; selected XGBoost after it beat a Linear Regression baseline of R2 ~ 0.69.",
            "Served the model with FastAPI, PostgreSQL, Docker, AWS EC2/S3, and GitHub Actions CI/CD.",
        ],
    )

    job(pdf, "AI Engineer", "Assurant", "Jan 2022 - Jul 2023  |  India")
    bullets(
        pdf,
        [
            "Built claims-triage models for property and auto from claims, policy, and customer history; evaluated on precision, recall, and ROC-AUC.",
            "Shipped Airflow training pipelines with MLflow tracking and FastAPI services on Docker and Kubernetes.",
            "Extracted fields from messy claim forms with OCR, spaCy, and Hugging Face; trained XGBoost fraud models as a rare-class problem.",
        ],
    )

    heading(pdf, "Education")
    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(20, 20, 20)
    pdf.cell(0, 5, "M.S. Computer Science (AI) - SUNY Binghamton, NY", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 9.5)
    pdf.cell(0, 5, "B.Tech Computer Science - Anurag University, India", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(3)

    if pdf.get_y() > 230:
        pdf.add_page()

    heading(pdf, "Skills")
    pdf.set_x(pdf.l_margin)
    pdf.set_font("Helvetica", "", 9.5)
    pdf.set_text_color(40, 40, 40)
    lines = [
        "Eval: SWE-bench, Terminal-Bench, Harbor, OSWorld, MLE-bench, pytest, oracle/nop scoring",
        "ML: Generative AI, LLMs, Agentic AI, PyTorch, TensorFlow, Hugging Face, XGBoost, scikit-learn",
        "Languages: Python, TypeScript, JavaScript, Go, Java, Rust, SQL, Shell",
        "Infra: Docker, Kubernetes, FastAPI, GitHub Actions, Jenkins, AWS, PostgreSQL, Kafka, Airflow, MLflow",
    ]
    for line in lines:
        pdf.set_x(pdf.l_margin)
        pdf.multi_cell(pdf.w - pdf.l_margin - pdf.r_margin, 4.5, line)

    pdf.output(str(out))
    print(f"wrote {out}")


if __name__ == "__main__":
    main()
