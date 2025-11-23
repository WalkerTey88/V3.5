/* =========================
   LYX Finance Partners JS
   File: main.js
   ========================= */

/* -----------------------------------
   多语言字典（保持与 HTML data-lang-key 一致）
----------------------------------- */
const translations = {
    zh: {
        title: "LYX Finance Partners – 您的最佳财务伙伴",
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
        aboutIntro: "我们不仅仅是贷款提供者，更是您值得信赖的财务伙伴。我们致力于提供透明、可靠且以客户为中心的服务，帮助您实现财务目标。",
        aboutCard1Title: "公司历史与承诺",
        aboutCard1Text1: "<strong>2001年开创</strong>，LYX Finance Partners 拥有超过二十年的行业经验。我们见证了市场的变迁，始终坚守诚信和专业的原则。",
        aboutCard1Text2: "我们的使命是为客户提供最合适的财务解决方案，无论市场环境如何，我们都是您坚实的后盾。",
        aboutCard2Title: "信心保证与成功案例",
        aboutCard2Text1: "我们成功的基石源于客户的信任。我们已帮助数以千计的客户渡过财务难关，实现个人和商业目标。",
        aboutCard2Li1: "<strong>98%</strong> 的客户满意度",
        aboutCard2Li2: "<strong>快速审批</strong>：真实案例中，最快2小时放款",
        aboutCard2Li3: "<strong>透明条款</strong>：无隐藏费用，给您完全的信心",
        servicesTitle: "我们的贷款服务",
        service1Title: "个人贷款",
        service1Desc: "这是一个快速简便的获得贷款和快速现金且利率低的方法。",
        service2Title: "商业贷款",
        service2Desc: "你的公司是否需要更多的钱来发展你的业务或支付费用？而银行不能批准你的贷款？别担心，我们在这里用我们的在线小企业贷款解决方案来帮助你！",
        service3Title: "紧急贷款",
        service3Desc: "紧急贷款可以帮助你支付紧急、必要的费用。它们比其他类型的贷款，如发薪日贷款或车主贷款要便宜和安全得多。它们可以同样简单和快速。",
        whyUsTitle: "为什么选择我们？",
        whyUsIntro: "无论你的情况有多糟，LYX Finance Partners都愿意向你伸出援手。今天就向我们申请个人贷款，并在2小时内获得贷款批准!",
        feature1Title: "最低的利率",
        feature1Desc: "低利率可以减少您每月的抵押贷款付款。",
        feature2Title: "灵活还款",
        feature2Desc: "LYX Finance Partners让您可以灵活地将您的还款期延长至72个月。",
        feature3Title: "简单和快速的申请",
        feature3Desc: "我们的目标是为我们的客户提供一个快速和简单的申请过程。",
        feature4Title: "专业经验",
        feature4Desc: "我们为客户提供专业建议，并指导他们获得合适的贷款。",
        feature5Title: "24小时在线申请",
        feature5Desc: "只需在申请表中留下您的信息，我们将很快与您联系。",
        applyTitle: "如何申请？",
        step1Title: "步骤1",
        step1Desc: "请填写表格或发微信给我们。",
        step2Title: "步骤2",
        step2Desc: "解决方案",
        step3Title: "步骤3",
        step3Desc: "收到资金",
        formTitle: "贷款申请表",
        formNameLabel: "姓名",
        formNamePlaceholder: "请输入您的姓名",
        formPhoneLabel: "电话号码",
        formPhonePlaceholder: "请输入您的电话号码",
        formEmailLabel: "电子邮件",
        formEmailPlaceholder: "请输入您的电子邮件",
        formAmountLabel: "贷款金额（元）",
        formAmountPlaceholder: "5000 - 100000",
        formTermLabel: "贷款期限（月）",
        formTermSelect: "请选择贷款期限",
        formTerm6: "6 个月",
        formTerm12: "12 个月",
        formTerm24: "24 个月",
        formTerm36: "36 个月",
        formTerm48: "48 个月",
        formTerm60: "60 个月",
        formTerm72: "72 个月",
        formPurposeLabel: "贷款用途",
        formPurposePlaceholder: "请输入贷款用途（可选）",
        formSubmitBtn: "提交申请",
        ratesTitle: "利率的算法",
        ratesDesc1: "贷款信息：年利率介于 4% 至 10%* 之间。贷款期限在 6 个月至 72 个月之间。",
        ratesDesc2: "例如，一笔为期 1 年、月利率为 0.8% 的 2,000 元贷款，总还款额为 2,192 元。没有相关费用和隐藏费用。",
        ratesDesc3: "此信息旨在说明马来西亚公司提供的一般贷款条款。条款和条件适用。",
        contactTitle: "与我们取得联系",
        contactIntro: "我们在这里帮助每个企业和个人。只要提交你的详细资料，我们很快就会与你联系。你也可以给我们发微信，询问任何进一步的问题。",
        contactButton: "立即申请",
        contactNote: "我们将在24小时内与您联系。",
        footerRights: "&copy; 2025 LYX Finance Partners. All rights reserved.",
        validationRequired: "此字段为必填项",
        validationEmail: "请输入有效的电子邮件地址",
        validationPhone: "请输入有效的电话号码",
        validationAmount: "贷款金额必须在5,000到100,000元之间",
        validationTerm: "请选择贷款期限",
        submissionSuccess: "申请已提交！即将跳转到 WhatsApp 以发送您的申请详情。"
    },

    en: {
        title: "LYX Finance Partners – Your Best Financial Partner",
        navHome: "Home",
        navAbout: "About Us",
        navServices: "Services",
        navWhyUs: "Why Choose Us",
        navApply: "Apply",
        navContact: "Contact",
        heroTitle: "Apply Today, Approved Today!",
        heroSubtitle1: "Fast & Licensed",
        heroSubtitle2: "LYX Finance Partners offers secure, licensed personal loans. Apply now and get RM 5,000 – 100,000 in just 2 hours!",
        heroButton: "Apply Now (Online or Offline)",
        aboutTitle: "About LYX Finance Partners – Building Trust",
        aboutIntro: "We are more than just a loan provider; we are your trusted financial partner. We are committed to providing transparent, reliable, and customer-centric services to help you achieve your financial goals.",
        aboutCard1Title: "Company History & Commitment",
        aboutCard1Text1: "<strong>Established in 2001</strong>, LYX Finance Partners has over two decades of industry experience. We have witnessed market changes and always adhered to principles of integrity and professionalism.",
        aboutCard1Text2: "Our mission is to provide the most suitable financial solutions for our clients. No matter the market conditions, we are your solid support.",
        aboutCard2Title: "Confidence Guarantee & Success Stories",
        aboutCard2Text1: "Our success is built on customer trust. We have helped thousands of clients overcome financial difficulties and achieve personal and business goals.",
        aboutCard2Li1: "<strong>98%</strong> customer satisfaction",
        aboutCard2Li2: "<strong>Fast Approval</strong>: Real cases with disbursement in as fast as 2 hours",
        aboutCard2Li3: "<strong>Transparent Terms</strong>: No hidden fees, giving you complete confidence",
        servicesTitle: "Our Loan Services",
        service1Title: "Personal Loan",
        service1Desc: "This is a quick and easy way to get a loan and fast cash with low interest rates.",
        service2Title: "Business Loan",
        service2Desc: "Does your company need more money to grow your business or cover expenses? And banks can't approve your loan? Don't worry, we are here to help you with our online small business loan solution!",
        service3Title: "Emergency Loan",
        service3Desc: "Emergency loans can help you pay for urgent, necessary expenses. They are much cheaper and safer than other types of loans, such as payday loans or car title loans. They can be just as simple and fast.",
        whyUsTitle: "Why Choose Us?",
        whyUsIntro: "No matter how bad your situation is, LYX Finance Partners is willing to lend a hand. Apply for a personal loan with us today and get approved within 2 hours!",
        feature1Title: "Lowest Interest Rates",
        feature1Desc: "Low interest rates can reduce your monthly mortgage payments.",
        feature2Title: "Flexible Repayment",
        feature2Desc: "LYX Finance Partners gives you the flexibility to extend your repayment period up to 72 months.",
        feature3Title: "Simple & Fast Application",
        feature3Desc: "Our goal is to provide a fast and simple application process for our customers.",
        feature4Title: "Professional Experience",
        feature4Desc: "We provide professional advice and guide customers to suitable loans.",
        feature5Title: "24/7 Online Application",
        feature5Desc: "Just leave your information in the application form and we will contact you soon.",
        applyTitle: "How to Apply?",
        step1Title: "Step 1",
        step1Desc: "Please fill out the form or message us on WeChat.",
        step2Title: "Step 2",
        step2Desc: "Solution",
        step3Title: "Step 3",
        step3Desc: "Receive Funds",
        formTitle: "Loan Application Form",
        formNameLabel: "Full Name",
        formNamePlaceholder: "Please enter your full name",
        formPhoneLabel: "Phone Number",
        formPhonePlaceholder: "Please enter your phone number",
        formEmailLabel: "Email",
        formEmailPlaceholder: "Please enter your email",
        formAmountLabel: "Loan Amount (RM)",
        formAmountPlaceholder: "5000 - 100000",
        formTermLabel: "Loan Term (Months)",
        formTermSelect: "Please select loan term",
        formTerm6: "6 Months",
        formTerm12: "12 Months",
        formTerm24: "24 Months",
        formTerm36: "36 Months",
        formTerm48: "48 Months",
        formTerm60: "60 Months",
        formTerm72: "72 Months",
        formPurposeLabel: "Loan Purpose",
        formPurposePlaceholder: "Please enter loan purpose (optional)",
        formSubmitBtn: "Submit Application",
        ratesTitle: "Interest Rate Calculation",
        ratesDesc1: "Loan Information: Annual interest rates range from 4% to 10%*. Loan terms range from 6 months to 72 months.",
        ratesDesc2: "For example, a RM 2,000 loan for 1 year with a monthly interest rate of 0.8% would have a total repayment of RM 2,192. There are no related fees or hidden charges.",
        ratesDesc3: "This information is intended to illustrate general loan terms offered by Malaysian companies. Terms and conditions apply.",
        contactTitle: "Get in Touch With Us",
        contactIntro: "We are here to help every business and individual. Just submit your details and we will contact you soon. You can also message us on WeChat for any further questions.",
        contactButton: "Apply Now",
        contactNote: "We will contact you within 24 hours.",
        footerRights: "&copy; 2025 LYX Finance Partners. All rights reserved.",
        validationRequired: "This field is required",
        validationEmail: "Please enter a valid email address",
        validationPhone: "Please enter a valid phone number",
        validationAmount: "Loan amount must be between 5,000 and 100,000",
        validationTerm: "Please select a loan term",
        submissionSuccess: "Application submitted! Redirecting to WhatsApp to send your details."
    },

    ms: {
        title: "LYX Finance Partners – Rakan Kewangan Terbaik Anda",
        navHome: "Laman Utama",
        navAbout: "Tentang Kami",
        navServices: "Perkhidmatan",
        navWhyUs: "Mengapa Pilih Kami",
        navApply: "Mohon",
        navContact: "Hubungi",
        heroTitle: "Mohon Hari Ini, Lulus Hari Ini!",
        heroSubtitle1: "Cepat & Berlesen",
        heroSubtitle2: "LYX Finance Partners menawarkan pinjaman peribadi yang selamat dan berlesen. Mohon sekarang dan dapatkan RM 5,000 – 100,000 dalam masa 2 jam sahaja!",
        heroButton: "Mohon Sekarang (Atas Talian atau Luar Talian)",
        aboutTitle: "Tentang LYX Finance Partners – Membina Kepercayaan",
        aboutIntro: "Kami bukan sekadar pembekal pinjaman; kami adalah rakan kewangan yang dipercayai anda. Kami komited untuk memberikan perkhidmatan yang telus, boleh dipercayai dan berpusatkan pelanggan untuk membantu anda mencapai matlamat kewangan anda.",
        aboutCard1Title: "Sejarah Syarikat & Komitmen",
        aboutCard1Text1: "<strong>Ditubuhkan pada 2001</strong>, LYX Finance Partners mempunyai lebih dua dekad pengalaman industri. Kami telah menyaksikan perubahan pasaran dan sentiasa berpegang pada prinsip integriti dan profesionalisme.",
        aboutCard1Text2: "Misi kami adalah untuk menyediakan penyelesaian kewangan yang paling sesuai untuk pelanggan kami. Tidak kira keadaan pasaran, kami adalah sokongan kukuh anda.",
        aboutCard2Title: "Jaminan Keyakinan & Kisah Kejayaan",
        aboutCard2Text1: "Kejayaan kami dibina atas kepercayaan pelanggan. Kami telah membantu beribu-ribu pelanggan mengatasi kesukaran kewangan dan mencapai matlamat peribadi dan perniagaan.",
        aboutCard2Li1: "<strong>98%</strong> kepuasan pelanggan",
        aboutCard2Li2: "<strong>Kelulusan Cepat</strong>: Kes sebenar dengan pembayaran dalam masa 2 jam",
        aboutCard2Li3: "<strong>Terma Telus</strong>: Tiada yuran tersembunyi, memberi anda keyakinan sepenuhnya",
        servicesTitle: "Perkhidmatan Pinjaman Kami",
        service1Title: "Pinjaman Peribadi",
        service1Desc: "Ini adalah cara yang pantas dan mudah untuk mendapatkan pinjaman dan wang tunai dengan kadar faedah yang rendah.",
        service2Title: "Pinjaman Perniagaan",
        service2Desc: "Adakah syarikat anda memerlukan lebih banyak wang untuk mengembangkan perniagaan atau menampung perbelanjaan? Dan bank tidak dapat meluluskan pinjaman anda? Jangan risau, kami di sini untuk membantu anda dengan penyelesaian pinjaman perniagaan kecil dalam talian kami!",
        service3Title: "Pinjaman Kecemasan",
        service3Desc: "Pinjaman kecemasan boleh membantu anda membayar perbelanjaan kecemasan yang diperlukan. Ia jauh lebih murah dan selamat daripada jenis pinjaman lain, seperti pinjaman gaji atau pinjaman hak milik kereta. Ia boleh sama mudah dan cepat.",
        whyUsTitle: "Mengapa Pilih Kami?",
        whyUsIntro: "Tidak kira betapa teruknya keadaan anda, LYX Finance Partners sanggup menghulurkan bantuan. Mohon pinjaman peribadi dengan kami hari ini dan diluluskan dalam masa 2 jam!",
        feature1Title: "Kadar Faedah Terendah",
        feature1Desc: "Kadar faedah yang rendah boleh mengurangkan bayaran gadai janji bulanan anda.",
        feature2Title: "Bayaran Balik Fleksibel",
        feature2Desc: "LYX Finance Partners memberi anda fleksibiliti untuk melanjutkan tempoh bayaran balik sehingga 72 bulan.",
        feature3Title: "Permohonan Mudah & Cepat",
        feature3Desc: "Matlamat kami adalah untuk menyediakan proses permohonan yang cepat dan mudah untuk pelanggan kami.",
        feature4Title: "Pengalaman Profesional",
        feature4Desc: "Kami memberikan nasihat profesional dan membimbing pelanggan kepada pinjaman yang sesuai.",
        feature5Title: "Permohonan Atas Talian 24 Jam",
        feature5Desc: "Hanya tinggalkan maklumat anda dalam borang permohonan dan kami akan menghubungi anda tidak lama lagi.",
        applyTitle: "Bagaimana untuk Memohon?",
        step1Title: "Langkah 1",
        step1Desc: "Sila isi borang atau hantar mesej kepada kami di WeChat.",
        step2Title: "Langkah 2",
        step2Desc: "Penyelesaian",
        step3Title: "Langkah 3",
        step3Desc: "Terima Dana",
        formTitle: "Borang Permohonan Pinjaman",
        formNameLabel: "Nama Penuh",
        formNamePlaceholder: "Sila masukkan nama penuh anda",
        formPhoneLabel: "Nombor Telefon",
        formPhonePlaceholder: "Sila masukkan nombor telefon anda",
        formEmailLabel: "E-mel",
        formEmailPlaceholder: "Sila masukkan e-mel anda",
        formAmountLabel: "Jumlah Pinjaman (RM)",
        formAmountPlaceholder: "5000 - 100000",
        formTermLabel: "Tempoh Pinjaman (Bulan)",
        formTermSelect: "Sila pilih tempoh pinjaman",
        formTerm6: "6 Bulan",
        formTerm12: "12 Bulan",
        formTerm24: "24 Bulan",
        formTerm36: "36 Bulan",
        formTerm48: "48 Bulan",
        formTerm60: "60 Bulan",
        formTerm72: "72 Bulan",
        formPurposeLabel: "Tujuan Pinjaman",
        formPurposePlaceholder: "Sila masukkan tujuan pinjaman (pilihan)",
        formSubmitBtn: "Hantar Permohonan",
        ratesTitle: "Pengiraan Kadar Faedah",
        ratesDesc1: "Maklumat Pinjaman: Kadar faedah tahunan antara 4% hingga 10%*. Tempoh pinjaman antara 6 bulan hingga 72 bulan.",
        ratesDesc2: "Sebagai contoh, pinjaman RM 2,000 untuk 1 tahun dengan kadar faedah bulanan 0.8% akan mempunyai jumlah bayaran balik RM 2,192. Tiada yuran berkaitan atau caj tersembunyi.",
        ratesDesc3: "Maklumat ini bertujuan untuk menggambarkan terma pinjaman umum yang ditawarkan oleh syarikat Malaysia. Terma dan syarat dikenakan.",
        contactTitle: "Hubungi Kami",
        contactIntro: "Kami di sini untuk membantu setiap perniagaan dan individu. Hanya hantar butiran anda dan kami akan menghubungi anda tidak lama lagi. Anda juga boleh menghantar mesej kepada kami di WeChat untuk sebarang soalan lanjut.",
        contactButton: "Mohon Sekarang",
        contactNote: "Kami akan menghubungi anda dalam masa 24 jam.",
        footerRights: "&copy; 2025 LYX Finance Partners. Hak cipta terpelihara.",
        validationRequired: "Medan ini diperlukan",
        validationEmail: "Sila masukkan alamat e-mel yang sah",
        validationPhone: "Sila masukkan nombor telefon yang sah",
        validationAmount: "Jumlah pinjaman mesti antara 5,000 dan 100,000",
        validationTerm: "Sila pilih tempoh pinjaman",
        submissionSuccess: "Permohonan dihantar! Mengalih ke WhatsApp untuk menghantar butiran anda."
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
        if (dict[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'SELECT') {
                el.setAttribute('placeholder', dict[key]);
            } else if (el.tagName === 'OPTION') {
                el.textContent = dict[key];
            } else {
                el.innerHTML = dict[key];
            }
        }
    });

    // 更新所有带有 data-lang-key-placeholder 属性的输入框
    document.querySelectorAll('[data-lang-key-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-key-placeholder');
        if (dict[key]) {
            element.setAttribute('placeholder', dict[key]);
        }
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

    return function () {
        const context = this;
        const args = arguments;

        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);

            lastFunc = setTimeout(function () {
                if (Date.now() - lastRan >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

/* ==============================
   表单验证和提交
============================== */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('loanApplicationForm');
    const inputs = form.querySelectorAll('input, select');
    
    // 验证规则
    const validationRules = {
        fullName: {
            required: true,
            message: 'validationRequired'
        },
        phone: {
            required: true,
            pattern: /^[\+]?[0-9\s\-\(\)]{10,}$/,
            message: 'validationPhone'
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'validationEmail'
        },
        loanAmount: {
            required: true,
            min: 5000,
            max: 100000,
            message: 'validationAmount'
        },
        loanTerm: {
            required: true,
            message: 'validationTerm'
        }
    };
    
    // 实时验证
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // 清除错误状态
            clearError(this);
        });
    });
    
    // 表单提交验证
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // 验证所有字段
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            // 滚动到第一个错误字段
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            // 显示加载状态
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.classList.add('loading');
            
            // 延迟提交以显示加载状态
            setTimeout(() => {
                submitForm();
                submitBtn.classList.remove('loading');
            }, 1500);
        }
    });
    
    // 验证单个字段
    function validateField(field) {
        const fieldName = field.name;
        const value = field.value.trim();
        const rules = validationRules[fieldName];
        
        if (!rules) return true;
        
        // 清除之前的错误
        clearError(field);
        
        // 必填验证
        if (rules.required && !value) {
            showError(field, rules.message);
            return false;
        }
        
        // 模式验证
        if (rules.pattern && value && !rules.pattern.test(value)) {
            showError(field, rules.message);
            return false;
        }
        
        // 数值范围验证
        if (field.type === 'number' && value) {
            const numValue = parseFloat(value);
            if (rules.min && numValue < rules.min) {
                showError(field, rules.message);
                return false;
            }
            if (rules.max && numValue > rules.max) {
                showError(field, rules.message);
                return false;
            }
        }
        
        return true;
    }
    
    // 显示错误
    function showError(field, messageKey) {
        field.classList.add('error');
        const errorDiv = field.parentNode.querySelector('.error-message');
        const currentLang = document.documentElement.lang || 'zh';
        errorDiv.textContent = translations[currentLang][messageKey];
    }
    
    // 清除错误
    function clearError(field) {
        field.classList.remove('error');
        const errorDiv = field.parentNode.querySelector('.error-message');
        errorDiv.textContent = '';
    }
    
    // 提交表单到WhatsApp
    function submitForm() {
        const formData = new FormData(form);
        
        // 1. 获取表单数据
        const fullName = formData.get('fullName');
        const phone = formData.get('phone');
        const email = formData.get('email');
        const loanAmount = formData.get('loanAmount');
        const loanTermValue = formData.get('loanTerm');
        // 获取 select 的显示文本
        const loanTermSelect = document.getElementById('loanTerm');
        const loanTerm = loanTermSelect.options[loanTermSelect.selectedIndex].text;
        const loanPurpose = formData.get('loanPurpose');

        // 2. 获取当前语言的提示信息
        const currentLang = document.documentElement.lang || 'zh';
        const alertMsg = translations[currentLang].submissionSuccess;

        // 3. 格式化 WhatsApp 消息
        let message = "--- 新贷款申请 (New Loan Application) ---\n\n";
        message += `姓名 (Name): ${fullName}\n`;
        message += `电话号码 (Phone): ${phone}\n`;
        message += `电子邮件 (Email): ${email}\n`;
        message += `贷款金额 (Amount): ${loanAmount} 元\n`;
        message += `贷款期限 (Term): ${loanTerm}\n`;
        message += `贷款用途 (Purpose): ${loanPurpose || '未填写 (Not specified)'}\n\n`;
        message += "--- 通过网站提交 (Submitted via Website) ---";
        
        // 4. URL 编码
        const encodedMessage = encodeURIComponent(message);
        
        // 5. WhatsApp 号码
        const whatsappNumber = "601136611410"; 
        
        // 6. 构建 WhatsApp 链接
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // 7. 提示用户 (使用翻译后的提示)
        alert(alertMsg);
        
        // 8. 重置表单
        form.reset();
        
        // 9. 在新窗口打开 WhatsApp
        window.open(whatsappURL, '_blank');
    }
});

/* ==============================
   立即申请按钮
============================== */
const applyButtons = document.querySelectorAll(".js-apply-now");

applyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById('apply').scrollIntoView({ behavior: 'smooth' });
    });
});
