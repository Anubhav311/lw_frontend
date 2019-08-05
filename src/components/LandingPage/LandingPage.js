import React from 'react'
import { Link } from 'react-router-dom';

import Accordion from "../faq/accordion";
import Tabs from "../faq/Tabs";
import faqContent from '../faq/Faqs';
import header_img from '../../assets/header_img.png';
import chain_img from '../../assets/chain_img.png';
import incentive_img from '../../assets/incentive_img.png';
import interview_img from '../../assets/interview_img.png';
import refer_img from '../../assets/refer_img.png';


function LandingPage() {
    return (
  <div>
  <div className="header">
    <div>
      <h1>LinkWork</h1>
      <p>Earn Minimum <span>"Rs. 50,000"</span></p>
      <p>Without spending any time or money</p>
      <Link to="/apply"><button className="button">Apply</button></Link>
    </div>
    <img src={header_img} alt="header image"/>
  </div>
  <section className="gist-section">
    <div className="gist-div">
      <h1>LinkWork</h1>
      <h2>Refer a client. Create a chain.</h2>
      <h2>And just sit back while we will make money for you.</h2>
      <p style={{fontWeight: 'bold'}}>Simply earn incentives for the clients referred by you and the clients referred by your chain members.</p>
    </div>
  </section>

  <section className="steps">
    <h1 className="steps-heading">Here is how you can join</h1>
    <div className="step reverse">
      <div className="step-text">
        <h2>Step 1: Clear interview and get accepted</h2>
        <p>Apply for an interview and we will contact you for the interview. Pass the interview and start right away.</p>
      </div>
      <img src={interview_img} alt="interview image"/>
    </div>
    <div className="step">
    <div className="step-text">
        <h2>Step 2: Give referrals</h2>
        <p>Now all you have to do is just keep your eyes and ears open. Whenever you find someone who needs legal or financial services, you just tell them that you know us and we can provide them the services they need. Then we will contact them.</p>
      </div>
      <img src={refer_img} alt="refer image"/>
    </div>
    <div className="step reverse">
    <div className="step-text">
        <h2>Step 3: get incentives in your bank</h2>
        <p>We will meet the client and if client agrees to take our services, we will provide our service and then raise a bill. Once client pays the bill, you will get your incentive.</p>
      </div>
      <img src={incentive_img} alt="incentive image"/>
    </div>
    <div className="step">
    <div className="step-text">
        <h2>Important Step: Create your own chain</h2>
        <p>If you know people who can do this type of work, you can add them in your chain. They will do the same work like you, but we will pay incentives to them as well as to you. Because they are added as your chain.</p>
      </div>
      <img src={chain_img} alt="chain image"/>
    </div>
  </section>

  <section className="apply-bottom">
    <h1>Want to get started right away ?</h1>
    <Link to="/apply"><button className="button bottom-button">Apply</button></Link>
  </section>

  <section className="faq-section">
    <h2>Frequently Asked Questions (FAQ)</h2>
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
        <Accordion
          title = {`${faqContent.LinkWork.questionFour.title}`}
          content = {`${faqContent.LinkWork.questionFour.content}`}
        />
        <Accordion
          title = {`${faqContent.LinkWork.questionFive.title}`}
          content = {`${faqContent.LinkWork.questionFive.content}`}
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
        <Accordion
          title = {`${faqContent.HowMakeMoney.questionFour.title}`}
          content = {`${faqContent.HowMakeMoney.questionFour.content}`}
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
      <div label="I Have More Questions">
        <div className="faq-apply">
          <h2>If you have more questions,</h2> 
          <h2>go ahead and apply and we will get in touch with you.</h2>
          <Link to="/apply"><button className="button faq-button">Apply</button></Link>
        </div>
      </div>
    </Tabs>
  </section>

  <footer>
    <p>Copyright &copy; 2019 LINKWORK All Rights Reserved</p>
  </footer>
  </div>
    )
}
    
export default LandingPage