from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    Flowable,
    HRFlowable,
    KeepTogether,
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


OUT = Path("public/Yiming_Zhu_Business_Systems_Resume.pdf")


class SmallGap(Flowable):
    def __init__(self, height):
        super().__init__()
        self.height = height

    def wrap(self, avail_width, avail_height):
        return 0, self.height

    def draw(self):
        pass


styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="Name",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=19,
        leading=22,
        alignment=1,
        textColor=colors.HexColor("#0B2545"),
        spaceAfter=1,
    )
)
styles.add(
    ParagraphStyle(
        name="Tagline",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=10.5,
        leading=13,
        alignment=1,
        textColor=colors.HexColor("#1F4D78"),
        spaceAfter=2,
    )
)
styles.add(
    ParagraphStyle(
        name="Contact",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.5,
        leading=10,
        alignment=1,
        textColor=colors.HexColor("#333333"),
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        name="Section",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=11,
        leading=13,
        textColor=colors.HexColor("#2E74B5"),
        spaceBefore=7,
        spaceAfter=2,
    )
)
styles.add(
    ParagraphStyle(
        name="Body",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.8,
        leading=10.5,
        textColor=colors.HexColor("#222222"),
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        name="Role",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=9.2,
        leading=11,
        textColor=colors.HexColor("#0B2545"),
        spaceBefore=3,
        spaceAfter=1,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeBullet",
        parent=styles["Body"],
        leftIndent=13,
        firstLineIndent=-7,
        spaceAfter=1.8,
    )
)


def p(text, style="Body"):
    return Paragraph(text, styles[style])


def section(title):
    return p(title, "Section")


def bullet_items(items):
    return ListFlowable(
        [ListItem(p(item, "ResumeBullet"), bulletColor=colors.HexColor("#222222")) for item in items],
        bulletType="bullet",
        start="circle",
        leftIndent=12,
        bulletFontSize=5,
    )


def role(title, meta, bullets):
    return KeepTogether(
        [
            p(f"{title} &nbsp;&nbsp; <font name='Helvetica' color='#555555'>{meta}</font>", "Role"),
            bullet_items(bullets),
        ]
    )


doc = SimpleDocTemplate(
    str(OUT),
    pagesize=letter,
    leftMargin=0.62 * inch,
    rightMargin=0.62 * inch,
    topMargin=0.55 * inch,
    bottomMargin=0.52 * inch,
)

