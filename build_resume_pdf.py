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


OUT = Path("public/Yiming_Zhu_Software_Developer_Resume_1p.pdf")


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
    title="Yiming Zhu - Software Developer Resume",
    author="Yiming Zhu",
    pageCompression=1,
    leftMargin=0.62 * inch,
    rightMargin=0.62 * inch,
    topMargin=0.55 * inch,
    bottomMargin=0.52 * inch,
)

story = [
    p("YIMING ZHU", "Name"),
    p("Recent Computer Systems Graduate | Junior Software Developer", "Tagline"),
    p(
        "Langley, BC | (431) 887-1218 | yiming168@gmail.com | yimingzhu.netlify.app | github.com/yiming168 | linkedin.com/in/yiming168",
        "Contact",
    ),
    HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#2E74B5")),
    SmallGap(4),
    section("SUMMARY"),
    p(
        "Recent BCIT Computer Systems Technology graduate with distinction (GPA 92%) and hands-on experience building and deploying full-stack applications. Strong foundation in Python, Java, C, SQL, JavaScript, REST APIs, databases, testing, and machine learning. Seeking an entry-level software development, application support, QA automation, data/SQL, or ERP/CRM support role."
    ),
    section("CORE SKILLS"),
    p("<b>Languages:</b> Python, Java, C, SQL, JavaScript, TypeScript | <b>Web:</b> Flask, React, React Native, Angular, Node.js, REST APIs"),
    p("<b>Data / Backend:</b> MySQL, SQLAlchemy, Firebase, Firestore, MongoDB, pandas, NumPy, scikit-learn, XGBoost"),
    p("<b>Tools / Practices:</b> Git/GitHub, Docker, Linux, OOP, data structures, software testing, Agile/Scrum, application support"),
    section("EXPERIENCE"),
    role(
        "ERP/CRM Developer - Wuxi Baifude Biotech",
        "Contract, Remote | Dec 2025 - Present",
        [
            "Built and deployed a full-stack ERP/CRM system using Python, Flask, SQLAlchemy, MySQL, Bootstrap, and Docker.",
            "Developed modules for orders, inventory, procurement, shipments, invoicing, payments, dashboards, and natural-language data queries.",
            "Automated inventory updates with product BOM formulas and published a sanitized live demo with sample data.",
        ],
    ),
    role(
        "Laboratory Assistant - Bayer Crop Science",
        "Winnipeg, MB | Feb - Oct 2022",
        [
            "Supported a haploid canola project while maintaining accurate process and sample data.",
            "Coordinated daily activities and followed structured procedures in a cross-functional Canadian workplace.",
        ],
    ),
    section("SELECTED SOFTWARE PROJECTS"),
    role(
        "Granville Biomedical Mobile App and Admin Portal",
        "React Native, Expo, Firebase | Sep - Dec 2025",
        [
            "Helped deliver a cross-platform client app published on the Apple App Store and Google Play.",
            "Built a Firebase-backed admin portal with staged content submission, review, and approval workflows.",
        ],
    ),
    role(
        "Insurance Claim Prediction - 1st Place BCIT Competition",
        "Python, XGBoost, scikit-learn | 2025",
        ["Built a two-stage classification and regression pipeline that achieved the best MAE and F1 results among competing teams."],
    ),
    role(
        "CrossyThink AI Crossword Game",
        "Flask, SQLAlchemy, MySQL, JWT, Gemini API | Oct - Dec 2025",
        [
            "Built a Flask REST API with JWT authentication, role-based access control, MySQL persistence, and LLM-driven puzzle generation.",
        ],
    ),
    role(
        "MealPlanIQ",
        "Angular, Flask, Google Cloud Storage | Apr - May 2025",
        ["Implemented one-click meal replacement, nutrient recalculation, and plan compliance indicators in a full-stack application."],
    ),
    section("EDUCATION"),
    p("British Columbia Institute of Technology - Diploma, Computer Systems Technology: AI and Machine Learning, With Distinction, GPA 92%, Dec 2025"),
    section("ADDITIONAL PROJECTS"),
    p("Open source: contributed a merged C hash-table module. Other work includes React/Firestore, Angular/Flask, computer vision, classification, and mobile projects."),
]

doc.build(story)
print(OUT)
