Feature: Automate Signup Functionality and Sign In

    Scenario: Register
        Given the user open home page and click sign in
        When the user types email id for sign up
        And the user fill the Manadatory fields Clicks register
        Then the logged home page opens
  
      Scenario: Login
        Given the user open home page and click sign in
        When the user enters Email Id and Password
        Then the logged home page opens