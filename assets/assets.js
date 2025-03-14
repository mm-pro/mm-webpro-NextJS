import logo from './mask-face.png'
import arrowRightUp from './arrow-right-up.svg'
import menuIcon from './menu-icon.svg'
import closeBlack from './close-black.svg'
import downloadIcon from './download-icon.svg'
import codeIcon from './code-icon.svg'
import eduIcon from './education-icon.svg'
import projectIcon from './project-icon.svg'
import vscode from './vscode-icon.svg'
import postgresql from './postgresql-icon.svg'
import supabase from './supabase-icon.svg'
import firebase from './firebase-icon.svg'
import mongodb from './mongodb-icon.svg'
import mysql from './mysql-icon.svg'
import postman from './postman-icon.svg'
import figma from './figma-icon.svg'
import git from './git-icon.svg'
import docker from './docker-icon.svg'
import jira from './jira-icon.svg'
import aws from './aws-icon.svg'
import cloudflare from './cloudflare-icon.svg'
import webIcon from './web-icon.svg'
import mobileIcon from './mobile-icon.svg'
import cloudIcon from './cloud-icon.svg'
import apiIcon from './api-icon.svg'
import databaseIcon from './database-icon.svg'
import rightArrow from './right-arrow.svg'
import sendIcon from './send-icon.svg'
import briefCaseIcon from './briefcase-icon.svg'
import typeScriptIcon from './typescript-icon.svg'
import reactIcon from './react-original-icon.svg'
import nextjsIcon from './nextjs-icon.svg'
import vueIcon from './vue-icon.svg'
import nuxtIcon from './nuxt-icon.svg'
import svelteIcon from './svelte-icon.svg'
import nodejsIcon from './nodejs-icon.svg'
import pythonIcon from './python-icon.svg'
import tailwindcssIcon from './tailwindcss-icon.svg'
import emailIcon from './email-white-icon.svg'
import linkedinIcon from './linkedin-black-icon.svg'
import githubIcon from './github-black-icon.svg'
import discordIcon from './discord-black_icon.svg'
import twitterIcon from './twitter-icon.svg'

