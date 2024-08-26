const { IamAuthenticator } = require('ibm-watson/auth');
const axios = require('axios');

// Function to generate access token
async function getAccessToken() {
  const authenticator = new IamAuthenticator({
    apikey: process.env.WATSONX_API_KEY,
  });

  try {
    const accessToken = await authenticator.tokenManager.getToken();
    return accessToken;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

async function getImportantMails(accessToken) {
  // This function remains unchanged as it doesn't directly interact with WatsonX
  // You may want to modify it to use the actual Gmail API if needed
  const dummySubjects = [
    "Meeting tomorrow at 2 PM",
    "Urgent: Project deadline update",
    "New company policy",
    "Lunch invitation",
    "Weekly report due",
  ];

  return await analyzeWithWatsonX(dummySubjects);
}

async function getImportantMailsForCategory(email, category) {
  
  // const dummySubjects = [
  //   "Meeting tomorrow at 2 PM",
  //   "Urgent: Project deadline update",
  //   "New company policy",
  //   "Lunch invitation",
  //   "Weekly report due",
  // ];

  const dummySubjects = [
    `These are a CEO's emails:

    1. Meeting Agenda Review
  
    From: Jessica Smith jessica.smith@company.com
    Subject: Agenda for Strategy Meeting
    Date: 2024-08-24 10:00:00
    Plain Text Content:
    Dear [CEO's Name],
  
    Attached is the agenda for the strategy meeting scheduled for August 29th. Please review the document and provide any feedback or additional items by August 27th.
  
    Highlights:
  
    Market Expansion Plans
    Budget Allocation
    Team Structure Changes
    Thank you,
    Jessica Smith
    Executive Assistant
  
    2. Compliance Update
  
    From: David Brown david.brown@company.com
    Subject: New Regulatory Compliance Requirements
    Date: 2024-08-24 10:15:00
    Plain Text Content:
    Dear [CEO's Name],
  
    Please review the attached summary of new regulatory compliance requirements effective September 1st. This will impact our reporting procedures and data handling.
  
    Key Points:
  
    New reporting deadlines
    Data protection updates
    Required departmental briefings
    Best regards,
    David Brown
    Compliance Officer
  
    3. System Maintenance Notice
  
    From: Emily White emily.white@itdepartment.com
    Subject: Scheduled System Maintenance - August 30th
    Date: 2024-08-24 10:30:00
    Plain Text Content:
    Dear [CEO's Name],
  
    We have scheduled maintenance for our IT systems on August 30th from 1:00 PM to 5:00 PM. Expect temporary disruptions in access to internal systems.
  
    Impact:
  
    Potential downtime
    Access interruptions
    Thank you for your understanding,
    Emily White
    IT Department
  
    4. Marketing Campaign Proposal
  
    From: Mark Johnson mark.johnson@marketing.com
    Subject: Proposal for New Marketing Campaign
    Date: 2024-08-24 11:00:00
    Plain Text Content:
    Dear [CEO's Name],
  
    Attached is the proposal for our new marketing campaign set to launch in Q4. Please review the objectives, target audience, and budget details.
  
    Highlights:
  
    Campaign goals
    Budget estimates
    ROI projections
    Feedback is requested by August 31st.
  
    Best regards,
    Mark Johnson
    Marketing Director
  
    5. Employee Engagement Survey Results
  
    From: Laura Green laura.green@hr.com
    Subject: Employee Engagement Survey Results
    Date: 2024-08-24 11:30:00
    Plain Text Content:
    Dear [CEO's Name],
  
    The employee engagement survey results are attached. They highlight areas of success and opportunities for improvement.
  
    Key Insights:
  
    High satisfaction with leadership
    Areas needing attention
    Best regards,
    Laura Green
    HR Manager
  
    6. Quarterly Financial Report
  
    From: Susan Clark susan.clark@finance.com
    Subject: Q2 Financial Report Review
    Date: 2024-08-24 12:00:00
    Plain Text Content:
    Dear [CEO's Name],
  
    Please find the attached Q2 financial report. Review the summary of our financial performance and prepare any questions or comments for the upcoming meeting.
  
    Report Includes:
  
    Revenue and expenses
    Profit margins
    Financial forecasts
    Best regards,
    Susan Clark
    Finance Director
  
    7. Upcoming Industry Conference
  
    From: Robert Lee robert.lee@events.com
    Subject: Invitation to Industry Conference
    Date: 2024-08-24 12:30:00
    Plain Text Content:
    Dear [CEO's Name],
  
    You are invited to the upcoming Industry Conference on September 20th. This event will cover emerging trends and innovations.
  
    Event Details:
  
    Date: September 20th
    Time: 9:00 AM to 4:00 PM
    Location: Downtown Convention Center
    Please confirm your attendance.
  
    Best regards,
    Robert Lee
    Conference Organizer
  
    8. Important Legal Notice
  
    From: Jane Doe jane.doe@legal.com
    Subject: Legal Matter Requiring Immediate Attention
    Date: 2024-08-24 13:00:00
    Plain Text Content:
    Dear [CEO's Name],
  
    Attached is a legal notice requiring your immediate attention. This pertains to a recent dispute that may affect our operations.
  
    Details:
  
    Case summary
    Required actions
    Legal counsel contact
    Best regards,
    Jane Doe
    Legal Counsel
  
    9. New Office Guidelines
  
    From: Alice Turner alice.turner@facilities.com
    Subject: Updated Office Guidelines
    Date: 2024-08-24 13:30:00
    Plain Text Content:
    Dear [CEO's Name],
  
    Please review the updated office guidelines attached. These changes are effective starting September 1st.
  
    Key Changes:
  
    New safety protocols
    Office layout adjustments
    Visitor policies
    Thank you,
    Alice Turner
    Facilities Manager
  
    10. Fun Team Activity Reminder
  
    From: Lisa Carter lisa.carter@team.com
    Subject: Reminder: Team Building Activity Tomorrow
    Date: 2024-08-24 14:00:00
    Plain Text Content:
    Hi [CEO's Name],
  
    Just a reminder about tomorrow's team building activity. We look forward to your participation!
  
    Details:
  
    Date: August 25th
    Time: 3:00 PM
    Location: Central Park
    Best,
    Lisa Carter
    Team Coordinator`
  ]
  



  return await analyzeWithWatsonX(dummySubjects, category);
}

async function analyzeWithWatsonX(mailHeadings, category = 'general') {
  const accessToken = await getAccessToken();

  const inputText = `Rank the emails with importance of the given profile.
Make sure to add adequete details while summarizing them like names and dates

Input: Emails with a profile These are a CEO's emails:

From: Sarah Lewis sarah.lewis@company.com
Subject: Upcoming Board Meeting Agenda
Date: 2024-08-24 16:10:00
Plain Text Content:
Dear [CEO's Name],

This is to confirm the agenda for our upcoming board meeting scheduled for August 30th. Please review the attached document for a detailed breakdown of topics to be discussed.

Agenda Highlights:

Q2 Financial Overview
Strategic Plan Review
New Project Proposals
If there are additional items you wish to include or changes needed, please let me know by August 27th.

Thank you,

Sarah Lewis
Executive Assistant

From: John Miller john.miller@company.com
Subject: Important Compliance Update
Date: 2024-08-24 16:05:00
Plain Text Content:
Dear [CEO's Name],

Please be informed of the recent compliance updates regarding our industry regulations. Attached is a summary of the changes that will impact our operations.

Key Points:

New reporting requirements starting September 1st
Updated guidelines for data protection
Ensure that relevant departments are briefed accordingly.

Best regards,

John Miller
Compliance Officer

From: Emily Wong emily.wong@company.com
Subject: Critical System Maintenance Scheduled for August 28th
Date: 2024-08-24 15:55:00
Plain Text Content:
Dear [CEO's Name],

This is a reminder about the scheduled maintenance for our IT systems on August 28th from 2:00 PM to 6:00 PM. This maintenance is necessary to enhance security and system performance.

Impact:

Temporary access issues to internal systems
Expected downtime of approximately 4 hours
We apologize for any inconvenience this may cause and will keep you updated on the progress.

Thank you for your understanding,

Emily Wong
IT Department

From: Michael Johnson michael.johnson@company.com
Subject: Proposal for New Marketing Campaign
Date: 2024-08-24 15:45:00
Plain Text Content:
Dear [CEO's Name],

Attached is the proposal for the new marketing campaign we plan to launch in Q4. It includes the campaign objectives, target audience, and projected budget.

Highlights:

Innovative strategies for market penetration
Expected ROI and key performance indicators
Please review the proposal and provide your feedback by August 30th.

Best regards,

Michael Johnson
Marketing Director

From: Laura Green laura.green@company.com
Subject: Employee Engagement Survey Results
Date: 2024-08-24 15:30:00
Plain Text Content:
Dear [CEO's Name],

I'm pleased to share the results of the recent employee engagement survey. The findings highlight areas of success and opportunities for improvement.

Key Insights:

High levels of satisfaction with management
Areas identified for additional focus
The full report is attached for your review.

Best regards,

Laura Green
HR Manager

From: Lisa Carter lisa.carter@company.com
Subject: Fun Fact of the Day: Did You Know?
Date: 2024-08-24 16:00:00
Plain Text Content:
Hi [CEO's Name],

Here's a fun fact to brighten your day: Did you know that the shortest war in history lasted only 38 minutes? Just thought you might find that interesting!

Best,

Lisa Carter
Office Humorist

From: Ben Clark ben.clark@company.com
Subject: Office Desk Organization Tips
Date: 2024-08-24 15:50:00
Plain Text Content:
Hi [CEO's Name],

Here are some tips for organizing your desk:

Keep only essential items on your desk.
Use desk organizers to manage papers and supplies.
Regularly declutter to maintain a clean workspace.
Hope you find these tips helpful!

Best,

Ben Clark
Office Organizer

From: Rachel Adams rachel.adams@company.com
Subject: Upcoming Weekend Weather Forecast
Date: 2024-08-24 15:40:00
Plain Text Content:
Hi [CEO's Name],

Just a quick update on the weekend weather forecast:

Saturday: Sunny with a high of 75°F
Sunday: Partly cloudy with a high of 73°F
Hope you have a great weekend!

Best,

Rachel Adams
Weather Enthusiast

From: David Lee david.lee@company.com
Subject: Trivia Quiz: What's Your IQ?
Date: 2024-08-24 15:25:00
Plain Text Content:
Hi [CEO's Name],

We've created a fun trivia quiz to test your IQ! It's just for fun and won't affect your work performance.

Here's the link to take the quiz: Trivia Quiz Link

Enjoy!

Best,

David Lee
Trivia Specialist

From: Jenny White jenny.white@company.com
Subject: Recommended Playlist for Work
Date: 2024-08-24 15:15:00
Plain Text Content:
Hi [CEO's Name],

Here's a playlist of relaxing music to help you focus while working. It includes a mix of instrumental tracks and soft tunes.

Playlist Link: Music Playlist

Enjoy the music!

Best,

Jenny White
Music Curator

Give me important emails with ranks and make sure to highlight important deadlines from the given input email only. DO NOT give replies to these emails after summarizing. Dont take any input from the examples. Summarize them with some details Top Important Mails:
1. Agenda for board meeting on August 30th.
2. New compliance regulations summary.
3. Marketing campaign proposal due for feedback by August 30th.
4. Results of the employee engagement survey.

Deadlines and Action Required Mails:
1. IT maintenance scheduled with expected downtime.
2. Add missing elective by Friday 5:00 PM.
3. Revise and resubmit paper with missing references by tomorrow 5:00 PM.

Invitations to Events:
No Invitation

Thank You

Input: Emails with a profile These are a Student's emails:

From: Professor Adams professor.adams@college.edu
Subject: Midterm Exam Schedule
Date: 2024-08-24 10:00:00
Plain Text Content:
Dear [Student's Name],

This is to inform you about the midterm exam schedule for this semester. Please find the details below:

Math 101: September 5th, 10:00 AM - 12:00 PM
History 202: September 7th, 2:00 PM - 4:00 PM
Biology 303: September 10th, 9:00 AM - 11:00 AM
Ensure you are prepared and review the topics listed in the syllabus.

Best regards,
Professor Adams

From: Campus Health Services campus.health@college.edu
Subject: Flu Shot Clinics Starting Next Week
Date: 2024-08-24 09:30:00
Plain Text Content:
Dear [Student's Name],

Flu shot clinics will be available on campus starting next week. The schedule is as follows:

August 27th: 10:00 AM - 2:00 PM
August 29th: 1:00 PM - 5:00 PM
Location: Student Health Center

Please visit during these times to get vaccinated.

Best,
Campus Health Services

From: Student Activities Office activities@college.edu
Subject: Welcome Back BBQ This Friday
Date: 2024-08-24 11:00:00
Plain Text Content:
Hi [Student's Name],

We're excited to welcome you back with a BBQ this Friday at 5:00 PM on the main quad. Come join us for food, games, and a chance to meet other students!

See you there!
Student Activities Office

From: Academic Advisor advisor@college.edu
Subject: Advising Appointment Confirmation
Date: 2024-08-24 12:00:00
Plain Text Content:
Dear [Student's Name],

Your advising appointment is confirmed for August 26th at 3:00 PM. We'll discuss your course selection and academic progress.

Please bring any questions or documents needed for your review.

Best regards,
Academic Advisor

From: Library Services library@college.edu
Subject: New Study Rooms Reservation System
Date: 2024-08-24 08:00:00
Plain Text Content:
Hi [Student's Name],

We've implemented a new reservation system for study rooms. You can now book rooms online through our website.

For more details, visit the library website or contact us.

Best,
Library Services

From: Jane Miller jane.miller@college.edu
Subject: Group Project Meeting
Date: 2024-08-24 14:00:00
Plain Text Content:
Hi [Student's Name],

Our group project meeting is scheduled for August 28th at 2:00 PM in the student lounge. Please bring your research and any updates.

Looking forward to it!
Jane Miller

From: Campus Security security@college.edu
Subject: Campus Safety Tips
Date: 2024-08-24 13:00:00
Plain Text Content:
Dear Students,

Here are some important campus safety tips:

Always lock your dorm room.
Report any suspicious activity immediately.
Use the buddy system when walking at night.
Stay safe,
Campus Security

From: Sarah Smith sarah.smith@college.edu
Subject: Yoga Class Schedule
Date: 2024-08-24 15:00:00
Plain Text Content:
Hi [Student's Name],

Yoga classes will be held every Tuesday and Thursday at 6:00 PM in the wellness center. First class is free!

Hope to see you there,
Sarah Smith

From: Dining Services dining@college.edu
Subject: New Dining Hall Hours
Date: 2024-08-24 16:00:00
Plain Text Content:
Dear Students,

The dining hall hours have changed for this semester:

Breakfast: 7:00 AM - 10:00 AM
Lunch: 11:00 AM - 2:00 PM
Dinner: 5:00 PM - 8:00 PM
We look forward to serving you!

Best,
Dining Services

From: Tech Support techsupport@college.edu
Subject: Internet Outage Notification
Date: 2024-08-24 17:00:00
Plain Text Content:
Hi [Student's Name],

There will be a scheduled internet outage on August 29th from 11:00 PM to 1:00 AM for system maintenance. Please plan accordingly.

Thank you for your patience,
Tech Support


Give me important emails with ranks and make sure to highlight important deadlines from the given input email only. DO NOT give replies to these emails after summarizing. Dont take any input from the examples. Summarize them with some details Top Important Mails:
1. Midterm exam schedule.
2. Advising appointment confirmation.
3. New study rooms reservation system.
4. Internet outage notification.

Deadlines and Action Required Mails:
1. Flu shot clinic dates.
2. Group project meeting on August 28th.
3. Review of campus safety tips.

Invitations to Events:
1. Welcome Back BBQ on August 30th.
2. Yoga class schedule.

Thank You


Input: Emails with a profile These are a doctor's emails:

From: Dr. Alice Roberts alice.roberts@clinic.com
Subject: Urgent: Critical Patient Report for Review
Date: 2024-08-24 16:15:00
Plain Text Content:
Dear Dr. [Doctor's Name],

Please review the attached critical patient report for immediate attention. The report concerns Patient John Doe, who has shown severe symptoms that require urgent intervention.

Key Details:

Patient Name: John Doe
Symptoms: Severe abdominal pain, high fever
Recommended Action: Immediate diagnostic tests and treatment
Best regards,
Alice Roberts
Chief Medical Officer

From: Dr. Brian Carter brian.carter@hospital.com
Subject: Reminder: Staff Meeting on September 2nd
Date: 2024-08-24 16:05:00
Plain Text Content:
Dear Dr. [Doctor's Name],

This is a reminder about our upcoming staff meeting scheduled for September 2nd at 10:00 AM. The agenda includes updates on departmental protocols and upcoming training sessions.

Agenda Highlights:

Review of new protocols
Training schedule for new equipment
Open Q&A session
Please confirm your attendance.

Thank you,
Brian Carter
Department Head

From: Dr. Claire Evans claire.evans@clinic.com
Subject: Important Update: New Patient Management System
Date: 2024-08-24 16:00:00
Plain Text Content:
Dear Dr. [Doctor's Name],

Please be informed about the new patient management system being implemented starting August 30th. Attached is a guide to help you transition smoothly.

Key Updates:

New features and interface
Training sessions scheduled for August 28th and 29th
Support contact information
Best regards,
Claire Evans
IT Coordinator

From: Dr. David White david.white@hospital.com
Subject: Follow-Up Required: Patient Test Results
Date: 2024-08-24 15:55:00
Plain Text Content:
Dear Dr. [Doctor's Name],

Attached are the test results for Patient Emily Smith. The results indicate abnormal findings that need further investigation.

Details:

Test: Blood work
Abnormal Findings: Elevated liver enzymes
Recommended Follow-Up: Further imaging and consultation
Best regards,
David White
Laboratory Manager

From: Dr. Fiona Green fiona.green@clinic.com
Subject: New Clinic Policy on Telemedicine
Date: 2024-08-24 15:45:00
Plain Text Content:
Dear Dr. [Doctor's Name],

We have updated our clinic policy regarding telemedicine services. Please review the attached document for the latest guidelines and procedures.

Key Points:

Procedures for virtual consultations
Patient privacy and data security
Training requirements
Thank you,
Fiona Green
Policy Administrator

From: Dr. Helen Clark helen.clark@hospital.com
Subject: Invitation: Community Health Fair
Date: 2024-08-24 15:30:00
Plain Text Content:
Dear Dr. [Doctor's Name],

We are hosting a community health fair on September 10th and would like you to participate. The fair will include free health screenings and educational talks.

Event Details:

Date: September 10th
Time: 10:00 AM to 4:00 PM
Location: Central Park
Please confirm your availability and any specific services you would like to provide.

Best regards,
Helen Clark
Event Coordinator

From: Dr. Isaac Miller isaac.miller@clinic.com
Subject: Urgent: Patient Follow-Up Needed
Date: 2024-08-24 15:15:00
Plain Text Content:
Dear Dr. [Doctor's Name],

Patient Mark Johnson requires urgent follow-up due to complications from his recent surgery. Attached are his recent updates and recommended actions.

Details:

Patient Name: Mark Johnson
Complications: Infection at the surgical site
Recommended Follow-Up: Immediate consultation and possible revision surgery
Best regards,
Isaac Miller
Patient Coordinator

From: Dr. Julia Adams julia.adams@hospital.com
Subject: Feedback Request: Recent Staff Training
Date: 2024-08-24 15:05:00
Plain Text Content:
Hi Dr. [Doctor's Name],

Please provide feedback on the recent staff training session held on August 22nd. Your insights will help us improve future sessions.

Feedback Focus:

Training content
Instructor effectiveness
Overall session organization
Thank you,
Julia Adams
Training Coordinator

From: Dr. Kevin Lee kevin.lee@clinic.com
Subject: Upcoming Health Seminar on Diabetes
Date: 2024-08-24 14:55:00
Plain Text Content:
Dear Dr. [Doctor's Name],

We are organizing a health seminar focused on diabetes management on September 5th. We would be delighted if you could attend and share your expertise.

Seminar Details:

Date: September 5th
Time: 1:00 PM to 3:00 PM
Location: Conference Room B
Please let us know if you are available.

Best regards,
Kevin Lee
Seminar Coordinator

From: Dr. Lisa Carter lisa.carter@hospital.com
Subject: Fun Fact of the Day: Did You Know?
Date: 2024-08-24 14:45:00
Plain Text Content:
Hi Dr. [Doctor's Name],

Here's a fun fact to lighten your day: Did you know that the human body contains about 37.2 trillion cells? Thought you might find that interesting!

Best,
Lisa Carter
Office Humorist

From: Dr. Mark Thompson mark.thompson@clinic.com
Subject: Office Desk Organization Tips
Date: 2024-08-24 14:35:00
Plain Text Content:
Hi Dr. [Doctor's Name],

Here are some tips for organizing your office desk:

Keep only essential items visible
Use organizers for documents and supplies
Regularly declutter to maintain a clean workspace
Hope these tips help!

Best,
Mark Thompson
Office Organizer


Give me important emails with ranks and make sure to highlight important deadlines from the given input email only. DO NOT give replies to these emails after summarizing. Dont take any input from the examples. Summarize them with some details Top Important Mails:
1. Urgent patient report for John Doe.
2. Follow-up required for Patient Emily Smith.
3. Urgent follow-up needed for Patient Mark Johnson.

Deadlines and Action Required Mails:
1. Staff meeting reminder on September 2nd.
2. Feedback requested on patient management system.
3. Review and familiarize with new telemedicine policy.

Invitations to Events:
1. Community health fair participation on September 10th.
2. Health seminar on diabetes management on September 5th.

Additional Notes:
1. Update on clinic policy regarding telemedicine.
2. Feedback request on recent staff training.

Thank You



Input: Emails with a profile These are a hiring manager's emails:

From: Brian Lee brian.lee@company.com
Subject: New HR Policy Update
Date: 2024-08-24 16:05:00
Plain Text Content:
Dear [Hiring Manager's Name],

We have updated the HR policies regarding remote work and employee benefits. The updated policy document is attached for your review.

Key Changes:

Revised remote work guidelines
Updated benefits package details
Please ensure that these changes are communicated to your team.

Best regards,

Brian Lee
HR Specialist

From: Sarah Johnson sarah.johnson@company.com
Subject: Candidate Reference Check
Date: 2024-08-24 15:55:00
Plain Text Content:
Dear [Hiring Manager's Name],

We need to complete the reference check for the candidate, Tom Brown, who interviewed for the Marketing Manager role. Please provide your feedback on the references by August 26th.

Thank you,

Sarah Johnson
Recruitment Associate

From: David Kim david.kim@company.com
Subject: Job Offer Letter for Alex Martinez
Date: 2024-08-24 15:45:00
Plain Text Content:
Dear [Hiring Manager's Name],

Attached is the job offer letter for Alex Martinez, who has accepted the offer for the Sales Executive position. Please review and approve the letter before it is sent to the candidate.

Best regards,

David Kim
HR Manager

From: Emily Clark emily.clark@company.com
Subject: Team Building Event Details
Date: 2024-08-24 15:30:00
Plain Text Content:
Dear [Hiring Manager's Name],

Our next team-building event is scheduled for September 5th. Details are included in the attached document. Please ensure your team is aware and prepared for the event.

Thank you,

Emily Clark
Event Coordinator

From: Jessica Brown jessica.brown@company.com
Subject: Interview Feedback Form
Date: 2024-08-24 15:20:00
Plain Text Content:
Dear [Hiring Manager's Name],

Please complete the attached interview feedback form for the recent candidates who interviewed for the Product Manager position. Your input is crucial for the final decision.

Best regards,

Jessica Brown
Recruitment Support

From: Michael Davis michael.davis@company.com
Subject: Upcoming Career Fair Participation
Date: 2024-08-24 15:10:00
Plain Text Content:
Dear [Hiring Manager's Name],

We will be participating in the upcoming career fair on September 10th. Please confirm your availability to represent the company at the event.

Best,

Michael Davis
Recruitment Events Coordinator

From: Laura Wilson laura.wilson@company.com
Subject: New Job Opening for HR Assistant
Date: 2024-08-24 15:00:00
Plain Text Content:
Dear [Hiring Manager's Name],

We have a new job opening for an HR Assistant. Please review the attached job description and provide any feedback or adjustments needed.

Thank you,

Laura Wilson
HR Recruitment Specialist

From: Nancy Lewis nancy.lewis@company.com
Subject: Review of Internship Program
Date: 2024-08-24 14:50:00
Plain Text Content:
Dear [Hiring Manager's Name],

Attached is the report on our current internship program. We would like your feedback on the program's effectiveness and suggestions for improvements.

Best regards,

Nancy Lewis
Internship Program Coordinator

From: Robert Hall robert.hall@company.com
Subject: Update on Recruitment Metrics
Date: 2024-08-24 14:40:00
Plain Text Content:
Dear [Hiring Manager's Name],

Please find the attached report on our recent recruitment metrics. This includes data on time-to-fill, cost-per-hire, and other key performance indicators.

Best,

Robert Hall
Recruitment Analyst
Give me important emails with ranks and make sure to highlight important deadlines from the given input email only. DO NOT give replies to these emails after summarizing. Dont take any input from the examples. Summarize them with some details Top Important Mails:
1. Interview schedule for Software Engineer position.
2. Job offer letter for Alex Martinez.
3. Candidate reference check for Marketing Manager role.
4. New HR policy update affecting remote work and benefits.

Deadlines and Action Required Mails:
1. Complete and provide feedback on candidate references by August 26th.
2. Review and approve job offer letter for Alex Martinez.
3. Fill out interview feedback form for Product Manager candidates.
4. Confirm availability for career fair on September 10th.

Internal Updates:
1. Team building event details for September 5th.
2. Review and feedback needed on new job opening for HR Assistant.
3. Feedback requested on the internship program effectiveness.

Informational Mails:
1. Update on recruitment metrics report.
2. Report on new HR policies.

Thank You


These are a ${category}'s emails: ` + 

mailHeadings[0] + `

Give me important emails with ranks and make sure to highlight important deadlines from the given input email only. DO NOT give replies to these emails after summarizing. Dont take any input from the examples. Summarize them with some details Top Important Mails:

`;



  try {
    const watsonXResponse = await axios.post(
      "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29",
      {
        input: inputText,
        project_id: process.env.WATSONX_PROJECT_ID,
        model_id: "meta-llama/llama-3-70b-instruct",
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
      },
      {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
      }
    );

    console.log(watsonXResponse.data.results);
    return watsonXResponse.data.results[0].generated_text.split('\n');
  } catch (error) {
    console.error('Error calling WatsonX API:', error);
    throw error;
  }
}

module.exports = { getImportantMails, getImportantMailsForCategory };