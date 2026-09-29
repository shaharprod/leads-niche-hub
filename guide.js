/* SHAHAR AI PRODUCTIONS · leads-niche-hub
   Shared "easy guide": a three-sides bar + a guide panel in every tool.
   The three sides: businesses / their customers / Sam's office (solutions, system implementation, apps, training).
   Usage: <script src="https://shaharprod.github.io/leads-niche-hub/guide.js" data-feature="hub|niche|radar|needs" defer></script>
   Additive only: it lives in its own Shadow DOM and does not touch the page's code or styles. */
(function(){
  "use strict";
  var me=document.currentScript||document.querySelector('script[src*="guide.js"]');
  var FEATURE=(me&&me.getAttribute("data-feature"))||"hub";
  var BASE="https://shaharprod.github.io/leads-niche-hub/";
  var L={hub:BASE, niche:BASE+"niche-hunter/", radar:BASE+"leads-radar/", needs:BASE+"needs-map/", guide:BASE+"guide.html",
    lead:"https://shaharprod.github.io/RAVMESER/lead.html", wa:"https://whatsapp.com/channel/0029VbD64bG6BIEkkMpXzb08"};
  function a(href,txt){ return '<a href="'+href+'" target="_blank" rel="noopener">'+txt+'</a>'; }

  var DATA={
    hub:{
      title:"מרכז הלידים והנישות",
      one:"שלושה כלים שעובדים יחד ומחברים בין בעלי עסקים, הלקוחות שלהם, והמשרד שלך.",
      biz:"<b>"+a(L.radar,"Leads Radar")+"</b> מוצא את העסקים על המפה ובודק מה חסר להם: אתר, הזמנה, מענה, ביקורות.",
      cust:"<b>"+a(L.needs,"מפת הצרכים")+"</b> ו<b>"+a(L.niche,"צייד הנישות")+"</b> מראים על מה הלקוחות מתלוננים ומה הם מחפשים, לפי שכונה.",
      office:"אתה מתרגם כאב לפתרון שאתה מוכר: הטמעת מערכת, אפליקציה, בוט או הדרכה. כל כלי מסתיים בפעולה שמכניסה לך עבודה.",
      steps:[
        "פותחים את "+a(L.needs,"🧭 מפת הצרכים")+", בוחרים אזור וסוג עסקים ולוחצים «🔍 מפה את הצרכים».",
        "בלשונית «📊 דירוג הצרכים» רואים את הצורך הגדול באזור. בלשונית «🤝 הזדמנויות חיבור» רואים מי סובל ממנו ומי פותר.",
        "אם אף עסק לא פותר את הצורך (🚫 פער פתוח): לוחצים «💡 צור פתרון». "+a(L.niche,"צייד הנישות")+" בונה רעיון למוצר, מדריך או אפליקציה, עם פרומפטים מוכנים.",
        "עוברים ל-"+a(L.radar,"Leads Radar")+" על אותו אזור, פותחים דוח לעסקים שסובלים, ושולחים להם הודעת תובנה בוואטסאפ.",
        "בעל עסק שעונה עובר לשיחת ייעוץ איתך. הלקוחות שלו מקבלים שירות טוב יותר, והוא משלם לך על הפתרון."
      ],
      flow:[["needs","מפת הצרכים","מה חסר ולמי"],["niche","צייד הנישות","איזה פתרון לבנות"],["radar","Leads Radar","למי לפנות ואיך"]]
    },
    niche:{
      title:"צייד הנישות",
      one:"מוצא בעיות שאנשים מחפשים להן פתרון, והופך אותן למוצר מוכן לבנייה: מדריך, אפליקציה או שירות.",
      cust:"<b>חיפוש טרנדים:</b> מה אנשים מקלידים בגוגל וביוטיוב. <b>מפת הכאבים (🔥 צורך):</b> על מה לקוחות מתלוננים בביקורות ומה הם מחפשים, בכל שכונה.",
      biz:"בכל כרטיס הזדמנות יש <b>🎯 עסקים שיקנו או ימליצו</b>. במפת הכאבים רואים אילו עסקים הלקוחות שלהם מתלוננים, עם תמונות וקישורים.",
      office:"כל כרטיס הוא מוצר שאתה יכול לבנות ולמכור: פרומפט למוצר, לדף מכירה ולמודעות. <b>🚫 פער פתוח</b> (אין עסק שנותן פתרון) = ההזדמנות הכי טובה שלך.",
      steps:[
        "<b>חיפוש:</b> כותבים נישה (למשל «משכנתא») ולוחצים «גלה טרנדים».",
        "בכרטיס: «▣ מוצר לבנות» ← «העתק פרומפט», ומדביקים ב-Claude, Lovable או Base44 כדי לבנות את המוצר.",
        "«▤ דף מכירה» ו«פרומפט קופי / קריאייטיב» נותנים את השיווק מוכן.",
        "<b>מפת כאבים:</b> בוחרים «🔥 צורך», כותבים אזור, בוחרים שירות או מילה חופשית, ולוחצים «🔍 סרוק עכשיו».",
        "קוראים את הכרטיס של כל שכונה: מה אנשים צריכים, מה מחפשים, ואילו עסקים סובלים. ‎«💡 פתרון ל…» יוצר רעיון למוצר.",
        "סימן 🚫 אדום = אין אף עסק שפותר את זה. לוחצים «💡 צור פתרון לפער הזה»."
      ],
      flow:[["radar","Leads Radar","📍 בכפתורי העסקים בכרטיס: מוצאים למי למכור"],["needs","מפת הצרכים","לתמונה המלאה של שני הצדדים באזור"]]
    },
    radar:{
      title:"Leads Radar",
      one:"סורק עסקים על מפת גוגל ובונה לכל עסק דוח נוכחות דיגיטלית, ציון הזדמנות ופנייה מוכנה.",
      biz:"פרטי קשר, דירוג, אתר ומהירותו, רשתות, מודעות, מתחרים וציון הזדמנות לכל עסק.",
      cust:"«מה הלקוחות אומרים»: הביקורות של העסק. מפת הצרכים הופכת אותן לרשימת כאבים מסודרת.",
      office:"הדוח הוא כלי המכירה שלך: הוא מראה לבעל העסק בדיוק מה חסר, עם הצעת מחיר ומתנה, ופותח שיחה על הפתרון שלך.",
      steps:[
        "בפעם הראשונה: «⚙️ הגדרות» ← מדביקים מפתח Google Maps (ומפתח Gemini לניתוח).",
        "גוררים את הסיכה לאזור, כותבים סוג עסק (או בוחרים קטגוריה) ולוחצים «🔍 התחל סריקה».",
        "ממיינים לפי «🏆 ההזדמנויות הטובות ביותר» ופותחים עסק עם ציון גבוה.",
        "מריצים בדיקה מעמיקה, קוראים את הדוח ושולחים אותו או הודעת וואטסאפ.",
        "מעדכנים את שלב הליד (חדש ← פנייה ← שיחה ← נסגר)."
      ],
      flow:[["needs","מפת הצרכים","«🧭 מפת צרכים לאזור הזה»: מה הלקוחות של העסקים האלה צריכים"],["niche","צייד הנישות","«💡 רעיון למוצר לנישה הזו»: פתרון שתוכל למכור לכל העסקים מהסוג הזה"]]
    },
    needs:{
      title:"מפת הצרכים",
      one:"מפה דו-צדדית: מה הלקוחות צריכים, מה בעלי העסקים צריכים, ואיפה אתה מחבר ביניהם.",
      cust:"ביקורות מסווגות ל-7 צרכים (זמינות, מהירות, מחיר, איכות, יחס, נגישות, אונליין) ועוד חיפושים מקומיים בגוגל, לפי שכונה.",
      biz:"לכל עסק: על מה הלקוחות שלו מתלוננים, הכאבים שלו (אין אתר, סוגר מוקדם, לא עונה לביקורות) וסימני שאיפה לצמיחה.",
      office:"3 סוגי חיבור: 1) להפנות לקוחות לעסק שפותר, 2) לשלוח לעסק שסובל דוח תובנות, 3) להציע לו את הפתרון שלך. עם הודעת וואטסאפ מוכנה.",
      steps:[
        "כותבים אזור, בוחרים רדיוס וסוג עסקים (ריק = הכל) ולוחצים «🔍 מפה את הצרכים». או «📥 מהסריקה האחרונה ב-Leads Radar» בלי עלות נוספת.",
        "«📊 דירוג הצרכים»: הצורך הגדול לקטן. לחיצה על שורה מציגה ציטוטים. תלונה לא במקום? מעבירים אותה לצורך הנכון.",
        "«🤝 הזדמנויות חיבור»: לכל שכונה וצורך, מי פותר, מי סובל, ומה הפתרון שלך.",
        "«🏪 בעלי העסקים»: כרטיס לכל עסק עם תמונות, קישורים וכפתור «💬 הודעת תובנה».",
        "🚫 אף עסק לא פותר? «💡 צור פתרון לפער הזה» פותח את צייד הנישות ובונה מוצר."
      ],
      flow:[["radar","Leads Radar","«📊 דוח» ליד כל עסק: דוח מלא ופנייה"],["niche","צייד הנישות","«💡 צור פתרון»: מוצר, מדריך או אפליקציה לפער"]]
    }
  };
  var D=DATA[FEATURE]||DATA.hub;
  var LS={get:function(k){try{return localStorage.getItem(k);}catch(e){return null;}},set:function(k,v){try{localStorage.setItem(k,v);}catch(e){}}};

  var CSS=':host{all:initial}*{box-sizing:border-box;font-family:Heebo,"Segoe UI",Arial,sans-serif}'
   +'.v{--bg:#fff;--ink:#1b1f2a;--mut:#5b6475;--line:#e3e6ee;--acc:#4f5bff;--acs:#eceeff;--b:#7a4fd6;--bs:#f2ecff;--c:#e0663a;--cs:#fdefe8;--o:#12a26b;--os:#e1f6ec}'
   +'@media (prefers-color-scheme:dark){.v{--bg:#171b26;--ink:#e9ecf3;--mut:#a2abbd;--line:#2b3240;--acc:#8b93ff;--acs:#252a50;--b:#b196ff;--bs:#2a2340;--c:#ff8a5c;--cs:#35231b;--o:#34d399;--os:#15352a}}'
   +'.bar{direction:rtl;display:flex;flex-wrap:wrap;gap:6px;align-items:center;padding:6px 12px;background:var(--bg);border-bottom:1px solid var(--line);color:var(--ink);font-size:13px;line-height:1.5}'
   +'.bar b{font-weight:700}.chip{border-radius:999px;padding:2px 10px;white-space:nowrap}'
   +'.cb{background:var(--bs);color:var(--b)}.cc{background:var(--cs);color:var(--c)}.co{background:var(--os);color:var(--o)}'
   +'.btn{border:0;border-radius:999px;padding:4px 12px;background:var(--acc);color:#fff;font-weight:700;font-size:13px;cursor:pointer}'
   +'.x{margin-inline-start:auto;background:transparent;color:var(--mut);border:0;cursor:pointer;font-size:15px}'
   +'.fab{position:fixed;left:14px;bottom:14px;z-index:2147483000;border:0;border-radius:999px;padding:10px 14px;background:var(--acc);color:#fff;font-weight:800;font-size:14px;box-shadow:0 6px 20px rgba(0,0,0,.25);cursor:pointer}'
   +'.ov{position:fixed;inset:0;background:rgba(10,12,20,.5);z-index:2147483001;display:none}.ov.on{display:block}'
   +'.pn{position:fixed;top:0;right:0;height:100%;width:min(460px,100%);background:var(--bg);color:var(--ink);z-index:2147483002;direction:rtl;overflow:auto;padding:18px 18px 40px;box-shadow:-10px 0 30px rgba(0,0,0,.25);transform:translateX(105%);transition:transform .25s}'
   +'.pn.on{transform:none}.pn h2{margin:0 0 4px;font-size:20px}.one{color:var(--mut);margin:0 0 12px;font-size:14px}'
   +'.p3{display:grid;gap:8px}.p{border-radius:12px;padding:10px 12px;font-size:14px;line-height:1.6}.p h3{margin:0 0 2px;font-size:14px}'
   +'.pb{background:var(--bs)}.pb h3{color:var(--b)}.pc{background:var(--cs)}.pc h3{color:var(--c)}.po{background:var(--os)}.po h3{color:var(--o)}'
   +'h4{margin:16px 0 6px;font-size:15px}ol{margin:0;padding-inline-start:20px;font-size:14px;line-height:1.7}li{margin-bottom:4px}'
   +'a{color:var(--acc)}.fl{display:grid;gap:6px;font-size:14px}.fi{border:1px solid var(--line);border-radius:10px;padding:8px 10px}'
   +'.cls{position:sticky;top:0;float:left;border:0;background:var(--acs);color:var(--acc);border-radius:999px;width:32px;height:32px;font-size:16px;cursor:pointer}'
   +'.ft{margin-top:16px;font-size:13px;color:var(--mut);border-top:1px solid var(--line);padding-top:10px}'
   +'@media (max-width:600px){.bar{font-size:12px}.chip{white-space:normal}}';

  function build(){
    var host=document.createElement("div"); host.id="hub-guide-host";
    var root=host.attachShadow({mode:"open"});
    var hidden=LS.get("hub_guide_bar_"+FEATURE)==="0";
    var steps=D.steps.map(function(s){return "<li>"+s+"</li>";}).join("");
    var flow=D.flow.map(function(f){return '<div class="fi">'+(FEATURE==="hub"?"":"← ")+'<b>'+a(L[f[0]],f[1])+'</b>: '+f[2]+'</div>';}).join("");
    root.innerHTML='<style>'+CSS+'</style><div class="v">'
      +'<div class="bar" '+(hidden?'style="display:none"':'')+'><b>שלושת הצדדים בכלי הזה:</b>'
      +'<span class="chip cb">🏪 בעלי עסקים</span><span class="chip cc">👥 הלקוחות שלהם</span><span class="chip co">🧭 המשרד שלך: פתרון, הטמעה, הדרכה</span>'
      +'<button class="btn" data-open>📘 מדריך קל</button><button class="x" data-hide title="הסתר את הפס">✕</button></div>'
      +'<button class="fab" data-open title="מדריך קל">📘 מדריך</button>'
      +'<div class="ov" data-close></div>'
      +'<div class="pn" role="dialog" aria-label="מדריך קל"><button class="cls" data-close aria-label="סגירה">✕</button>'
      +'<h2>📘 מדריך קל: '+D.title+'</h2><p class="one">'+D.one+'</p>'
      +'<div class="p3"><div class="p pb"><h3>🏪 בעלי העסקים</h3>'+D.biz+'</div>'
      +'<div class="p pc"><h3>👥 הלקוחות שלהם</h3>'+D.cust+'</div>'
      +'<div class="p po"><h3>🧭 המשרד שלך (אתה)</h3>'+D.office+'</div></div>'
      +'<h4>איך משתמשים, צעד אחר צעד</h4><ol>'+steps+'</ol>'
      +'<h4>'+(FEATURE==="hub"?"הסדר הנכון בין הכלים":"השילוב עם שאר הכלים")+'</h4><div class="fl">'+flow+'</div>'
      +'<div class="ft">המדריך המלא לשילוב בין הכלים: '+a(L.guide,"📗 מדריך המערכת")+' · '+a(L.hub,"🏠 ה-Hub")+' · '+a(L.lead,"דף הלידים שלך")+'</div>'
      +'</div></div>';
    var pn=root.querySelector(".pn"), ov=root.querySelector(".ov"), bar=root.querySelector(".bar");
    function open(){ pn.classList.add("on"); ov.classList.add("on"); }
    function close(){ pn.classList.remove("on"); ov.classList.remove("on"); }
    root.querySelectorAll("[data-open]").forEach(function(b){ b.addEventListener("click",open); });
    root.querySelectorAll("[data-close]").forEach(function(b){ b.addEventListener("click",close); });
    root.querySelector("[data-hide]").addEventListener("click",function(){ bar.style.display="none"; LS.set("hub_guide_bar_"+FEATURE,"0"); });
    document.addEventListener("keydown",function(e){ if(e.key==="Escape") close(); });
    document.body.insertBefore(host, document.body.firstChild);
    window.hubGuideOpen=open;
    if(!LS.get("hub_guide_seen_"+FEATURE)){ LS.set("hub_guide_seen_"+FEATURE,"1"); setTimeout(open,700); }
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",build); else build();
})();
