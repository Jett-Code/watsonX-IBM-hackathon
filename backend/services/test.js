export const generateText = async () => {
    const url = "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29";
    const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_ACCESS_TOKEN"
    };
    const body = {
    input: "Rank the emails with importance of the given profile.\nMake sure to add adequete details while summarizing them like names and dates\n\nInput: Emails with a profile These are a CEO'\''s emails:\n\nFrom: Sarah Lewis sarah.lewis@company.com\nSubject: Upcoming Board Meeting Agenda\nDate: 2024-08-24 16:10:00\nPlain Text Content:\nDear [CEO'\''s Name],\n\nThis is to confirm the agenda for our upcoming board meeting scheduled for August 30th. Please review the attached document for a detailed breakdown of topics to be discussed.\n\nAgenda Highlights:\n\nQ2 Financial Overview\nStrategic Plan Review\nNew Project Proposals\nIf there are additional items you wish to include or changes needed, please let me know by August 27th.\n\nThank you,\n\nSarah Lewis\nExecutive Assistant\n\nFrom: John Miller john.miller@company.com\nSubject: Important Compliance Update\nDate: 2024-08-24 16:05:00\nPlain Text Content:\nDear [CEO'\''s Name],\n\nPlease be informed of the recent compliance updates regarding our industry regulations. Attached is a summary of the changes that will impact our operations.\n\nKey Points:\n\nNew reporting requirements starting September 1st\nUpdated guidelines for data protection\nEnsure that relevant departments are briefed accordingly.\n\nBest regards,\n\nJohn Miller\nCompliance Officer\n\nFrom: Emily Wong emily.wong@company.com\nSubject: Critical System Maintenance Scheduled for August 28th\nDate: 2024-08-24 15:55:00\nPlain Text Content:\nDear [CEO'\''s Name],\n\nThis is a reminder about the scheduled maintenance for our IT systems on August 28th from 2:00 PM to 6:00 PM. This maintenance is necessary to enhance security and system performance.\n\nImpact:\n\nTemporary access issues to internal systems\nExpected downtime of approximately 4 hours\nWe apologize for any inconvenience this may cause and will keep you updated on the progress.\n\nThank you for your understanding,\n\nEmily Wong\nIT Department\n\nFrom: Michael Johnson michael.johnson@company.com\nSubject: Proposal for New Marketing Campaign\nDate: 2024-08-24 15:45:00\nPlain Text Content:\nDear [CEO'\''s Name],\n\nAttached is the proposal for the new marketing campaign we plan to launch in Q4. It includes the campaign objectives, target audience, and projected budget.\n\nHighlights:\n\nInnovative strategies for market penetration\nExpected ROI and key performance indicators\nPlease review the proposal and provide your feedback by August 30th.\n\nBest regards,\n\nMichael Johnson\nMarketing Director\n\nFrom: Laura Green laura.green@company.com\nSubject: Employee Engagement Survey Results\nDate: 2024-08-24 15:30:00\nPlain Text Content:\nDear [CEO'\''s Name],\n\nI’m pleased to share the results of the recent employee engagement survey. The findings highlight areas of success and opportunities for improvement.\n\nKey Insights:\n\nHigh levels of satisfaction with management\nAreas identified for additional focus\nThe full report is attached for your review.\n\nBest regards,\n\nLaura Green\nHR Manager\n\nFrom: Lisa Carter lisa.carter@company.com\nSubject: Fun Fact of the Day: Did You Know?\nDate: 2024-08-24 16:00:00\nPlain Text Content:\nHi [CEO'\''s Name],\n\nHere’s a fun fact to brighten your day: Did you know that the shortest war in history lasted only 38 minutes? Just thought you might find that interesting!\n\nBest,\n\nLisa Carter\nOffice Humorist\n\nFrom: Ben Clark ben.clark@company.com\nSubject: Office Desk Organization Tips\nDate: 2024-08-24 15:50:00\nPlain Text Content:\nHi [CEO'\''s Name],\n\nHere are some tips for organizing your desk:\n\nKeep only essential items on your desk.\nUse desk organizers to manage papers and supplies.\nRegularly declutter to maintain a clean workspace.\nHope you find these tips helpful!\n\nBest,\n\nBen Clark\nOffice Organizer\n\nFrom: Rachel Adams rachel.adams@company.com\nSubject: Upcoming Weekend Weather Forecast\nDate: 2024-08-24 15:40:00\nPlain Text Content:\nHi [CEO'\''s Name],\n\nJust a quick update on the weekend weather forecast:\n\nSaturday: Sunny with a high of 75°F\nSunday: Partly cloudy with a high of 73°F\nHope you have a great weekend!\n\nBest,\n\nRachel Adams\nWeather Enthusiast\n\nFrom: David Lee david.lee@company.com\nSubject: Trivia Quiz: What’s Your IQ?\nDate: 2024-08-24 15:25:00\nPlain Text Content:\nHi [CEO'\''s Name],\n\nWe’ve created a fun trivia quiz to test your IQ! It’s just for fun and won’t affect your work performance.\n\nHere’s the link to take the quiz: Trivia Quiz Link\n\nEnjoy!\n\nBest,\n\nDavid Lee\nTrivia Specialist\n\nFrom: Jenny White jenny.white@company.com\nSubject: Recommended Playlist for Work\nDate: 2024-08-24 15:15:00\nPlain Text Content:\nHi [CEO'\''s Name],\n\nHere’s a playlist of relaxing music to help you focus while working. It includes a mix of instrumental tracks and soft tunes.\n\nPlaylist Link: Music Playlist\n\nEnjoy the music!\n\nBest,\n\nJenny White\nMusic Curator\n\nGive me important emails with ranks and make sure to highlight important deadlines from the given input email only. DO NOT give replies to these emails after summarizing. Dont take any input from the examples. Summarize them with some details Top Important Mails:\n1. Agenda for board meeting on August 30th.\n2. New compliance regulations summary.\n3. Marketing campaign proposal due for feedback by August 30th.\n4. Results of the employee engagement survey.\n\nDeadlines and Action Required Mails:\n1. IT maintenance scheduled with expected downtime.\n2. Add missing elective by Friday 5:00 PM.\n3. Revise and resubmit paper with missing references by tomorrow 5:00 PM.\n\nInvitations to Events:\nNo Invitation\n\nThank You\n\nInput: Emails with a profile These are a Student'\''s emails:\n\nFrom: Professor Adams professor.adams@college.edu\nSubject: Midterm Exam Schedule\nDate: 2024-08-24 10:00:00\nPlain Text Content:\nDear [Student'\''s Name],\n\nThis is to inform you about the midterm exam schedule for this semester. Please find the details below:\n\nMath 101: September 5th, 10:00 AM - 12:00 PM\nHistory 202: September 7th, 2:00 PM - 4:00 PM\nBiology 303: September 10th, 9:00 AM - 11:00 AM\nEnsure you are prepared and review the topics listed in the syllabus.\n\nBest regards,\nProfessor Adams\n\nFrom: Campus Health Services campus.health@college.edu\nSubject: Flu Shot Clinics Starting Next Week\nDate: 2024-08-24 09:30:00\nPlain Text Content:\nDear [Student'\''s Name],\n\nFlu shot clinics will be available on campus starting next week. The schedule is as follows:\n\nAugust 27th: 10:00 AM - 2:00 PM\nAugust 29th: 1:00 PM - 5:00 PM\nLocation: Student Health Center\n\nPlease visit during these times to get vaccinated.\n\nBest,\nCampus Health Services\n\nFrom: Student Activities Office activities@college.edu\nSubject: Welcome Back BBQ This Friday\nDate: 2024-08-24 11:00:00\nPlain Text Content:\nHi [Student'\''s Name],\n\nWe’re excited to welcome you back with a BBQ this Friday at 5:00 PM on the main quad. Come join us for food, games, and a chance to meet other students!\n\nSee you there!\nStudent Activities Office\n\nFrom: Academic Advisor advisor@college.edu\nSubject: Advising Appointment Confirmation\nDate: 2024-08-24 12:00:00\nPlain Text Content:\nDear [Student'\''s Name],\n\nYour advising appointment is confirmed for August 26th at 3:00 PM. We’ll discuss your course selection and academic progress.\n\nPlease bring any questions or documents needed for your review.\n\nBest regards,\nAcademic Advisor\n\nFrom: Library Services library@college.edu\nSubject: New Study Rooms Reservation System\nDate: 2024-08-24 08:00:00\nPlain Text Content:\nHi [Student'\''s Name],\n\nWe’ve implemented a new reservation system for study rooms. You can now book rooms online through our website.\n\nFor more details, visit the library website or contact us.\n\nBest,\nLibrary Services\n\nFrom: Jane Miller jane.miller@college.edu\nSubject: Group Project Meeting\nDate: 2024-08-24 14:00:00\nPlain Text Content:\nHi [Student'\''s Name],\n\nOur group project meeting is scheduled for August 28th at 2:00 PM in the student lounge. Please bring your research and any updates.\n\nLooking forward to it!\nJane Miller\n\nFrom: Campus Security security@college.edu\nSubject: Campus Safety Tips\nDate: 2024-08-24 13:00:00\nPlain Text Content:\nDear Students,\n\nHere are some important campus safety tips:\n\nAlways lock your dorm room.\nReport any suspicious activity immediately.\nUse the buddy system when walking at night.\nStay safe,\nCampus Security\n\nFrom: Sarah Smith sarah.smith@college.edu\nSubject: Yoga Class Schedule\nDate: 2024-08-24 15:00:00\nPlain Text Content:\nHi [Student'\''s Name],\n\nYoga classes will be held every Tuesday and Thursday at 6:00 PM in the wellness center. First class is free!\n\nHope to see you there,\nSarah Smith\n\nFrom: Dining Services dining@college.edu\nSubject: New Dining Hall Hours\nDate: 2024-08-24 16:00:00\nPlain Text Content:\nDear Students,\n\nThe dining hall hours have changed for this semester:\n\nBreakfast: 7:00 AM - 10:00 AM\nLunch: 11:00 AM - 2:00 PM\nDinner: 5:00 PM - 8:00 PM\nWe look forward to serving you!\n\nBest,\nDining Services\n\nFrom: Tech Support techsupport@college.edu\nSubject: Internet Outage Notification\nDate: 2024-08-24 17:00:00\nPlain Text Content:\nHi [Student'\''s Name],\n\nThere will be a scheduled internet outage on August 29th from 11:00 PM to 1:00 AM for system maintenance. Please plan accordingly.\n\nThank you for your patience,\nTech Support\n\n\nGive me important emails with ranks and make sure to highlight important deadlines from the given input email only. DO NOT give replies to these emails after summarizing. Dont take any input from the examples. Summarize them with some details Top Important Mails:\n1. Midterm exam schedule.\n2. Advising appointment confirmation.\n3. New study rooms reservation system.\n4. Internet outage notification.\n\nDeadlines and Action Required Mails:\n1. Flu shot clinic dates.\n2. Group project meeting on August 28th.\n3. Review of campus safety tips.\n\nInvitations to Events:\n1. Welcome Back BBQ on August 30th.\n2. Yoga class schedule.\n\nThank You\n\n\nInput: Emails with a profile These are a doctor'\''s emails:\n\nFrom: Dr. Alice Roberts alice.roberts@clinic.com\nSubject: Urgent: Critical Patient Report for Review\nDate: 2024-08-24 16:15:00\nPlain Text Content:\nDear Dr. [Doctor'\''s Name],\n\nPlease review the attached critical patient report for immediate attention. The report concerns Patient John Doe, who has shown severe symptoms that require urgent intervention.\n\nKey Details:\n\nPatient Name: John Doe\nSymptoms: Severe abdominal pain, high fever\nRecommended Action: Immediate diagnostic tests and treatment\nBest regards,\nAlice Roberts\nChief Medical Officer\n\nFrom: Dr. Brian Carter brian.carter@hospital.com\nSubject: Reminder: Staff Meeting on September 2nd\nDate: 2024-08-24 16:05:00\nPlain Text Content:\nDear Dr. [Doctor'\''s Name],\n\nThis is a reminder about our upcoming staff meeting scheduled for September 2nd at 10:00 AM. The agenda includes updates on departmental protocols and upcoming training sessions.\n\nAgenda Highlights:\n\nReview of new protocols\nTraining schedule for new equipment\nOpen Q&A session\nPlease confirm your attendance.\n\nThank you,\nBrian Carter\nDepartment Head\n\nFrom: Dr. Claire Evans claire.evans@clinic.com\nSubject: Important Update: New Patient Management System\nDate: 2024-08-24 16:00:00\nPlain Text Content:\nDear Dr. [Doctor'\''s Name],\n\nPlease be informed about the new patient management system being implemented starting August 30th. Attached is a guide to help you transition smoothly.\n\nKey Updates:\n\nNew features and interface\nTraining sessions scheduled for August 28th and 29th\nSupport contact information\nBest regards,\nClaire Evans\nIT Coordinator\n\nFrom: Dr. David White david.white@hospital.com\nSubject: Follow-Up Required: Patient Test Results\nDate: 2024-08-24 15:55:00\nPlain Text Content:\nDear Dr. [Doctor'\''s Name],\n\nAttached are the test results for Patient Emily Smith. The results indicate abnormal findings that need further investigation.\n\nDetails:\n\nTest: Blood work\nAbnormal Findings: Elevated liver enzymes\nRecommended Follow-Up: Further imaging and consultation\nBest regards,\nDavid White\nLaboratory Manager\n\nFrom: Dr. Fiona Green fiona.green@clinic.com\nSubject: New Clinic Policy on Telemedicine\nDate: 2024-08-24 15:45:00\nPlain Text Content:\nDear Dr. [Doctor'\''s Name],\n\nWe have updated our clinic policy regarding telemedicine services. Please review the attached document for the latest guidelines and procedures.\n\nKey Points:\n\nProcedures for virtual consultations\nPatient privacy and data security\nTraining requirements\nThank you,\nFiona Green\nPolicy Administrator\n\nFrom: Dr. Helen Clark helen.clark@hospital.com\nSubject: Invitation: Community Health Fair\nDate: 2024-08-24 15:30:00\nPlain Text Content:\nDear Dr. [Doctor'\''s Name],\n\nWe are hosting a community health fair on September 10th and would like you to participate. The fair will include free health screenings and educational talks.\n\nEvent Details:\n\nDate: September 10th\nTime: 10:00 AM to 4:00 PM\nLocation: Central Park\nPlease confirm your availability and any specific services you would like to provide.\n\nBest regards,\nHelen Clark\nEvent Coordinator\n\nFrom: Dr. Isaac Miller isaac.miller@clinic.com\nSubject: Urgent: Patient Follow-Up Needed\nDate: 2024-08-24 15:15:00\nPlain Text Content:\nDear Dr. [Doctor'\''s Name],\n\nPatient Mark Johnson requires urgent follow-up due to complications from his recent surgery. Attached are his recent updates and recommended actions.\n\nDetails:\n\nPatient Name: Mark Johnson\nComplications: Infection at the surgical site\nRecommended Follow-Up: Immediate consultation and possible revision surgery\nBest regards,\nIsaac Miller\nPatient Coordinator\n\nFrom: Dr. Julia Adams julia.adams@hospital.com\nSubject: Feedback Request: Recent Staff Training\nDate: 2024-08-24 15:05:00\nPlain Text Content:\nHi Dr. [Doctor'\''s Name],\n\nPlease provide feedback on the recent staff training session held on August 22nd. Your insights will help us improve future sessions.\n\nFeedback Focus:\n\nTraining content\nInstructor effectiveness\nOverall session organization\nThank you,\nJulia Adams\nTraining Coordinator\n\nFrom: Dr. Kevin Lee kevin.lee@clinic.com\nSubject: Upcoming Health Seminar on Diabetes\nDate: 2024-08-24 14:55:00\nPlain Text Content:\nDear Dr. [Doctor'\''s Name],\n\nWe are organizing a health seminar focused on diabetes management on September 5th. We would be delighted if you could attend and share your expertise.\n\nSeminar Details:\n\nDate: September 5th\nTime: 1:00 PM to 3:00 PM\nLocation: Conference Room B\nPlease let us know if you are available.\n\nBest regards,\nKevin Lee\nSeminar Coordinator\n\nFrom: Dr. Lisa Carter lisa.carter@hospital.com\nSubject: Fun Fact of the Day: Did You Know?\nDate: 2024-08-24 14:45:00\nPlain Text Content:\nHi Dr. [Doctor'\''s Name],\n\nHere’s a fun fact to lighten your day: Did you know that the human body contains about 37.2 trillion cells? Thought you might find that interesting!\n\nBest,\nLisa Carter\nOffice Humorist\n\nFrom: Dr. Mark Thompson mark.thompson@clinic.com\nSubject: Office Desk Organization Tips\nDate: 2024-08-24 14:35:00\nPlain Text Content:\nHi Dr. [Doctor'\''s Name],\n\nHere are some tips for organizing your office desk:\n\nKeep only essential items visible\nUse organizers for documents and supplies\nRegularly declutter to maintain a clean workspace\nHope these tips help!\n\nBest,\nMark Thompson\nOffice Organizer\n\n\nGive me important emails with ranks and make sure to highlight important deadlines from the given input email only. DO NOT give replies to these emails after summarizing. Dont take any input from the examples. Summarize them with some details Top Important Mails:\n1. Urgent patient report for John Doe.\n2. Follow-up required for Patient Emily Smith.\n3. Urgent follow-up needed for Patient Mark Johnson.\n\nDeadlines and Action Required Mails:\n1. Staff meeting reminder on September 2nd.\n2. Feedback requested on patient management system.\n3. Review and familiarize with new telemedicine policy.\n\nInvitations to Events:\n1. Community health fair participation on September 10th.\n2. Health seminar on diabetes management on September 5th.\n\nAdditional Notes:\n1. Update on clinic policy regarding telemedicine.\n2. Feedback request on recent staff training.\n\nThank You\n\n\n\nInput: Emails with a profile These are a hiring manager'\''s emails:\n\nFrom: Brian Lee brian.lee@company.com\nSubject: New HR Policy Update\nDate: 2024-08-24 16:05:00\nPlain Text Content:\nDear [Hiring Manager’s Name],\n\nWe have updated the HR policies regarding remote work and employee benefits. The updated policy document is attached for your review.\n\nKey Changes:\n\nRevised remote work guidelines\nUpdated benefits package details\nPlease ensure that these changes are communicated to your team.\n\nBest regards,\n\nBrian Lee\nHR Specialist\n\nFrom: Sarah Johnson sarah.johnson@company.com\nSubject: Candidate Reference Check\nDate: 2024-08-24 15:55:00\nPlain Text Content:\nDear [Hiring Manager’s Name],\n\nWe need to complete the reference check for the candidate, Tom Brown, who interviewed for the Marketing Manager role. Please provide your feedback on the references by August 26th.\n\nThank you,\n\nSarah Johnson\nRecruitment Associate\n\nFrom: David Kim david.kim@company.com\nSubject: Job Offer Letter for Alex Martinez\nDate: 2024-08-24 15:45:00\nPlain Text Content:\nDear [Hiring Manager’s Name],\n\nAttached is the job offer letter for Alex Martinez, who has accepted the offer for the Sales Executive position. Please review and approve the letter before it is sent to the candidate.\n\nBest regards,\n\nDavid Kim\nHR Manager\n\nFrom: Emily Clark emily.clark@company.com\nSubject: Team Building Event Details\nDate: 2024-08-24 15:30:00\nPlain Text Content:\nDear [Hiring Manager’s Name],\n\nOur next team-building event is scheduled for September 5th. Details are included in the attached document. Please ensure your team is aware and prepared for the event.\n\nThank you,\n\nEmily Clark\nEvent Coordinator\n\nFrom: Jessica Brown jessica.brown@company.com\nSubject: Interview Feedback Form\nDate: 2024-08-24 15:20:00\nPlain Text Content:\nDear [Hiring Manager’s Name],\n\nPlease complete the attached interview feedback form for the recent candidates who interviewed for the Product Manager position. Your input is crucial for the final decision.\n\nBest regards,\n\nJessica Brown\nRecruitment Support\n\nFrom: Michael Davis michael.davis@company.com\nSubject: Upcoming Career Fair Participation\nDate: 2024-08-24 15:10:00\nPlain Text Content:\nDear [Hiring Manager’s Name],\n\nWe will be participating in the upcoming career fair on September 10th. Please confirm your availability to represent the company at the event.\n\nBest,\n\nMichael Davis\nRecruitment Events Coordinator\n\nFrom: Laura Wilson laura.wilson@company.com\nSubject: New Job Opening for HR Assistant\nDate: 2024-08-24 15:00:00\nPlain Text Content:\nDear [Hiring Manager’s Name],\n\nWe have a new job opening for an HR Assistant. Please review the attached job description and provide any feedback or adjustments needed.\n\nThank you,\n\nLaura Wilson\nHR Recruitment Specialist\n\nFrom: Nancy Lewis nancy.lewis@company.com\nSubject: Review of Internship Program\nDate: 2024-08-24 14:50:00\nPlain Text Content:\nDear [Hiring Manager’s Name],\n\nAttached is the report on our current internship program. We would like your feedback on the program’s effectiveness and suggestions for improvements.\n\nBest regards,\n\nNancy Lewis\nInternship Program Coordinator\n\nFrom: Robert Hall robert.hall@company.com\nSubject: Update on Recruitment Metrics\nDate: 2024-08-24 14:40:00\nPlain Text Content:\nDear [Hiring Manager’s Name],\n\nPlease find the attached report on our recent recruitment metrics. This includes data on time-to-fill, cost-per-hire, and other key performance indicators.\n\nBest,\n\nRobert Hall\nRecruitment Analyst\nGive me important emails with ranks and make sure to highlight important deadlines from the given input email only. DO NOT give replies to these emails after summarizing. Dont take any input from the examples. Summarize them with some details Top Important Mails:\n1. Interview schedule for Software Engineer position.\n2. Job offer letter for Alex Martinez.\n3. Candidate reference check for Marketing Manager role.\n4. New HR policy update affecting remote work and benefits.\n\nDeadlines and Action Required Mails:\n1. Complete and provide feedback on candidate references by August 26th.\n2. Review and approve job offer letter for Alex Martinez.\n3. Fill out interview feedback form for Product Manager candidates.\n4. Confirm availability for career fair on September 10th.\n\nInternal Updates:\n1. Team building event details for September 5th.\n2. Review and feedback needed on new job opening for HR Assistant.\n3. Feedback requested on the internship program effectiveness.\n\nInformational Mails:\n1. Update on recruitment metrics report.\n2. Report on new HR policies.\n\nThank You\n\nInput: Emails with a profile These are a CEO'\''s emails:\n\n1. Meeting Agenda Review\n\nFrom: Jessica Smith jessica.smith@company.com\nSubject: Agenda for Strategy Meeting\nDate: 2024-08-24 10:00:00\nPlain Text Content:\nDear [CEO'\''s Name],\n\nAttached is the agenda for the strategy meeting scheduled for August 29th. Please review the document and provide any feedback or additional items by August 27th.\n\nHighlights:\n\nMarket Expansion Plans\nBudget Allocation\nTeam Structure Changes\nThank you,\nJessica Smith\nExecutive Assistant\n\n2. Compliance Update\n\nFrom: David Brown david.brown@company.com\nSubject: New Regulatory Compliance Requirements\nDate: 2024-08-24 10:15:00\nPlain Text Content:\nDear [CEO'\''s Name],\n\nPlease review the attached summary of new regulatory compliance requirements effective September 1st. This will impact our reporting procedures and data handling.\n\nKey Points:\n\nNew reporting deadlines\nData protection updates\nRequired departmental briefings\nBest regards,\nDavid Brown\nCompliance Officer\n\n3. System Maintenance Notice\n\nFrom: Emily White emily.white@itdepartment.com\nSubject: Scheduled System Maintenance - August 30th\nDate: 2024-08-24 10:30:00\nPlain Text Content:\nDear [CEO'\''s Name],\n\nWe have scheduled maintenance for our IT systems on August 30th from 1:00 PM to 5:00 PM. Expect temporary disruptions in access to internal systems.\n\nImpact:\n\nPotential downtime\nAccess interruptions\nThank you for your understanding,\nEmily White\nIT Department\n\n4. Marketing Campaign Proposal\n\nFrom: Mark Johnson mark.johnson@marketing.com\nSubject: Proposal for New Marketing Campaign\nDate: 2024-08-24 11:00:00\nPlain Text Content:\nDear [CEO'\''s Name],\n\nAttached is the proposal for our new marketing campaign set to launch in Q4. Please review the objectives, target audience, and budget details.\n\nHighlights:\n\nCampaign goals\nBudget estimates\nROI projections\nFeedback is requested by August 31st.\n\nBest regards,\nMark Johnson\nMarketing Director\n\n5. Employee Engagement Survey Results\n\nFrom: Laura Green laura.green@hr.com\nSubject: Employee Engagement Survey Results\nDate: 2024-08-24 11:30:00\nPlain Text Content:\nDear [CEO'\''s Name],\n\nThe employee engagement survey results are attached. They highlight areas of success and opportunities for improvement.\n\nKey Insights:\n\nHigh satisfaction with leadership\nAreas needing attention\nBest regards,\nLaura Green\nHR Manager\n\n6. Quarterly Financial Report\n\nFrom: Susan Clark susan.clark@finance.com\nSubject: Q2 Financial Report Review\nDate: 2024-08-24 12:00:00\nPlain Text Content:\nDear [CEO'\''s Name],\n\nPlease find the attached Q2 financial report. Review the summary of our financial performance and prepare any questions or comments for the upcoming meeting.\n\nReport Includes:\n\nRevenue and expenses\nProfit margins\nFinancial forecasts\nBest regards,\nSusan Clark\nFinance Director\n\n7. Upcoming Industry Conference\n\nFrom: Robert Lee robert.lee@events.com\nSubject: Invitation to Industry Conference\nDate: 2024-08-24 12:30:00\nPlain Text Content:\nDear [CEO'\''s Name],\n\nYou are invited to the upcoming Industry Conference on September 20th. This event will cover emerging trends and innovations.\n\nEvent Details:\n\nDate: September 20th\nTime: 9:00 AM to 4:00 PM\nLocation: Downtown Convention Center\nPlease confirm your attendance.\n\nBest regards,\nRobert Lee\nConference Organizer\n\n8. Important Legal Notice\n\nFrom: Jane Doe jane.doe@legal.com\nSubject: Legal Matter Requiring Immediate Attention\nDate: 2024-08-24 13:00:00\nPlain Text Content:\nDear [CEO'\''s Name],\n\nAttached is a legal notice requiring your immediate attention. This pertains to a recent dispute that may affect our operations.\n\nDetails:\n\nCase summary\nRequired actions\nLegal counsel contact\nBest regards,\nJane Doe\nLegal Counsel\n\n9. New Office Guidelines\n\nFrom: Alice Turner alice.turner@facilities.com\nSubject: Updated Office Guidelines\nDate: 2024-08-24 13:30:00\nPlain Text Content:\nDear [CEO'\''s Name],\n\nPlease review the updated office guidelines attached. These changes are effective starting September 1st.\n\nKey Changes:\n\nNew safety protocols\nOffice layout adjustments\nVisitor policies\nThank you,\nAlice Turner\nFacilities Manager\n\n10. Fun Team Activity Reminder\n\nFrom: Lisa Carter lisa.carter@team.com\nSubject: Reminder: Team Building Activity Tomorrow\nDate: 2024-08-24 14:00:00\nPlain Text Content:\nHi [CEO'\''s Name],\n\nJust a reminder about tomorrow'\''s team building activity. We look forward to your participation!\n\nDetails:\n\nDate: August 25th\nTime: 3:00 PM\nLocation: Central Park\nBest,\nLisa Carter\nTeam Coordinator\n\nGive me important emails with ranks and make sure to highlight important deadlines from the given input email only. DO NOT give replies to these emails after summarizing. Dont take any input from the examples. Summarize them with some details",
    parameters: {
    decoding_method: "sample",
    max_new_tokens: 500,
    min_new_tokens: 0,
    random_seed: null,
    stop_sequences: [
    "Thank You"
    ],
    temperature: 0.3,
    top_k: 88,
    top_p: 0.5,
    repetition_penalty: 1
    },
    model_id: "meta-llama/llama-3-70b-instruct",
    project_id: "d8da00f9-15f9-45e4-bbd7-72b05335ea20",
    moderations: {
    hap: {
    input: {
    enabled: true,
    threshold: 0.5,
    mask: {
    remove_entity_value: true
    }
    },
    output: {
    enabled: true,
    threshold: 0.5,
    mask: {
    remove_entity_value: true
    }
    }
    }
    }
    };
    
    const response = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(body)
    });
    
    if (!response.ok) {
    throw new Error("Non-200 response");
    }
    
    return await response.json();
    }