import profileImage from './profile-image.jpg'
import midasImage from './midas.jpg'
import coffeeShop from './projects/coffeeShop.png'
import coinfarm from './projects/coinfarm.png'
import etekvn from './projects/e-tek-vn.png'
import junglebet from './projects/junglebet.png'
import kaitenji from './projects/kaitenji.png'
import nfinityAI from './projects/nfinityAI.png'
import sound from './projects/sound.png'
import onepass from './projects/onepass.png'
import next from 'next'


 export const assets = { 
    logo,
    arrowRightUp,
    menuIcon,
    closeBlack,
    downloadIcon,
    profileImage,
    midasImage,
      codeIcon,
      eduIcon,
      projectIcon,
      vscode,
      postgresql,
      supabase,
      firebase,
      mongodb,
      mysql,
      postman,
      figma,
      git,
      docker,
      jira,
      aws,
      cloudflare,
      webIcon,
      mobileIcon,
      databaseIcon,
      apiIcon,
      cloudIcon,
      rightArrow,
      sendIcon,
      briefCaseIcon,
      typeScriptIcon,
      reactIcon,
      nextjsIcon,
      vueIcon,
      nuxtIcon,
      svelteIcon,
      nodejsIcon,
      pythonIcon,
      emailIcon,
      githubIcon,
      linkedinIcon,
      discordIcon,
      twitterIcon,
      tailwindcssIcon

 };

 export const workData = [
    {
      title:'Junglebet',
      description:'Front-end Web Development',
      bgImage:junglebet,
      link:'https://junglebet.com/',
    },
    {
      title:'Japanese Learning App',
      description:'Full-Stack Web Development',
      bgImage:kaitenji,
      link:'https://kaitenji.com/',
    },
    {
      title:'Nfinity Studio',
      description:'Front-end Web Development',
      bgImage:nfinityAI,
      link:'https://app.nfinityai.xyz',
    },
    {
      title:'One Pass',
      description:'Front-end Mobile App Development',
      bgImage:onepass,
      link:'https://onepass.com.au/',
    },
    {
      title:'NFT Music Web3 Application',
      description:'Front-end Wep Development',
      bgImage:sound,
      link:'https://www.sound.xyz/',
    },
    {
      title:'Coffee Shop e-commerce Website',
      description:'Shopify Store Development',
      bgImage:coffeeShop,
      link:'https://takecoffeelab.net/',
    },
    {
      title:'Coinfarm',
      description:'Front-end Web Development',
      bgImage:coinfarm,
      link:'https://coinfarm.online',
    },
    {
      title:'Electronic e-commerce Website',
      description:'Front-end Web Development',
      bgImage:etekvn,
      link:'https://e-tek.vn/',
    },
];

 export const serviceData = [
    { icon:assets.webIcon, title:'Web Development', description:"I have strong web development skills, enabling me to build dynamic, high-performance websites and applications using modern technologies and best practices.",},
    { icon:assets.mobileIcon, title:'Mobile App', description:"I am proficient in mobile development, creating intuitive and efficient applications for both iOS and Android platforms that offer seamless user experiences",},
    { icon:assets.apiIcon, title:'API Development and Integration', description:"Creating RESTful or GraphQL APIs to facilitate communication between the front end and back end, as well as integrating third-party APIs.",},
];

  export const careerData = [
    { companyName:"Nfinity Studios",
      icon:briefCaseIcon, 
      role:"Freelancer Front-end Developer", 
      dates:" Feb 2024 - Aug 2024",
      stack:[
        {icon:typeScriptIcon, name:"TypeScript"},
        {icon:svelteIcon, name:"Svelte"},
      ],
      description:(
        <ul>
          <li>
            <p>In this company, as a freelance front-end developer I have contributed super innovative web3 AI Tool Development.</p>
          </li>
          <li>
            <p>I built seamless UI/UX with Svelte. It was freelance contract and worked for about 6 months. The job was super excited for me and this career is a proud of my skill.</p>
          </li>
        </ul>
      )
    },
    { companyName:"Deveron LLC",
      icon:briefCaseIcon, 
      role:"Freelancer Front-end Developer", 
      dates:" Aug 2022 - Jan 2023",
      stack:[
        {icon:typeScriptIcon, name:"TypeScript"},
        {icon:vueIcon, name:"Vue"},
        {icon:nuxtIcon, name:"Nuxt"}
      ],
      description:(
        <ul>
          <li>
            <p>Junglebet is owned by Deveron LLC (Reg. No. 3-102-890136, Av. Pastor Diaz, Jaco, Costa Rica), licensed/regulated by the Autonomous Island of Anjouan, Union of Comoros (Gaming License No. ALSI-062403005-F16), and is legally authorized to conduct gaming operations for games of chance and wagering, having passed all regulatory compliance.</p>
          </li>
          <li>
            <p>I have worked as a freelancer front-end developer, built seamless and modern UI/UX with Nuxt. It was freelance contract and worked for about 7 months. The job was pretty nice for me and this application is a proud of my skill.</p>
          </li>
        </ul>
      )
    },
    { companyName:"BAP Software",
      icon:briefCaseIcon, 
      role:"Full Stack Software Developer", 
      dates:" Mar 2021 - Mar 2022",
      stack:[
        {icon:typeScriptIcon, name:"TypeScript"},
        {icon:reactIcon, name:"React"},
        {icon:nodejsIcon, name:"NodeJS"},
        {icon:pythonIcon, name:"Python"},
        {icon:postgresql, name:"PostgreSQL"}
      ],
      description:(
        <ul>
          <li>
            <p>Established the micro-service for the online software marketing platform using Node.js, making the rapid delivery of software with a resulting 13% revenue increase.</p>
          </li>
          <li>
            <p>Produced a scalable payroll system throughout both front and back-end side using HTML/CSS, JavaScript/Typescript, Python/FastAPI, and React.js/Next.js to effectively
manage employees and reduce company costs by 3%.</p>
          </li>
          <li>
            <p>Reducing response times by 20% using Redis caching for quicker data retrieval. </p>
          </li>
        </ul>
      )
    },
    { companyName:"Luvina JSC",
      icon:briefCaseIcon, 
      role:"Full time Web Developer", 
      dates:" Oct 2017 - Aug 2020",
      stack:[
        {icon:typeScriptIcon, name:"TypeScript"},
        {icon:reactIcon, name:"React"},
        {icon:nextjsIcon, name:"NextJS"},
        {icon:vueIcon, name:"Vue"},
        {icon:svelteIcon, name:"Svelte"},
        {icon:nodejsIcon, name:"NodeJS"},
        {icon:pythonIcon, name:"Python"},
        {icon:postgresql, name:"PostgreSQL"}
      ],
      description:(
        <ul>
          <li>
            <p>As a full time web developer, I have participated in various.
At that time, I learnt lots of tech and especially I have gained lots of experiences in React, Vue, Svelte, Angular, Node.js, Python/Django and Java.
Also I learnt team collaboration, tips of project architecture, implementing high-quality code base etc. 
As a result, I have grown to a full stack developer.</p>
          </li>
        </ul>
      )
    },

  ];
  

 export const infoList = [
    { icon:assets.codeIcon, title:'Languages', description:'HTML, CSS, JS/TS, PHP, Python' },
    { icon:assets.eduIcon, title:'Education', description:'Bachelor of Computer Science' },
    { icon:assets.projectIcon, title:'Projects', description:'Built over 30 projects' },
 ];

 export const toolsData = [
    assets.vscode, assets.postgresql, assets.supabase, assets.firebase, assets.mongodb, assets.mysql, assets.aws, assets.cloudflare, assets.postman, assets.figma, assets.git, assets.docker, assets.jira 
];

