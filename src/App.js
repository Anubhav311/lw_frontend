import React from 'react';
import ReactDOM from "react-dom";

import Accordion from "./faq/accordion";
import Tabs from "./faq/Tabs";
import './App.css';
import faqContent from './faq/Faqs';
import header_img from './assets/header_img.png';
import chain_img from './assets/chain_img.png';
import incentive_img from './assets/incentive_img.png';
import interview_img from './assets/interview_img.png';
import refer_img from './assets/refer_img.png';


function App() {
  console.log(faqContent.LinkWork)
  return (
    <div className="App">

        <nav className="navbar">
          <p>LinkWork</p>
          <ul className="landing-page-navbuttons">
            <li>Apply</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </nav>

        <div className="header">
          <div>
            <h1>LinkWork</h1>
            <p>Earn Minimum <span>Rs. 50,000</span></p>
            <p>Without spending any time or money</p>
            <button>Apply</button>
          </div>
          <img style={{width: "60%"}} src={header_img} alt="header image"/>
        </div>

        <div>
          <h2>Refer a client and become a link. arn 20% of consideration without any limit in first year. After that upto Rs. 50,000</h2>
          <p>I HAVE MORE QUESTIONS: You can apply and provide your details. I we find your profile suitable we will call you and you can ask all the questions that you have.</p>
          <p>HOW MUCH MONEY CAN I MAKE: If you work alone you will make minimum 50,000. If you create your chain of people, there's no limit on the amounnt of money you can make. Maximum depends on your performance.</p>
          <p>HOW CAN I PASS THE INTERVIEW: If you have links and work with businessmen, there's a good chance you will be accepted. If you have experience of dealing with people. If your job includes dealing with clients. If you have worked in B2B industry.</p>
        </div>

        <section className="steps">
          <h3>Here's how you can do it</h3>
          <div className="step reverse">
            <div className="step-text">
              <h2>Step 1: Clear interview and get accepted</h2>
              <p>Apply for an interview, do the interview and if you are accepted you can start right away.</p>
            </div>
            <img style={{width: "45%"}} src={interview_img} alt="interview image"/>
          </div>
          <div className="step">
          <div className="step-text">
              <h2>Step 2: Give referrals</h2>
              <p>Once you are accepted, all you have to do is just keep you eyes and ears open. Whenever you find someone who needs legal and financial services, you just tell them that you know us and we can provide them the services they need.</p>
            </div>
            <img style={{width: "45%"}} src={refer_img} alt="refer image"/>
          </div>
          <div className="step reverse">
          <div className="step-text">
              <h2>Step 3: get incentives in your bank</h2>
              <p>We will contact the client. We will meet the client and if client agrees to give us the work we will do the work and raise the bill. Once client pays the bill, you will get your incentive.</p>
            </div>
            <img style={{width: "45%"}} src={incentive_img} alt="incentive image"/>
          </div>
          <div className="step">
          <div className="step-text">
              <h2>Step 4: Create your own chain (actually you can start creating your chain whenever you want. We suggest asap)</h2>
              <p>If you know poeple who have links with bussinesses and firms, you can add them in your chain. They will do the same work. Refer clients to us. We will pay incentive to them as well as you. Building your chain is a great way of making a lot of money. larger the chain, more the incentive.</p>
            </div>
            <img style={{width: "45%"}} src={chain_img} alt="chain image"/>
          </div>
        </section>

        <Tabs className="tabs">
          <div label="What is LinkWork">
            <Accordion
              title = {`${faqContent.LinkWork.questionOne.title}`}
              content = {`${faqContent.LinkWork.questionOne.content}`}
            />
            <Accordion
              title = {`${faqContent.LinkWork.questionTwo.title}`}
              content = {`${faqContent.LinkWork.questionTwo.content}`}
            />
            <Accordion
              title = {`${faqContent.LinkWork.questionThree.title}`}
              content = {`${faqContent.LinkWork.questionThree.content}`}
            />
          </div>
          <div label="How Can I Make Money">
          <Accordion
              title = {`${faqContent.HowMakeMoney.questionOne.title}`}
              content = {`${faqContent.HowMakeMoney.questionOne.content}`}
            />
            <Accordion
              title = {`${faqContent.HowMakeMoney.questionTwo.title}`}
              content = {`${faqContent.HowMakeMoney.questionTwo.content}`}
            />
            <Accordion
              title = {`${faqContent.HowMakeMoney.questionThree.title}`}
              content = {`${faqContent.HowMakeMoney.questionThree.content}`}
            />
          </div>
          <div label="How to create chain">
          <Accordion
              title = {`${faqContent.CreateChain.questionOne.title}`}
              content = {`${faqContent.CreateChain.questionOne.content}`}
            />
            <Accordion
              title = {`${faqContent.CreateChain.questionTwo.title}`}
              content = {`${faqContent.CreateChain.questionTwo.content}`}
            />
            <Accordion
              title = {`${faqContent.CreateChain.questionThree.title}`}
              content = {`${faqContent.CreateChain.questionThree.content}`}
            />
            <Accordion
              title = {`${faqContent.CreateChain.questionFour.title}`}
              content = {`${faqContent.CreateChain.questionFour.content}`}
            />
          </div>
          <div label="I Have More Questions"> Apply to LinkWork and we will contact you </div>
        </Tabs>
        <section>
          <h2>How can I create a chain?</h2>
          <p>Add more links below yourself and Make 10% of the consideration from link level 1 Make 5% of the consideration from link level 2</p>
          <p></p>
        </section>
        <section>
          <p>We are a completely remote company. You don't have to come to office. You can work from wherever you want.</p>
        </section>
        <footer>
          <p>Copyright &copy; 2019 LINKWORK All Rights Reserved</p>
        </footer>
    </div>
  );
}

export default App;
