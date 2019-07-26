import React from 'react';
import ReactDOM from "react-dom";
import Accordion from "./faq/accordion";
import Tabs from "./faq/Tabs";

import './App.css';

let faqContent = {
  LinkWork: {
    questionOne: {
      title: "WHAT IS LINKWORK?",
      content: "LinkWork is worlds first and only platform for which let's you make money without doing any work or spending any time.",
    },
    questionTwo: {
      title: "HOW WILL LINKWORK PROVIDE SERVICES TO CLIENT?",
      content: "LinkWork is connected with world class professional firms. Our network of professional firms will provide the services to client.",
    },
    questionThree: {
      title: "WHAT TYPE OF CLIENTS?",
      content: "GST, Accounts, Starting Business, Company Registration, Income Tax, Labour Law or any other legal or financial service.",
    }
  },
  HowMakeMoney : {
    questionOne: {
      title: "HOW CAN I MAKE MONEY",
      content: "by referring clients and creating a chain of people working under you.",
    },
    questionTwo: {
      title: "HOW MANY HOURS DO I NEED TO WORK?",
      content: "Zero. You don't have to work at all. But you can work if you want. Just refer a client to us and we will take care of rest.",
    },
    questionThree: {
      title: "DO I NEED TO PAY ANYTHING?",
      content: "NO. We will never ask you to pay anything. Never. Ever.",
    }
  },
  CreateChain : {
    questionOne: {
      title: "HOW CAN I CREATE A CHAIN?",
      content: "After you are accepted, you can add more people under you and create a chain. For more details on creating chain go to this LINK.",
    },
    questionTwo: {
      title: "WHAT IS THE BENEFIT OF CREATING A CHAIN?",
      content: "You chain will give Business to LinkWork and we will pay incentive to you and your chain.",
    },
    questionThree: {
      title: "HOW MANY PEOPLE CAN I ADD IN MY CHAIN?",
      content: "you can add 5 people. Then those 5 people can further add 5 people each. This way you will have 25 people in your chain.",
    },
    questionFour: {
      title: "HOW MUCH INCENTIVE WILL I GET FROM MY CHAIN",
      content: "You will get 20% commission from a direct client. You will earn 10% from people on level 1 of your chain. You will earch 5% from people on level 2 of your chain."
    }
  }

}


function App() {
  console.log(faqContent.LinkWork)
  return (
    <div className="App">
        <nav>
          <ul>
            <li>logo</li>
            <li>login</li>
            <li>contact</li>
            <li>apply</li>
          </ul>
        </nav>
        <div>
          <h1>LinkWork</h1>
          <h3>Earn Minimum Rs. 50,000</h3>
          <h3>Without spending any time or money</h3>
        </div>
        <div>
          <h2>Refer a client and become a link. arn 20% of consideration without any limit in first year. After that upto Rs. 50,000</h2>
          <p>I HAVE MORE QUESTIONS: You can apply and provide your details. I we find your profile suitable we will call you and you can ask all the questions that you have.</p>
          <p>HOW MUCH MONEY CAN I MAKE: If you work alone you will make minimum 50,000. If you create your chain of people, there's no limit on the amounnt of money you can make. Maximum depends on your performance.</p>
          <p>HOW CAN I PASS THE INTERVIEW: If you have links and work with businessmen, there's a good chance you will be accepted. If you have experience of dealing with people. If your job includes dealing with clients. If you have worked in B2B industry.</p>
          <br/><br/><br/>
        </div>
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
          <h3>Here's how you can do it</h3>
          <p>Step 1: Clear interview and get accepted</p>
          <p>Apply for an interview, do the interview and if you are accepted you can start right away.</p>
          <p>Step 2: Give referrals</p>
          <p>Once you are accepted, all you have to do is just keep you eyes and ears open. Whenever you find someone who needs legal and financial services, you just tell them that you know us and we can provide them the services they need.</p>
          <p>Step 3: get incentives in your bank</p>
          <p>We will contact the client. We will meet the client and if client agrees to give us the work we will do the work and raise the bill. Once client pays the bill, you will get your incentive.</p>
          <p>Step 4: Create your own chain (actually you can start creating your chain whenever you want. We suggest asap)</p>
          <p>If you know poeple who have links with bussinesses and firms, you can add them in your chain. They will do the same work. Refer clients to us. We will pay incentive to them as well as you. Building your chain is a great way of making a lot of money. larger the chain, more the incentive.</p>
        </section>
        <section>
          <h2>How can I create a chain?</h2>
          <p>Add more links below yourself and Make 10% of the consideration from link level 1 Make 5% of the consideration from link level 2</p>
          <p></p>
        </section>
        <section>
          <p>We are a completely remote company. You don't have to come to office. You can work from wherever you want.</p>
        </section>
        <footer>
          <p>contact</p>
          <p>apply</p>
        </footer>
    </div>
  );
}

export default App;
