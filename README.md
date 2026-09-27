# leads-niche-hub

חיבור בין שתי אפליקציות של SHAHAR AI PRODUCTIONS:

- `niche-hunter/`: צייד הנישות. עותק של `C:\Users\User\Downloads\niche-hunter.html`
- `leads-radar/`: Leads Radar. עותק של הריפו [shaharprod/leads-radar](https://github.com/shaharprod/leads-radar) (commit a63688f)
- `index.html`: דף הבית שמחבר ביניהן

## מה נוסף בחיבור
- צייד הנישות → Leads Radar: לכל הזדמנות ה-AI מחזיר `lead_keywords` (סוגי עסקים מקומיים). לחיצה פותחת את Leads Radar עם `?kw=`.
- Leads Radar → צייד הנישות: הכפתור «💡 רעיון למוצר לנישה הזו» פותח את `niche-hunter/?seed=...&auto=1`.

## בידוד מהמקור
- המקורות לא שונו.
- האחסון בדפדפן בנפרד: `hub_lr_*` / `hub_nh_*` במקום `lr_*` / `nh_*`, כדי שהלידים של Leads Radar המקורי (אותו דומיין shaharprod.github.io) לא ייגעו.
- בפעם הראשונה ההגדרות (מפתחות API, מיתוג) מועתקות **לקריאה בלבד** מ-Leads Radar המקורי. אין כתיבה למפתחות המקוריים.
- שרת הביקורת (Cloud Function) משותף לשתי הגרסאות.