story = [
    p("YIMING ZHU", "Name"),
    p("Business Systems Analyst / ERP-CRM Developer / Life Sciences Software Implementation", "Tagline"),
    p(
        "Langley, BC | (431) 887-1218 | yiming168@gmail.com | yimingzhu.netlify.app | Canadian citizen; TN-eligible for qualifying U.S. roles",
        "Contact",
    ),
    HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#2E74B5")),
    SmallGap(4),
    section("SUMMARY"),
    p(
        "Business systems analyst and full-stack developer with a rare combination of microbiology, food science, probiotic ingredient operations, and hands-on software development. Founded and operated Wuxi Baifude Biotech, maintaining trusted ingredient customer relationships over many years, then retrained in Computer Systems - AI and Machine Learning at BCIT with distinction. Strong fit for ERP/CRM, LIMS, implementation, configuration, and internal-tools roles where domain knowledge and practical systems thinking matter as much as coding."
    ),
    section("TARGET ROLES"),
    p(
        "Business Systems Analyst | ERP/CRM Analyst | Implementation Specialist | LIMS / Scientific Application Analyst | Full-Stack Developer for internal business tools"
    ),
    section("CORE SKILLS"),
    p("<b>Systems:</b> ERP/CRM workflows, sales lifecycle, shipment tracking, contract management, financial tracking, implementation support"),
    p("<b>Technology:</b> Python, Flask, SQLAlchemy, MySQL, JavaScript, TypeScript, React, React Native, Angular, Node.js, REST APIs"),
    p("<b>Data / AI:</b> SQL, pandas, NumPy, scikit-learn, logistic regression, PCA, data preprocessing, model evaluation"),
    p("<b>Domain:</b> Microbiology, food science, probiotic ingredients, biotech manufacturing operations, lab data collection, customer account context"),
    section("SELECTED SYSTEMS AND SOFTWARE PROJECTS"),
    role(
        "Baifude Biotech ERP/CRM System",
        "Founder-Developer | Python, Flask, SQLAlchemy, MySQL | Dec 2025 - Present",
        [
            "Built a working ERP/CRM system for a biotech ingredient business, translating real sales, shipment, contract, and payment workflows into software features.",
            "Designed relational data models for customer accounts, products, contracts, shipments, and financial records, including ship-first/sign-later operating scenarios.",
            "Used domain knowledge from probiotic raw-material sales to make the system practical for non-technical business users rather than a classroom-only demo.",
        ],
    ),
    role(
        "Granville Biomedical Mobile App and Admin Portal",
        "Team project | Expo, React Native, Firebase | Sep - Dec 2025",
        [
            "Helped deliver a cross-platform health education app published on the Apple App Store and Google Play.",
            "Built/administered Firebase-backed quiz management workflows with staging and approval steps so non-technical staff could maintain production content safely.",
        ],
    ),
    role(
        "CrossyThink AI Crossword Game",
        "Flask, SQLAlchemy, MySQL, JWT, Gemini API | Oct - Dec 2025",
        [
            "Built a Flask REST backend with authentication, role-based access control, and MySQL persistence.",
            "Integrated LLM-based puzzle generation, first through a local Mistral setup and later through Gemini API after graduation.",
        ],
    ),
    role(
        "MealPlanIQ",
        "Angular, Flask, Google Cloud Storage | Apr - May 2025",
        ["Delivered meal-planning features including one-click meal replacement, nutrient recalculation, and plan compliance indicators."],
    ),
    role(
        "Machine Learning Tumor Classification Pipeline",
        "Python, pandas, scikit-learn | Jan - Apr 2024",
        ["Implemented an end-to-end workflow for biomedical data preprocessing, variance filtering, PCA, model training, tuning, and evaluation."],
    ),
    section("PROFESSIONAL EXPERIENCE"),
    role(
        "Founder / Sales Manager, Wuxi Baifude Biotech Company",
        "Wuxi, China | Apr 2013 - Mar 2019; customer relationships continued remotely",
        [
            "Founded and operated a probiotic and biotech ingredient business serving stable raw-material customers, with relationships that continued to rely on product and technical trust after relocation to Canada.",
            "Managed customer requirements, supplier coordination, shipment timing, pricing, contracts, and receivables, giving direct business-process knowledge now applied to ERP/CRM development.",
            "Kept the company practical and relationship-driven rather than large-scale, building credibility with customers who valued reliability, product knowledge, and follow-through.",
        ],
    ),
    role(
        "Sales Team Leader, BioGrowing Co., Ltd.",
        "Shanghai, China | Oct 2010 - Mar 2013",
        [
            "Promoted from sales representative to team leader after top sales performance in 2011.",
            "Supported new agricultural probiotic projects and helped expand product-line opportunities with a technical understanding of microbial products.",
        ],
    ),
    role(
        "Laboratory Assistant, Bayer Crop Science",
        "Winnipeg, MB | Feb - Oct 2022",
        ["Supported haploid canola plant project work with careful experimental data collection and team coordination."],
    ),
    section("EDUCATION"),
    p("British Columbia Institute of Technology - Diploma, Computer Systems: AI and Machine Learning, With Distinction, GPA 92%, 2025"),
    p("Manitoba Institute of Trades and Technology - Postgraduate Certificate, Business Management, 2021"),
    p("South China University of Tropical Agriculture - M.Sc., Microbiology, 2007"),
    p("South China University of Tropical Agriculture - B.Eng., Food Science and Engineering, 2004"),
    section("ADDITIONAL PROJECTS"),
    p("Open source: contributed and merged a C hash-table module to an educational programming repository."),
    p("Web Diary: documented self-hosted LLM, Flask/Synology, and n8n automation learning notes."),
]

doc.build(story)
print(OUT)
