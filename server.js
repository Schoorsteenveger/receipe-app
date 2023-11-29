const express = require('express');
const app = express();
const port = 3000;

// routes

app.get('/', (req, res) => {
  res.send('Welcome');
})

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`)
});

// // Your job data
// const jobItems = [
//   {
//     "id": 5565436546655690000,
//     "title": "Remote Full-Stack Developer",
//     "badgeLetters": "GK",
//     "company": "Grey Knight",
//     "duration": "Full-Time",
//     "salary": "$150,000+",
//     "location": "Global",
//     "relevanceScore": 5999,
//     "daysAgo": 1,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalgreyknightwebsite.com"
//   },
//   {
//     "id": 9889989867856755000,
//     "title": "Full Stack Developer",
//     "badgeLetters": "SP",
//     "company": "Skill Place",
//     "duration": "Full-Time",
//     "salary": "$90,000+",
//     "location": "Global",
//     "relevanceScore": 4999,
//     "daysAgo": 5,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalskillplacewebsite.com"
//   },
//   {
//     "id": 435243523542435,
//     "title": "Full-Stack Developer",
//     "badgeLetters": "LO",
//     "company": "LakeOperations",
//     "duration": "Full-Time",
//     "salary": "$80,000+",
//     "location": "Global",
//     "relevanceScore": 3999,
//     "daysAgo": 1,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionallakeoperationswebsite.com"
//   },
//   {
//     "id": 898679876973546,
//     "title": "Junior Software Developer",
//     "badgeLetters": "RR",
//     "company": "Rey and Rey",
//     "duration": "Full-Time",
//     "salary": "$95,000+",
//     "location": "Global",
//     "relevanceScore": 3998,
//     "daysAgo": 2,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalreyandreywebsite.com"
//   },
//   {
//     "id": 345634575475476,
//     "title": "Node.js Software Engineer",
//     "badgeLetters": "PT",
//     "company": "PredICT",
//     "duration": "Full-Time",
//     "salary": "$100,000+",
//     "location": "Global",
//     "relevanceScore": 3997,
//     "daysAgo": 4,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalpredICTwebsite.com"
//   },
//   {
//     "id": 990796582354534,
//     "title": "Assistant Web Developer",
//     "badgeLetters": "PS",
//     "company": "Pear & So",
//     "duration": "Full-Time",
//     "salary": "$105,000+",
//     "location": "Global",
//     "relevanceScore": 3996,
//     "daysAgo": 3,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalpear&soswebsite.com"
//   },
//   {
//     "id": 634634363464563500,
//     "title": "Senior Web Developer",
//     "badgeLetters": "VV",
//     "company": "Veri Veri",
//     "duration": "Full-Time",
//     "salary": "$80,000+",
//     "location": "Global",
//     "relevanceScore": 3995,
//     "daysAgo": 4,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalveriveriwebsite.com"
//   },
//   {
//     "id": 96069683624625420,
//     "title": "Front End Web Developer",
//     "badgeLetters": "PC",
//     "company": "Piper Corporate",
//     "duration": "Full-Time",
//     "salary": "$120,000+",
//     "location": "Global",
//     "relevanceScore": 3994,
//     "daysAgo": 5,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalpipercorporatewebsite.com"
//   },
//   {
//     "id": 45665689000765350,
//     "title": "Front End Developer",
//     "badgeLetters": "KS",
//     "company": "KSMA",
//     "duration": "Full-Time",
//     "salary": "$90,000+",
//     "location": "Global",
//     "relevanceScore": 3993,
//     "daysAgo": 1,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalksmawebsite.com"
//   },
//   {
//     "id": 65656655454343586000,
//     "title": "Senior Frontend Developer",
//     "badgeLetters": "PS",
//     "company": "Purple Street",
//     "duration": "Full-Time",
//     "salary": "$85,000+",
//     "location": "Global",
//     "relevanceScore": 3992,
//     "daysAgo": 1,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalpurplestreetwebsite.com"
//   },
//   {
//     "id": 5565565652345245,
//     "title": "JS Developer",
//     "badgeLetters": "VN",
//     "company": "Verso Networks",
//     "duration": "Full-Time",
//     "salary": "$80,000+",
//     "location": "Global",
//     "relevanceScore": 3991,
//     "daysAgo": 2,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalversonetworkswebsite.com"
//   },
//   {
//     "id": 4523452345234235400,
//     "title": "Full-Stack Web Developer",
//     "badgeLetters": "CA",
//     "company": "Codigo Amigo",
//     "duration": "Full-Time",
//     "salary": "$80,000+",
//     "location": "Global",
//     "relevanceScore": 3990,
//     "daysAgo": 3,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalcodigoamigowebsite.com"
//   },
//   {
//     "id": 23542345745674570,
//     "title": "Front-End Developer",
//     "badgeLetters": "CH",
//     "company": "ComputerHaver",
//     "duration": "Full-Time",
//     "salary": "$85,000+",
//     "location": "Global",
//     "relevanceScore": 2999,
//     "daysAgo": 1,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalcomputerhaverwebsite.com",
//     "badgeBgColor": "#3d87f1"
//   },
//   {
//     "id": 68968756834563464,
//     "title": "Software Developer",
//     "badgeLetters": "CS",
//     "company": "CapSoft",
//     "duration": "Full-Time",
//     "salary": "$100,000+",
//     "location": "Global",
//     "relevanceScore": 2998,
//     "daysAgo": 1,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalcapsoftwebsite.com"
//   },
//   {
//     "id": 32412342141234,
//     "title": "JavaScript Developer",
//     "badgeLetters": "NO",
//     "company": "NewOperator",
//     "duration": "Full-Time",
//     "salary": "$75,000+",
//     "location": "Global",
//     "relevanceScore": 2997,
//     "daysAgo": 2,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalnewoperatorwebsite.com"
//   },
//   {
//     "id": 123445787932452350,
//     "title": "Front End/UI Developer",
//     "badgeLetters": "PT",
//     "company": "PluralTech",
//     "duration": "Full-Time",
//     "salary": "$90,000+",
//     "location": "Global",
//     "relevanceScore": 2996,
//     "daysAgo": 4,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalpluraltechwebsite.com"
//   },
//   {
//     "id": 76876887834563460,
//     "title": "Full-Stack Developer",
//     "badgeLetters": "VI",
//     "company": "Venca Inc.",
//     "duration": "Full-Time",
//     "salary": "$90,000+",
//     "location": "Global",
//     "relevanceScore": 2995,
//     "daysAgo": 2,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalvencaincwebsite.com"
//   },
//   {
//     "id": 5565534645643622000,
//     "title": "Remote Front-End Developer",
//     "badgeLetters": "AE",
//     "company": "As Exus",
//     "duration": "Full-Time",
//     "salary": "$90,000+",
//     "location": "Global",
//     "relevanceScore": 2994,
//     "daysAgo": 3,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalasexuswebsite.com"
//   },
//   {
//     "id": 967898776967865,
//     "title": "Front End Developer",
//     "badgeLetters": "PS",
//     "company": "Paytron Systems",
//     "duration": "Full-Time",
//     "salary": "$88,000+",
//     "location": "Global",
//     "relevanceScore": 2993,
//     "daysAgo": 2,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalpaytronsystemswebsite.com"
//   },
//   {
//     "id": 76767654674567460000,
//     "title": "Full Stack Remote",
//     "badgeLetters": "UH",
//     "company": "UAB Health",
//     "duration": "Full-Time",
//     "salary": "$85,000+",
//     "location": "Global",
//     "relevanceScore": 2992,
//     "daysAgo": 3,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionaluabhealthwebsite.com"
//   },
//   {
//     "id": 545555623245,
//     "title": "Frontend Developer",
//     "badgeLetters": "SO",
//     "company": "StudyOpen",
//     "duration": "Full-Time",
//     "salary": "$85,000+",
//     "location": "Global",
//     "relevanceScore": 2991,
//     "daysAgo": 1,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalstudyopenwebsite.com"
//   },
//   {
//     "id": 989069067867654800,
//     "title": "Entry-Level Developer",
//     "badgeLetters": "IN",
//     "company": "Intune Networks",
//     "duration": "Full-Time",
//     "salary": "$90,000+",
//     "location": "Global",
//     "relevanceScore": 2990,
//     "daysAgo": 1,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalintunenetworkswebsite.com"
//   },
//   {
//     "id": 456456223451231200000,
//     "title": "Full-Stack Developer",
//     "badgeLetters": "MA",
//     "company": "Margot Agency",
//     "duration": "Full-Time",
//     "salary": "$115,000+",
//     "location": "Global",
//     "relevanceScore": 2989,
//     "daysAgo": 3,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalmargotagencywebsite.com"
//   },
//   {
//     "id": 86586586578324520000,
//     "title": "Node Developer",
//     "badgeLetters": "IT",
//     "company": "Ivee Tech",
//     "duration": "Full-Time",
//     "salary": "$90,000+",
//     "location": "Global",
//     "relevanceScore": 2988,
//     "daysAgo": 2,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionaliveetechwebsite.com"
//   },
//   {
//     "id": 6546436634563464000,
//     "title": "Full-Stack Developer",
//     "badgeLetters": "ZR",
//     "company": "Zyme Research",
//     "duration": "Full-Time",
//     "salary": "$90,000+",
//     "location": "Global",
//     "relevanceScore": 2987,
//     "daysAgo": 3,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalzymeresearchwebsite.com"
//   },
//   {
//     "id": 23532411423675764,
//     "title": "Full-Stack Engineer",
//     "badgeLetters": "H9",
//     "company": "Hire99",
//     "duration": "Full-Time",
//     "salary": "$80,000+",
//     "location": "Global",
//     "relevanceScore": 2986,
//     "daysAgo": 2,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalhire99website.com"
//   },
//   {
//     "id": 4564566555,
//     "title": "Front-End Developer",
//     "badgeLetters": "OD",
//     "company": "Out Debt",
//     "duration": "Full-Time",
//     "salary": "$95,000+",
//     "location": "Global",
//     "relevanceScore": 2985,
//     "daysAgo": 3,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionaloutdebtwebsite.com"
//   },
//   {
//     "id": 565556437548678300,
//     "title": "Remote Full Stack Developer",
//     "badgeLetters": "LS",
//     "company": "Lockshelf System",
//     "duration": "Full-Time",
//     "salary": "$80,000+",
//     "location": "Global",
//     "relevanceScore": 2984,
//     "daysAgo": 3,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionallockshelfsystemwebsite.com"
//   },
//   {
//     "id": 35454334545467880000,
//     "title": "Full-Stack Developer",
//     "badgeLetters": "AW",
//     "company": "AIWare",
//     "duration": "Full-Time",
//     "salary": "$85,000+",
//     "location": "Global",
//     "relevanceScore": 1999,
//     "daysAgo": 3,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalaiwarewebsite.com"
//   },
//   {
//     "id": 5553645680007895,
//     "title": "Frontend Developer - React",
//     "badgeLetters": "AS",
//     "company": "AT Security",
//     "duration": "Full-Time",
//     "salary": "$85,000+",
//     "location": "Global",
//     "relevanceScore": 1998,
//     "daysAgo": 4,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalatsecuritywebsite.com"
//   },
//   {
//     "id": 11312545454587,
//     "title": "Junior Software Developer",
//     "badgeLetters": "AT",
//     "company": "Aspen Tech",
//     "duration": "Full-Time",
//     "salary": "$90,000+",
//     "location": "Global",
//     "relevanceScore": 1997,
//     "daysAgo": 4,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalaspentechwebsite.com"
//   },
//   {
//     "id": 7766762343452355000,
//     "title": "Front End Web Developer",
//     "badgeLetters": "TI",
//     "company": "Tech Intelligence",
//     "duration": "Full-Time",
//     "salary": "$80,000+",
//     "location": "Global",
//     "relevanceScore": 1996,
//     "daysAgo": 2,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionaltechintelligencewebsite.com"
//   },
//   {
//     "id": 444352435253478800,
//     "title": "Back-End Developer",
//     "badgeLetters": "SE",
//     "company": "Sense Enterprises",
//     "duration": "Full-Time",
//     "salary": "$82,000+",
//     "location": "Global",
//     "relevanceScore": 1995,
//     "daysAgo": 3,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalsenseenterpriseswebsite.com"
//   },
//   {
//     "id": 65436513221353250,
//     "title": "Back End Web Developer",
//     "badgeLetters": "ES",
//     "company": "Epsilon Services",
//     "duration": "Full-Time",
//     "salary": "$97,000+",
//     "location": "Global",
//     "relevanceScore": 1994,
//     "daysAgo": 5,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalepsilonserviceswebsite.com"
//   },
//   {
//     "id": 32545344324444230,
//     "title": "Jr. Back-End Developer",
//     "badgeLetters": "VS",
//     "company": "Veritech Solutions",
//     "duration": "Full-Time",
//     "salary": "$92,000+",
//     "location": "Global",
//     "relevanceScore": 1993,
//     "daysAgo": 3,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalveritechsolutionswebsite.com"
//   },
//   {
//     "id": 5424355454545533,
//     "title": "Software Engineer",
//     "badgeLetters": "OL",
//     "company": "Octu Labs",
//     "duration": "Full-Time",
//     "salary": "$90,000+",
//     "location": "Global",
//     "relevanceScore": 1992,
//     "daysAgo": 1,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionaloctulabswebsite.com"
//   },
//   {
//     "id": 21143532463576656,
//     "title": "Full-Stack Web Dev",
//     "badgeLetters": "OT",
//     "company": "Outside Tech",
//     "duration": "Full-Time",
//     "salary": "$80,000+",
//     "location": "Global",
//     "relevanceScore": 1991,
//     "daysAgo": 2,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionaloutsidetechwebsite.com"
//   },
//   {
//     "id": 64565511231243784,
//     "title": "Jr. Back-End Developer",
//     "badgeLetters": "OH",
//     "company": "O-Haul",
//     "duration": "Full-Time",
//     "salary": "$90,000+",
//     "location": "Global",
//     "relevanceScore": 1990,
//     "daysAgo": 4,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalohaulwebsite.com"
//   },
//   {
//     "id": 5436456788787875,
//     "title": "Back-End Developer",
//     "badgeLetters": "S",
//     "company": "Scalers",
//     "duration": "Full-Time",
//     "salary": "$90,000+",
//     "location": "Global",
//     "relevanceScore": 1989,
//     "daysAgo": 3,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalscalerswebsite.com"
//   },
//   {
//     "id": 3244453245234544600,
//     "title": "Software Engineer",
//     "badgeLetters": "WT",
//     "company": "Warner Table",
//     "duration": "Full-Time",
//     "salary": "$110,000+",
//     "location": "Global",
//     "relevanceScore": 1988,
//     "daysAgo": 3,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalwarnertablewebsite.com"
//   },
//   {
//     "id": 66533214131242140000,
//     "title": "JS Full-Stack Dev.",
//     "badgeLetters": "CD",
//     "company": "Cadeen Design",
//     "duration": "Full-Time",
//     "salary": "$98,000+",
//     "location": "Global",
//     "relevanceScore": 1987,
//     "daysAgo": 4,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalcadeendesignwebsite.com"
//   },
//   {
//     "id": 111436589999857660,
//     "title": "Software Developer",
//     "badgeLetters": "SN",
//     "company": "Schneider Network",
//     "duration": "Full-Time",
//     "salary": "$75,000+",
//     "location": "Global",
//     "relevanceScore": 1986,
//     "daysAgo": 4,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalschneidernetworkwebsite.com"
//   },
//   {
//     "id": 653656455525325000000,
//     "title": "Full Stack Developer",
//     "badgeLetters": "PF",
//     "company": "Principal Finance",
//     "duration": "Full-Time",
//     "salary": "$95,000+",
//     "location": "Global",
//     "relevanceScore": 1985,
//     "daysAgo": 2,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalprincipalfinancewebsite.com"
//   },
//   {
//     "id": 588798657345634700,
//     "title": "Full-Stack Web Developer",
//     "badgeLetters": "PM",
//     "company": "Palm Media",
//     "duration": "Full-Time",
//     "salary": "$150,000+",
//     "location": "Global",
//     "relevanceScore": 1984,
//     "daysAgo": 1,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalpalmmediawebsite.com"
//   },
//   {
//     "id": 134531333300996980,
//     "title": "JS Developer (Front-End)",
//     "badgeLetters": "OT",
//     "company": "Origami Tech",
//     "duration": "Full-Time",
//     "salary": "$80,000+",
//     "location": "Global",
//     "relevanceScore": 1983,
//     "daysAgo": 4,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalorigamitechwebsite.com"
//   },
//   {
//     "id": 243554334565360900000,
//     "title": "Developer (eCommerce)",
//     "badgeLetters": "IC",
//     "company": "Intersystem Center",
//     "duration": "Full-Time",
//     "salary": "$100,000+",
//     "location": "Global",
//     "relevanceScore": 1982,
//     "daysAgo": 1,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalintersystemcenterwebsite.com"
//   },
//   {
//     "id": 1123412341634563,
//     "title": "Front End React Engineer",
//     "badgeLetters": "9T",
//     "company": "9th Tech",
//     "duration": "Full-Time",
//     "salary": "$105,000+",
//     "location": "Global",
//     "relevanceScore": -1,
//     "daysAgo": 2,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictional9thtechwebsite.com"
//   },
//   {
//     "id": 77667576576677,
//     "title": "Full Stack Engineer",
//     "badgeLetters": "HS",
//     "company": "HO Software",
//     "duration": "Full-Time",
//     "salary": "$100,000+",
//     "location": "Global",
//     "relevanceScore": -2,
//     "daysAgo": 1,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalhosoftwarewebsite.com"
//   },
//   {
//     "id": 77767676356565660,
//     "title": "Full-Stack Web Engineer",
//     "badgeLetters": "VT",
//     "company": "Vision Tower",
//     "duration": "Full-Time",
//     "salary": "$95,000+",
//     "location": "Global",
//     "relevanceScore": -3,
//     "daysAgo": 2,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalvisiontowerwebsite.com"
//   },
//   {
//     "id": 9967898989857690,
//     "title": "Full-Stack JavaScript",
//     "badgeLetters": "TP",
//     "company": "The Technology Paper",
//     "duration": "Full-Time",
//     "salary": "$100,000+",
//     "location": "Global",
//     "relevanceScore": -4,
//     "daysAgo": 3,
//     "coverImgURL": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100",
//     "companyURL": "https://fictionalthetechnologypaperwebsite.com"
//   }
// ]

// // Define a route to get all jobs
// app.get('/jobs', (req, res) => {
//   res.json(jobItems);
// });

// // Define a route to get a specific job by ID
// app.get('/jobs/:id', (req, res) => {
//   const jobId = req.params.id;
//   const job = jobItems.find((item) => item.id === Number(jobId));

//   if (job) {
//     res.json(job);
//   } else {
//     res.status(404).json({ error: 'Job not found' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Janous Server is running at http://localhost:${port}`);
// });
