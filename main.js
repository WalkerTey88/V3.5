/* =========================
   LYX Finance Partners JS
   File: main.js
   ========================= */

/* -----------------------------------
   多语言字典（保持与 HTML data-lang-key 一致）
----------------------------------- */
const translations = {
  zh: {
    title: "LYX Finance Partners – 您的最佳财务!伙伴",
    navHome: "首页",
    navAbout: "关于我们",
    navServices: "服务",
    navWhyUs: "为什么选择我们",
    navApply: "申请",
    navContact: "联系",
    heroTitle: "今天申请，今天通过!",
    heroSubtitle1: "快速 & 许可",
    heroSubtitle2: "LYX Finance Partners 提供安全、许可的个人贷款。现在申请，只需 2 小时即可获得 5,000 – 100,000 元的贷款！",
    heroButton: "立即申请 (可线上或线下)",
    aboutTitle: "关于 LYX Finance Partners – 建立信任的基石",
    aboutIntro: "我们不仅仅是贷款提供者，更是您值得信赖的财务伙伴。",
    servicesTitle: "我们的贷款服务",
    service1Title: "个人贷款",
    service1Desc: "快速现金、低利率。",
    service2Title: "商业贷款",
    service2Desc: "企业资金周转、业务扩展解决方案。",
    service3Title: "紧急贷款",
    service3Desc: "紧急费用快速解决。",
    whyUsTitle: "为什么选择我们？",
    whyUsIntro: "无论你的情况有多糟，我们都愿意向你伸出援手。",
    feature1Title: "最低利率",
    feature2Title: "灵活还款",
    feature3Title: "快速申请",
    feature4Title: "专业经验",
    feature5Title: "24小时申请",
    applyTitle: "如何申请？",
    step1Title: "步骤 1",
    step2Title: "步骤 2",
    step3Title: "步骤 3",
    formTitle: "贷款申请表",
    contactTitle: "与我们取得联系",
    contactButton: "立即申请",
    footerRights: "© 2025 LYX Finance Partners. All rights reserved."
  },
  
  /* -----------------------------------
      英文版本
  ----------------------------------- */
  en: {
    title: "LYX Finance Partners – Your Trusted Finance Partner",
    navHome: "Home",
    navAbout: "About Us",
    navServices: "Services",
    navWhyUs: "Why Us",
    navApply: "Apply",
    navContact: "Contact",
    heroTitle: "Apply Today, Get Approved Today!",
    heroSubtitle1: "Fast & Licensed",
    heroSubtitle2: "Licensed personal loans from RM 5,000 – RM 100,000. Approval within 2 hours!",
    heroButton: "Apply Now (Online / Offline)",
    aboutTitle: "About LYX Finance Partners – Building Trust",
    aboutIntro: "We are not just lenders, we are your trusted financial partner.",
    servicesTitle: "Our Loan Services",
    service1Title: "Personal Loan",
    service1Desc: "Fast cash with low interest.",
    service2Title: "Business Loan",
    service2Desc: "Working capital and business growth solutions.",
    service3Title: "Emergency Loan",
    service3Desc: "Quick support for urgent expenses.",
    whyUsTitle: "Why Choose Us?",
    whyUsIntro: "No matter your situation, we are ready to help.",
    feature1Title: "Lowest Interest",
    feature2Title: "Flexible Repayment",
    feature3Title: "Fast Application",
    feature4Title: "Professional Experience",
    feature5Title: "24/7 Availability",
    applyTitle: "How to Apply?",
    step1Title: "Step 1",
    step2Title: "Step 2",
    step3Title: "Step 3",
    formTitle: "Loan Application Form",
    contactTitle: "Contact Us",
    contactButton: "Apply Now",
    footerRights: "© 2025 LYX Finance Partners. All rights reserved."
  },
  
  /* -----------------------------------
      马来文版本
  ----------------------------------- */
  ms: {
    title: "LYX Finance Partners – Rakan Kewangan Anda",
    navHome: "Laman Utama",
    navAbout: "Tentang Kami",
    navServices: "Perkhidmatan",
    navWhyUs: "Kenapa Kami",
    navApply: "Mohon",
    navContact: "Hubungi",
    heroTitle: "Mohon Hari Ini, Lulus Hari Ini!",
    heroSubtitle1: "Pantas & Berlesen",
    heroSubtitle2: "Pinjaman peribadi berlesen RM 5,000 – RM 100,000. Kelulusan dalam 2 jam!",
    heroButton: "Mohon Sekarang (Online / Offline)",
    aboutTitle: "Tentang LYX Finance Partners – Membangun Kepercayaan",
    aboutIntro: "Kami bukan sekadar pemberi pinjaman, kami rakan kewangan anda.",
    servicesTitle: "Perkhidmatan Pinjaman Kami",
    service1Title: "Pinjaman Peribadi",
    service1Desc: "Tunai segera dengan kadar rendah.",
    service2Title: "Pinjaman Perniagaan",
    service2Desc: "Modal pusingan & pengembangan perniagaan.",
    service3Title: "Pinjaman Kecemasan",
    service3Desc: "Bantuan segera untuk kecemasan.",
    whyUsTitle: "Kenapa Pilih Kami?",
    whyUsIntro: "Tidak kira keadaan anda, kami sedia membantu.",
    feature1Title: "Kadar Faedah Rendah",
    feature2Title: "Pembayaran Fleksibel",
    feature3Title: "Permohonan Pantas",
    feature4Title: "Berpengalaman",
    feature5Title: "24/7 Permohonan",
    applyTitle: "Cara Memohon",
    step1Title: "Langkah 1",
    step2Title: "Langkah 2",
    step3Title: "Langkah 3",
    formTitle: "Borang Permohonan",
    contactTitle: "Hubungi Kami",
    contactButton: "Mohon Sekarang",
    footerRights: "© 2025 LYX Finance Partners. Semua hak terpelihara."
  }
};


/* ==============================
   多语言切换
============================== */
const langButtons = document.querySelectorAll(".lang-btn");
const langElements = document.querySelectorAll("[data-lang-key]");

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    langButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    const selectedLang = btn.getAttribute("lang");
    applyLanguage(selectedLang);
  });
});

function applyLanguage(lang) {
  const dict = translations[lang];
  
  langElements.forEach(el => {
    const key = el.getAttribute("data-lang-key");
    if (dict[key]) el.innerHTML = dict[key];
  });
  
  // 修改网页标题
  document.title = dict["title"];
}


/* ==============================
   滚动显示动画（Scroll Reveal）
============================== */
const animatedItems = document.querySelectorAll(".animate-on-scroll");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.88;
  
  animatedItems.forEach(item => {
    const boxTop = item.getBoundingClientRect().top;
    
    if (boxTop < triggerBottom) {
      item.classList.add("is-visible");
    }
  });
}

window.addEventListener("scroll", throttle(revealOnScroll, 200));
window.addEventListener("load", revealOnScroll);

/* 节流函数 - 防止高频触发 scroll */
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  
  return function() {
    const context = this;
    const args = arguments;
    
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      
      lastFunc = setTimeout(function() {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}


/* ==============================
   WhatsApp 申请按钮统一处理
============================== */
const whatsappNumber = "60122847784";
const whatsappButtons = document.querySelectorAll(".btn.js-apply-now, .btn[data-whatsapp]");

whatsappButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const url = `https://wa.me/${whatsappNumber}?text=我想申请贷款`;
    window.open(url, "_blank");
  });
});
