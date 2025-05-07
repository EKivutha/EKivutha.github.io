"use client";

import { } from 'react-icons/fa';
import { } from 'react-icons/si'
import React from 'react'
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';

const about = {
    title: '',
    description: '',
    info: [
        {
            fieldName: 'Experience',
            fieldValue: '12 Years'
        },
        {
            fieldName: 'Email',
            fieldValue: 'mutunjau@gmail.com'
        },
        {
            fieldName: 'Skype',
            fieldValue: '12 Years'
        },
        {
            fieldName: 'Nationality',
            fieldValue: 'Kenyan'
        },
        {
            fieldName: 'Languages',
            fieldValue: 'English'
        },
    ]
}
const experience = {
    title: 'Software Engineer',
    description: '',
    info: [
        {
            company: 'Standard Bank',
            position: 'Developer Operation II',
            duration: '2023-Present',
            responsibilities: "\
            Developed and maintained web applications using React.js, Node.js, and Express to enhance user experience and performance.\
            Collaborated with cross-functional teams to define and implement new features, resulting in a 20% increase in user engagement.\
            Optimized codebase for efficiency, reducing load times by 30% through refactoring and implementing caching strategies.\
            Implemented CI/CD pipelines using Jenkins and Docker, improving deployment frequency and reducing downtime.\
            Conducted code reviews and provided constructive feedback to peers, fostering a culture of continuous improvement.\
            Led a team of junior developers, mentoring them on best practices and contributing to their professional growth."
        },
        {
            company: 'Adanian Labs',
            position: 'Product Owner',
            duration: '2022-2023',
            responsibilities: "\
            Design, develop, and implement blockchain solutions, including smart contracts and decentralized applications (DApps).\
            Collaborate with cross-functional teams to define and document project requirements.\
            Ensure the security and integrity of blockchain systems.\
            Write, test, and deploy smart contracts on various blockchain platforms such as Ethereum, Binance Smart Chain, and others.\
            Audit and optimize existing smart contracts for security and efficiency.\
            Stay updated with the evolving technology landscape and collaborate closely with stakeholders to align blockchain solutions with business goals.\
            "
        },
        {
            company: 'Kibz Tech',
            position: 'Development Lead',
            duration: '2017-Present',
            responsibilities: '\
            Founded and grew InnovativeTech Solutions from a startup to a leading provider of cutting-edge software solutions, generating over $10 million in annual revenue.\
            Spearheaded the development of multiple successful products, including a revolutionary AI-powered analytics platform that significantly improved client decision-making and operational efficiency.\
            Led a diverse team of engineers, designers, and marketers, fostering a collaborative and innovative culture that drove continuous growth and success.\
            Secured Series A funding of $5 million, enabling rapid expansion and scaling of operations.\
            Established strategic partnerships with key industry players, enhancing market presence and driving new business opportunities.\
            Implemented agile methodologies and best practices, optimizing product development cycles and reducing time-to-market by 30%.\
            Mentored and guided junior team members, promoting professional development and ensuring high performance across the organization.\
            Actively engaged with the tech community through speaking engagements, webinars, and industry conferences, positioning the company as a thought leader in the tech space.'
        },
        {
            company: 'Omdena',
            position: 'Data Scientist',
            duration: '2020-Present',
            responsibilities: '\
            Designed and implemented machine learning models to predict customer behavior, leading to a 15% increase in sales and 20% improvement in customer retention.\
            Developed and maintained data pipelines and ETL processes using Python and Apache Spark, ensuring data integrity and availability for analysis.\
            Collaborated with cross-functional teams to understand business requirements and provide data-driven insights, enhancing decision-making processes.\
            Performed exploratory data analysis (EDA) using Pandas, NumPy, and Matplotlib, uncovering actionable insights that drove strategic business initiatives.\
            Deployed predictive models using AWS and Docker, automating workflows and improving operational efficiency.\
            Led data science projects from ideation to implementation, mentoring junior data scientists and fostering a culture of continuous learning and innovation.'
        },
        {
            company: 'Eprod Solutions',
            position: 'Software Engineer',
            duration: '2021-2022',
            responsibilities: "\
            Developed and maintained web applications using React.js, Node.js, and Express to enhance user experience and performance.\
            Collaborated with cross-functional teams to define and implement new features, resulting in a 20% increase in user engagement.\
            Optimized codebase for efficiency, reducing load times by 30% through refactoring and implementing caching strategies.\
            Implemented CI/CD pipelines using Jenkins and Docker, improving deployment frequency and reducing downtime.\
            Conducted code reviews and provided constructive feedback to peers, fostering a culture of continuous improvement.\
            Led a team of junior developers, mentoring them on best practices and contributing to their professional growth."
        },
    ]
}
const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0" >
            <div className="container mx-auto">
                <Tabs defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className='flex flex-col w-full max-w-[300px] mx-auto xl:mx-0'>
                        <TabsTrigger value='experience'>Exprience</TabsTrigger>
                        <TabsTrigger value='education'>Education</TabsTrigger>
                        <TabsTrigger value='skills'>Skills</TabsTrigger>
                        <TabsTrigger value='about'>About Me</TabsTrigger>
                    </TabsList>

                    <div className='min-h-[70vh] w-full'>
                        <TabsContent value='experience' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto'>{experience.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.info.map((item, index) => {
                                            return <li key={index}
                                                className='bg-[#232329] h=[184px] py-6 px-10 rounded-2xl \
                                            flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-xl min-w-[260px] max-h-[60px]\
                                                text-center lg:text-left'>
                                                    {item.position}
                                                </h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-2 h-2 rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.company}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume;
