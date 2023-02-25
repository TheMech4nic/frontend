import React, { useState } from 'react'
import Button from '../../../components/shared/Button/Button.js/Button'
import Card from '../../../components/shared/Card/Card'
import TextInput from '../../../components/shared/TextInput/TextInput'
import styles from './StepOtp.module.css'

const StepOTP = ({onNext}) => {
  const [otp, setOtp] = useState('')

  const next = () =>{

  }

  return (
    <div className={styles.cardWrapper}>
    <Card title="Enter the code we just sent you" icon='lock-emoji'>
         <TextInput
            value={otp}
            onChange={(e) => setOtp(e.target.value)}/>
          <div>
            <div className={styles.actionButtonWrap}>
              <Button onClick={next} text="Next" />
            </div>
              <p className={styles.bottomParagarh}>
                By entering your email, you're agreeing to our Terms of   Service and Privacy Policy. Thanks!!
            </p>
          </div>
      </Card>
  </div>
  )
}

export default StepOTP