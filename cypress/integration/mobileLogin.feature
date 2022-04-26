Feature: mobile Automate

    Scenario: MobileRegister
        Given Mobileuser open home page and click sign in
        When Mobileuser types email id for sign up
        And Mobileuser fill the Manadatory fields Clicks register
        Then Mobileuser logged home page opens
     Scenario: MobileLogin
        Given Mobileuser open home page and click sign in
        When Mobileuser enters Email Id and Password
        Then Mobileuser logged home page opens