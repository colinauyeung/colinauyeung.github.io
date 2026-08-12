//RGB LED code adapted from:
//https://howtomechatronics.com/tutorials/arduino/how-to-use-a-rgb-led-with-arduino/

//Code for HC-SR04 Ultrasonic Sensor adapted from:
//https://randomnerdtutorials.com/complete-guide-for-ultrasonic-sensor-hc-sr04/

//Code for KY-025 Ultrasonic Sensor adapted from:
//https://arduinomodules.info/ky-025-reed-switch-module/

int button = 2;           //On/OFF switch

int led_pin = 8;          //Left blue LED
int led2_pin = 9;         //Right blue LED

int digitalPin = 3;       // Digital Output of KY-025
int digitalVal;           // digital readings from KY-025


int trigPin = 11;         // Trigger pin of HC-SR04
int echoPin = 12;         // Echo pin of HC-SR04

int r_pin = 7;            //Red pin of RGB LED
int g_pin = 6;            //Green pin of RGB LED
int b_pin = 5;            //Blue pin o RGB LED

long duration, cm, inches;  //values for HC-SR04
int button_in;              //Button output
int button_in_last = 0;     //Last button output
bool on = true;             //If the system is on or not



//From: https://howtomechatronics.com/tutorials/arduino/how-to-use-a-rgb-led-with-arduino/
//Write a given RGB color scheme to the RGB LED
void setColor(int redValue, int greenValue, int blueValue) {
  analogWrite(r_pin, redValue);
  analogWrite(g_pin, greenValue);
  analogWrite(b_pin, blueValue);
}


//Set Up Code
void setup()
{
  //Begin Serial Output
  Serial.begin(9600);

  //Set up Pin to correct modes
  pinMode(led_pin, OUTPUT);
  pinMode(led2_pin, OUTPUT);
  
  pinMode(digitalPin, INPUT);

  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);

  pinMode(button, INPUT);
  
  pinMode(r_pin, OUTPUT);
  pinMode(g_pin, OUTPUT);
  pinMode(b_pin, OUTPUT);

  setColor(0, 0, 255); // Set to Blue
}


void loop()
{

  //Read Button
  button_in = digitalRead(button);

  //Check if the button has been hit
  if(button_in_last == 0 and button_in == 1){

    //If system is on, turn off
    if(on){
      on = false;
      digitalWrite(led_pin, LOW);
      digitalWrite(led2_pin, LOW);
      setColor(0,0,0);
    }

    //Else turn system on
    else{
      on = true;
    }
  }

  //Reset last button input
  button_in_last = button_in;

  //If system is on
  if(on){

    //Turn on bottom leds
    digitalWrite(led_pin, HIGH);
    digitalWrite(led2_pin, HIGH);


    //From: https://randomnerdtutorials.com/complete-guide-for-ultrasonic-sensor-hc-sr04/
    
    // The sensor is triggered by a HIGH pulse of 10 or more microseconds.
    // Give a short LOW pulse beforehand to ensure a clean HIGH pulse:
    digitalWrite(trigPin, LOW);
    delayMicroseconds(5);
    digitalWrite(trigPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(trigPin, LOW);
    

    // Read the signal from the sensor: a HIGH pulse whose
    // duration is the time (in microseconds) from the sending
    // of the ping to the reception of its echo off of an object.
    pinMode(echoPin, INPUT);
    duration = pulseIn(echoPin, HIGH);
    
    // Convert the time into a distance
    cm = (duration/2) / 29.1;     // Divide by 29.1 or multiply by 0.0343
    inches = (duration/2) / 74;   // Divide by 74 or multiply by 0.0135
    
    //End of code from https://randomnerdtutorials.com/complete-guide-for-ultrasonic-sensor-hc-sr04/

    //Read value from reed sensor
    digitalVal = digitalRead(digitalPin);
    Serial.print(digitalVal);

    //If something is in front of user
    if(inches < 5){

      //And reed sensor detects something
      if(digitalVal == HIGH){

        //change to yellow
        setColor(255, 255, 0);
      }
      else{

        //Otherwise change to red
        setColor(255, 0 , 0);
      }
    }

    //If nothing is in front of the user
    else{

      //If the reed detects something
      if(digitalVal == HIGH){

        //Change to green
        setColor(0, 255, 0);
      }
      else{
        //If nothing is happening, change to blue
        setColor(0, 0, 255); 
      }
    }
  }

  //Wait for next iteration
  delay(100);
}
