import React from 'react'
import "./ExamRules.css";

const Exam = () => {
  return (
    <>
      <div className='top'>
        <div className='top-content'>
          <h2 id='padding'>NTO ONLINE TEST</h2>
        </div>
        <div className='margin'>
          <div className='inline'>
          <div className='Ins'>
            <h2>Instruction for Online Test</h2>
            <h3 style={{color:"red",marginTop:"20px",marginBottom:"20px"}}>Please read the Instructions carefully before starting the test</h3>
          </div>
          <div className='timer'><span className='start'>Start in</span><span className='count'>30:00</span></div>
          </div>
          <div className='side'>
            <ol>
              <li><span className='space'>1.</span>Click <b>start</b> test on bottom of your screen to begin the test.</li>
              <li><span className='space'>2.</span>The clock has been set at sever and count down timer at the top Right side of the screen will display left out time to closure from where you can monitor time you have to complete the exam.</li>
              <li><span className='space'>3.</span>Click one of the answer,simply click the desired option button.</li>
              <li><span className='space'>4.</span>Candidate can change their response of attempted answer anytime during examination slot time by clicking another answer which candidates want to change an answer.Click to remove incorrect answer,click the desired option button.</li>
              <li><span className='space'>5.</span>Click on Next to save the answer and moving to the next question.The next question will automatically be displayed.</li>
              <li><span className='space'>6.</span>Click on Mark for Review to review you answer at later stage.</li>
              <li><span className='space'>7.</span>To select a question,click on the question number on the Right side of the screen.
                  <table>
                    <tr>
                      <th style={{backgroundColor:"red"}}>Red</th>
                      <td>Not answered /<b>Not Attempted Question</b></td>
                    </tr>
                    <tr>
                    <th style={{backgroundColor:"green"}}>Green</th>
                      <td>Answered /<b>Attempted Question.</b></td>
                    </tr>
                    <tr>
                    <th style={{backgroundColor:"yellow"}}>Yellow</th>
                      <td><b>Not Answered & Marked for review.</b></td>
                    </tr>
                    <tr>
                    <th style={{backgroundColor:"violet"}}>Violet</th>
                      <td><b>Answered & Marked of Review</b></td>
                    </tr>
                    <tr>
                    <th style={{backgroundColor:"Gray"}}>Gray</th>
                      <td><b>Dumped</b></td>
                    </tr>
                    <tr>
                    <th style={{backgroundColor:"white"}}>White</th>
                      <td><b>Not Visited</b></td>
                    </tr>
                  </table>
              </li>
              <li><span className='space'>8.</span>The colour coded diagram on the Left side of the screen shows the status of the question.</li>
              <li><span className='space'>9.</span>Candidate will be allowed to Shuffle between questions anytime during the examination as per their convenience.</li>
              <li><span className='space'>10.</span>All the answered questions will be counted for calculating the final score.</li>
              <li><span className='space'>11.</span>Do not click final <b>SUBMIT</b> on the left corner of the screen unless you have completed the exam.In case you click final <b>SUBMIT</b> you will not be permitted to continue.</li>
              <li><span className='space'>12.</span>Score obtained will be displayed immediately after the test.</li>
            </ol>
          </div>
        </div>
        <hr/>
        <div className='flex'>
          <div className='flex-padding'>
            <span>Choose your default language:
              <span id="select" >
              <select name="">
                <option value="">English</option>
                <option value="">Hindi</option>
              </select>
              </span>
            </span>
            <p className='wrap'>Please note all questions Will appear in your default language.</p>
            <p className='wrap-box'> This language can be changed for a particular question later on.</p>
          </div>
          <div  className='flex-padding'>
          <span className='space'><input type="checkbox" name="" id="" /></span>
          <span>The computer provided to me one is in proper working condition.<br/>
           I have read and understood the instructions given above.</span>
           <br />
            <button className='btn'>Start Test</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exam
