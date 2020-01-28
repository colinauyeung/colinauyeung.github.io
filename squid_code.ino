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
bool on = true;             //If the system is on



//From: https://howtomechatronics.com/tutorials/arduino/how-to-use-a-rgb-led-with-arduino/
//Write a given RGB color scheme to the RGB LED
void setColor(int redValue, int greenValue, int blueValue) {
  analogWrite(r_pin, redValue);
  analogWrite(g_pin, greenValue);
  analogWrite(b_pin, blueValue);
}


//From: https://randomnerdtutorials.com/complete-guide-for-ultrasonic-sensor-hc-sr04/
//Gets the distance from the UltraSonic sensor
void getUltraSonic(){      

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
}


//Set Up Code
void setup()
{

  Serial.begin(9600);
  
  pinMode(led_pin, OUTPUT);
  pinMode(led2_pin, OUTPUT);
  
  pinMode(digitalPin, INPUT);

  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);

  pinMode(button, INPUT);
  
  pinMode(r_pin, OUTPUT);
  pinMode(g_pin, OUTPUT);
  pinMode(b_pin, OUTPUT);

  setColor(0, 0, 255); // Purple Color 
}


void loop()
{

  
  button_in = digitalRead(button);
  if(button_in_last == 0 and button_in == 1){
    if(on){
      on = false;
    }
    else{
      on = true;
    }
  }

  
  button_in_last = button_in;

  if(on){
    digitalWrite(led_pin, HIGH);
    digitalWrite(led2_pin, HIGH);


    getUtlraSonic();
    
    digitalVal = digitalRead(digitalPin);
  
   
    if(inches < 5){
      if(digitalVal == HIGH){
        setColor(255, 255, 0);
      }
      else{
        setColor(255, 0 , 0);
      }
    }
    else{
      if(digitalVal == HIGH){
        setColor(0, 255, 0);
      }
      else{
        setColor(0, 0, 255); 
      }
    }
  }
  delay(100);
}
