import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>FitKarta</title>
        <meta property="og:title" content="FitKarta" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100 thq-body-small thq-link">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101 thq-body-small thq-link">CTA2</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102 thq-body-small thq-link">CTA3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103 thq-body-small thq-link">
              #contact
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104 thq-body-large">
              https://play.teleporthq.io/static/svg/placeholders/no-image.svg
            </span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105 thq-body-large">
              https://play.teleporthq.io/static/svg/placeholders/no-image.svg
            </span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106 thq-body-large">
              https://play.teleporthq.io/static/svg/placeholders/no-image.svg
            </span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107 thq-body-large">
              https://play.teleporthq.io/static/svg/placeholders/no-image.svg
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">
              <span>Secondary CTA</span>
              <br></br>
            </span>
          </Fragment>
        }
        logoSrc="/business-removebg-preview-1500h.png"
        rootClassName="navbar8root-class-name"
        page1Description={
          <Fragment>
            <span className="home-text112 thq-body-small">
              https://play.teleporthq.io/static/svg/placeholders/no-image.svg
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text113 thq-body-small">
              https://play.teleporthq.io/static/svg/placeholders/no-image.svg
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text114 thq-body-small">
              https://play.teleporthq.io/static/svg/placeholders/no-image.svg
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text115 thq-body-small">
              https://play.teleporthq.io/static/svg/placeholders/no-image.svg
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text116 thq-body-small">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text117 thq-body-small">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text118 thq-body-large">
              Expert trainers, tailored workouts, and all the tools you need -
              bringing fitness to your comfort zone.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text119 thq-heading-1">
              Personalized Fitness Training at Your Doorstep
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text120 thq-heading-2">
              Certified Personal Trainers
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text121 thq-heading-2">
              Convenience at Your Doorstep
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text122 thq-heading-2">
              Tailored Workouts
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text123 thq-body-small">
              Our trainers are certified professionals with experience in
              providing personalized fitness training.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text124 thq-body-small">
              We bring the workout to you, saving you time and making fitness
              more accessible.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text125 thq-body-small">
              Each session is customized to your fitness goals and preferences,
              ensuring a personalized experience.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text126">Contact Us</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text127 thq-body-large">
              Get in touch with us to schedule your first personalized training
              session at home.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text128 thq-heading-2">
              Start Your Fitness Journey Today
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text129 thq-heading-2">
              Certified Personal Trainers
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text130 thq-heading-2">
              Convenient At-Home Workouts
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text131 thq-heading-2">
              Portable Workout Tools
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text132 thq-body-small">
              Our trainers are certified professionals with experience in
              providing personalized fitness training.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text133 thq-body-small">
              Enjoy tailored workout sessions in the comfort of your home,
              eliminating the need to travel to a gym.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text134 thq-body-small">
              Our trainers bring basic portable workout tools, ensuring a full
              workout experience without requiring a home gym setup.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text135 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text136 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text137 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text138 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text139 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text140 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text141 thq-body-small">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text142 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text145 thq-heading-2">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text146 thq-heading-3">$50/session</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text147 thq-heading-3">$45/session</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text148 thq-heading-3">$40/session</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text149 thq-body-small">Book Now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text150 thq-heading-3">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text151 thq-body-large">$1800/year</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text152 thq-body-small">Book Now</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text153 thq-heading-3">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text154 thq-body-large">$1600/year</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text155 thq-body-small">Book Now</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text156 thq-heading-3">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text157 thq-body-large">$1400/year</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text158 thq-body-small">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text159 thq-body-large">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text160 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text161 thq-body-large">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text162 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text163 thq-body-large">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text164 thq-body-small">
              1-hour personalized training session
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text165 thq-body-small">
              Certified personal trainer
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text166 thq-body-small">
              Customized workout plan
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text167 thq-body-small">
              1-hour personalized training session
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text168 thq-body-small">
              Certified personal trainer
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text169 thq-body-small">
              Customized workout plan
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text170 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text171 thq-body-small">
              1-hour personalized training session
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text172 thq-body-small">
              Certified personal trainer
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text173 thq-body-small">
              Customized workout plan
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text174 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text175 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text176 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text177 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text178 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text179 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text180 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text181 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text182 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text183 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text184 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text185 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text186 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text187 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text188 thq-heading-2">Book a Session</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text189 thq-heading-2">
              Meet Your Trainer
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text190 thq-heading-2">
              Enjoy Your Workout
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191 thq-heading-2">
              Track Your Progress
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text192 thq-body-small">
              Choose a convenient time for your personalized fitness training
              session.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text193 thq-body-small">
              Our certified personal trainer will arrive at your doorstep with
              all the necessary equipment.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text194 thq-body-small">
              Experience a tailored workout session designed to help you achieve
              your fitness goals.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text195 thq-body-small">
              Monitor your fitness journey and see the results of your hard
              work.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text196 thq-body-small">
              The trainers are professional and really know how to tailor the
              workouts to my needs. I&apos;ve seen great results since starting
              with them.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text197 thq-body-small">
              I was skeptical at first, but having a personal trainer come to my
              home has been a game-changer. I feel more motivated and
              accountable.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text198 thq-body-small">
              I used to struggle to make it to the gym regularly, but now with
              the trainers coming to me, I have no excuses. It&apos;s been a
              fantastic experience.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text199 thq-body-small">
              The personalized attention I receive during each session is
              unparalleled. I&apos;ve never felt more supported in my fitness
              journey.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200 thq-body-small">
              I love the convenience of having a personal trainer come to my
              home. It has made staying fit so much easier with my busy
              schedule.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text201 thq-heading-2">
              Client Testimonials
            </span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text202 thq-body-large">Sarah Johnson</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text203 thq-body-large">Michael Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text204 thq-body-large">Emily Chen</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text205 thq-body-large">David Brown</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text206 thq-body-small">
              Marketing Manager
            </span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text207 thq-body-small">
              Software Engineer
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text208 thq-body-small">Teacher</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text209 thq-body-small">Entrepreneur</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text210 thq-body-large">
              Have questions or want to book a session? Reach out to us!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text211 thq-heading-2">Contact Us</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text212 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text213 thq-body-small">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text214 thq-body-small">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text215 thq-body-small">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text216 thq-body-small">FAQ</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
